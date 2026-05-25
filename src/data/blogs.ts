import { BlogPost } from '@/types/blog'

export const blogs: BlogPost[] = [
  {
    id: 'eightfold-ai-internship',
    title: 'Inside Eightfold.ai’s Agentic AI Internship Hiring Process (2026)',
    readTime: '4 min read',
    externalUrl: 'https://medium.com/@bhardwajtushar2004/inside-eightfold-ais-agentic-ai-internship-hiring-process-2026-f86dcb625aa8'
  },
  {
    id: 'stripe-interview',
    title: 'Stripe Technical Team Screen Interview Experience',
    readTime: '3 min read',
    externalUrl: 'https://medium.com/@bhardwajtushar2004/stripe-technical-team-screen-interview-experience-3a6a9f958075'
  },
  {
    id: 'trilogy-interview',
    title: 'Trilogy Innovations Winter Internship 2026: On-Campus Interview Experience',
    readTime: '3 min read',
    externalUrl: 'https://medium.com/@bhardwajtushar2004/trilogy-innovations-winter-internship-2026-on-campus-interview-experience-7f2e243ac1c6'
  },
  {
    id: 'cred-machine-coding',
    title: 'CRED Backend Intern: Machine Coding Round Interview Experience',
    readTime: '4 min read',
    externalUrl: 'https://medium.com/@bhardwajtushar2004/cred-backend-intern-machine-coding-round-interview-experience-66a3e28abb90'
  },
  {
    id: 'optum-interview',
    title: 'Optum Data Engineering Interview Experience (Mumbai)',
    readTime: '4 min read',
    externalUrl: 'https://medium.com/@bhardwajtushar2004/optum-data-engineering-interview-experience-mumbai-818b53371fde'
  },
  {
    id: 'microsoft-internship',
    title: 'How I Secured a Microsoft Software Engineer Internship (2025)',
    readTime: '4 min read',
    externalUrl: 'https://medium.com/@bhardwajtushar2004/microsoft-swe-intern-hyderabad-bengaluru-noida-sep-2024-offer-28f71a07adce'
  }
]

export const getBlogById = (id: string): BlogPost | undefined => {
  return blogs.find(blog => blog.id === id)
}
