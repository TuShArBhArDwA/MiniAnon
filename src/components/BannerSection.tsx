'use client'

import Image from 'next/image'

interface BannerSectionProps {
  quote?: string
  bannerImage?: string
}

export default function BannerSection({ 
  quote = "You make your own luck if you stay at it long enough.",
  bannerImage = "/banner.jpg"
}: BannerSectionProps) {
  return (
    <div className="w-full mb-2 relative">
      <div className="relative" style={{ height: 'auto' }}>
        <Image 
          alt="Banner" 
          width={1240} 
          height={900} 
          className="rounded-none w-full h-[180px] sm:h-[270px] object-cover" 
          src={bannerImage}
          style={{ color: 'transparent', minHeight: '100px' }}
          priority
        />
        <div className="absolute inset-0 flex items-center justify-start px-8 sm:px-12 md:px-16 max-w-[75%] sm:max-w-[65%]">
          <p className="text-white text-base sm:text-xl italic font-[family-name:var(--font-instrument-serif)] text-left drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">{quote}</p>
        </div>
      </div>
    </div>
  )
}
