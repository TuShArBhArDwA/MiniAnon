'use client'

import OnekoCat from '@/components/OnekoCat'
import { MasonryGrid } from '@/components/MasonryGrid'
import FadeIn from '@/components/FadeIn'
import DiagonalPattern from '@/components/DiagonalPattern'
import PageNavigation from '@/components/Navigation'
import { Project } from '@/types/project'
import NeumorphButton from '@/components/NeumorphButton'

interface ProjectsListClientProps {
  projects: Project[]
}

export default function ProjectsListClient({ projects }: ProjectsListClientProps) {
  return (
    <div className="min-h-screen transition-colors duration-300 relative" style={{ fontFamily: 'var(--font-hk-grotesk)' }}>
      <OnekoCat />
      <div className="relative mx-auto max-w-4xl">
        <DiagonalPattern side="left" topOffset="0" />
        <DiagonalPattern side="right" topOffset="0" />
        
        <div className="mx-auto sm:w-[calc(100%-120px)] w-full max-w-4xl sm:px-0">
          <div className="prose dark:prose-invert max-w-none">
            <div className="text-base">
              <FadeIn delay={0.1} duration={0.5}>
                <div className="sm:px-12 py-2">
                  <div className="px-4 mb-4 sm:mb-6 pt-4 sm:pt-6">
                    <div className="mb-4 sm:mb-6">
                      <PageNavigation />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-[family-name:var(--font-instrument-serif)] italic font-medium mb-4 text-neutral-900 dark:text-neutral-100 tracking-tight">
                      proof of work
                    </h1>
                    <p className="text-lg text-neutral-500 dark:text-neutral-400 tracking-wide">
                      A showcase of my work and side projects.
                    </p>
                  </div>
                </div>
              </FadeIn>
              
              <div className="sm:px-12 py-2">
                <div className="px-4">
                  <MasonryGrid projects={projects} />
                  
                  {/* More on GitHub button */}
                  <FadeIn delay={0.5}>
                    <div className="flex justify-center mt-8 sm:mt-10">
                      <a 
                        href="https://github.com/TuShArBhArDwA" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <NeumorphButton className="inline-flex items-center px-5 py-2.5 text-xs sm:text-sm text-neutral-800 dark:text-white/80 hover:text-neutral-900 dark:hover:text-white">
                          More on → GitHub
                        </NeumorphButton>
                      </a>
                    </div>
                  </FadeIn>
                </div>
              </div>
              <div className="pb-24 sm:pb-28" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
