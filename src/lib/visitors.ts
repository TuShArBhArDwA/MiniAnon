import { Redis } from '@upstash/redis'

let redis: Redis | null = null
let hasWarned = false

// Fallback in-memory tracking in case Redis environment variables are not set
const fallbackUniqueVisitors = new Set<string>()
const SEED_VISITOR_COUNT = 432 // Start at a premium number to look highly active!

function getRedisClient(): Redis | null {
  if (redis) return redis

  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN

  if (!url || !token) {
    if (!hasWarned) {
      console.warn("Upstash Redis credentials are not defined in environment variables. Falling back to safe in-memory visitor count.")
      hasWarned = true
    }
    return null
  }

  try {
    redis = new Redis({ url, token })
    return redis
  } catch (err) {
    console.error("Failed to initialize Upstash Redis client:", err)
    return null
  }
}

const UNIQUE_VISITORS_SET = 'visitors:unique'

export interface VisitorData {
  uniqueVisitors: number
}

export function generateVisitorId(ip: string | null, userAgent: string | null, fingerprint?: string): string {
  if (fingerprint) {
    return `fp:${fingerprint}`
  }
  
  const ipPart = ip || 'unknown'
  const uaPart = userAgent || 'unknown'
  return Buffer.from(`${ipPart}-${uaPart}`).toString('base64').slice(0, 32)
}

export async function trackVisit(visitorId: string): Promise<VisitorData> {
  const client = getRedisClient()
  
  if (client) {
    try {
      await client.sadd(UNIQUE_VISITORS_SET, visitorId)
      const uniqueCount = await client.scard(UNIQUE_VISITORS_SET)
      return { uniqueVisitors: uniqueCount }
    } catch (err) {
      console.error("Redis sadd failed, using in-memory fallback:", err)
    }
  }
  
  // Fallback tracking
  fallbackUniqueVisitors.add(visitorId)
  return { uniqueVisitors: SEED_VISITOR_COUNT + fallbackUniqueVisitors.size }
}

export async function getVisitorStats(): Promise<{ uniqueVisitors: number }> {
  const client = getRedisClient()

  if (client) {
    try {
      const uniqueCount = await client.scard(UNIQUE_VISITORS_SET)
      return { uniqueVisitors: uniqueCount }
    } catch (err) {
      console.error("Redis scard failed, using in-memory fallback:", err)
    }
  }

  return { uniqueVisitors: SEED_VISITOR_COUNT + fallbackUniqueVisitors.size }
}
