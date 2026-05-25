'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  description: string;
  achievements?: string[];
  href?: string;
  logoUrl?: string;
}

export default function ExperienceContent() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  const experiences: ExperienceItem[] = [
    {
      company: "Vitti Capital",
      position: "Python Developer Intern",
      duration: "Mar 2026 – Present",
      description: "Built a real-time options trading dashboard and developed AI-powered financial market intelligence pipelines.",
      achievements: [
        "Built a real-time options trading dashboard (OptionScope) using WebSockets, enabling sub-second tracking of prices, Greeks, and multi-leg strategies across 150+ symbols.",
        "Designed a high-performance, serverless architecture with optimized data handling and edge rewrites, ensuring scalable, low-latency communication without backend overhead.",
        "Developed an AI-powered market intelligence pipeline using LLMs to generate summaries, sentiment scores, and actionable insights from financial announcements in near real-time."
      ],
      href: "https://vitti.capital",
      logoUrl: "/vitti.jpeg",
    },
    {
      company: "topmate.io",
      position: "Industry Evangelist",
      duration: "Sep 2024 – Present",
      description: "Conducted technical mentoring sessions to guide peers and students through resume building and interview strategy.",
      achievements: [
        "Delivered 300+ mentorship sessions helping students and developers improve resumes, prepare for technical interviews, and navigate software engineering careers.",
        "Achieved Top 0.1% mentor ranking with a 4.67/5 rating, earning recognition such as People’s Choice and Community Care badges.",
        "Provided personalized guidance on problem-solving frameworks, interview strategy, and confidence-building to improve interview readiness."
      ],
      href: "https://topmate.io/tusharbhardwaj",
      logoUrl: "/topmate.jpeg",
    },
    {
      company: "Microsoft",
      position: "Software Engineering Intern",
      duration: "Jun 2025 – Aug 2025",
      description: "Designed and benchmarked container control-plane horizontal scaling Kubernetes controllers in Go.",
      achievements: [
        "Designed and built a shard-aware Kubernetes controller in Go to enable horizontal scaling of control-plane reconciliation workloads.",
        "Improved reconciliation throughput by optimizing informer reuse and event-driven processing, reducing unnecessary API server calls.",
        "Performed performance benchmarking and load testing on Kubernetes clusters to identify system bottlenecks and improve controller reliability."
      ],
      href: "https://microsoft.com",
      logoUrl: "/microsoft.png",
    }
  ]

  const toggleExpanded = (company: string) => {
    setExpanded(prev => ({
      ...prev,
      [company]: !prev[company]
    }))
  }

  return (
    <div className="space-y-4 dark:text-white/70 text-black/70 pb-4">
      {experiences.map((exp) => {
        const isExpanded = expanded[exp.company]
        
        return (
          <div key={exp.company} className="rounded-lg p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center overflow-hidden shrink-0">
                  {exp.logoUrl ? (
                    <Image 
                      src={exp.logoUrl} 
                      alt={exp.company}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-sm sm:text-lg font-medium dark:text-white text-black">
                      {exp.company.charAt(0)}
                    </span>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium dark:text-white text-black text-sm sm:text-lg">
                    {exp.href ? (
                      <Link 
                        href={exp.href} 
                        target="_blank" 
                        className="hover:text-[#006FEE] transition-colors"
                      >
                        {exp.company}
                      </Link>
                    ) : (
                      exp.company
                    )}
                  </h3>
                  <p className="text-xs sm:text-sm opacity-70">
                    {exp.position}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4 pl-[3.25rem] sm:pl-0">
                <div className="sm:text-right shrink-0">
                  <p className="text-xs sm:text-sm opacity-50">
                    {exp.duration}
                  </p>
                </div>
                
                {exp.achievements && exp.achievements.length > 0 && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => toggleExpanded(exp.company)}
                        className="shrink-0 p-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                        aria-expanded={isExpanded}
                        aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
                      >
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      {isExpanded ? 'Collapse details' : 'Expand details'}
                    </TooltipContent>
                  </Tooltip>
                )}
              </div>
            </div>
            
            {exp.achievements && exp.achievements.length > 0 && (
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isExpanded ? 'max-h-[2000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
                  <ul className="space-y-2.5 text-xs sm:text-sm opacity-80">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex gap-2.5">
                        <span className="text-[#006FEE] shrink-0 mt-1.5">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
