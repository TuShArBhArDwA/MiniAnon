import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: "shortlistme",
    title: "ShortlistMe",
    description: "Transform your resume into a stunning portfolio in seconds. Free Forever.",
    longDescription: "Transform your resume into a stunning, interactive portfolio in seconds. Build, customize, and share a fully-featured portfolio directly from your resume with built-in visitor tracking, SEO meta tags, and premium visual components. Free forever.",
    liveLink: "http://shortlistme.site",
    githubLink: "https://github.com/TuShArBhArDwA",
    image: "/images/shortlistme.png",
    tags: ["Next.js", "AI Parser", "TypeScript", "Tailwind CSS", "Analytics"]
  },
  {
    id: "weaave",
    title: "Weaave",
    description: "Build, connect, and deploy AI workflows visually — once you see it, you won’t go back",
    longDescription: "Weaave is a dynamic node-based canvas for building, connecting, and deploying sophisticated AI workflows. Combine custom prompt chains, LLM nodes, and database triggers visually. Once you see it, you won't go back.",
    liveLink: "https://weaave.minianon.in",
    githubLink: "https://github.com/TuShArBhArDwA/weaave",
    image: "/images/weaave.jpg",
    tags: ["React Flow", "AI Workflows", "LLMs", "Node.js", "Tailwind CSS"]
  },
  {
    id: "minilink",
    title: "MiniLink",
    description: "Create your link-in-bio page in seconds. Free forever.",
    longDescription: "MiniLink is a privacy-focused, ad-free alternative to Linktree. Create your beautiful, custom link-in-bio hub in seconds, loaded with smooth animations and lightning-fast load times. Free forever.",
    liveLink: "https://link.minianon.in",
    githubLink: "https://github.com/TuShArBhArDwA/MiniLink",
    image: "/images/minilink.png",
    tags: ["TypeScript", "Next.js", "Sleek UI", "Tailwind CSS"]
  },
  {
    id: "autopress",
    title: "AutoPress",
    description: "Autonomous AI Editorial. Real Reporting. Independent Perspectives.",
    longDescription: "An autonomous AI editorial engine that crawls, parses, structures, and publishes independent news, reporting, and editorial commentary. Runs fully independently using advanced agent swarms.",
    liveLink: "https://press.minianon.in",
    githubLink: "https://github.com/TuShArBhArDwA/AutoPress",
    image: "/images/autopress.jpeg",
    tags: ["AI Agents", "Python", "LLMs", "Autonomy", "Cron Daemons"]
  },
  {
    id: "hirelens",
    title: "HireLens",
    description: "AI-powered resume screening. Instantly rank candidates, spot skill gaps, and hire 10x faster.",
    longDescription: "A professional recruitment dashboard that leverages LLMs to parse, score, rank, and summarize bulk developer resumes, providing hiring teams with detailed candidate evaluations.",
    liveLink: "https://lens.minianon.in",
    githubLink: "https://github.com/TuShArBhArDwA/HireLens",
    image: "/images/hirelens.png",
    tags: ["AI Screening", "React", "Node.js", "Tailwind CSS", "LLMs"]
  },
  {
    id: "minimock",
    title: "MiniMock",
    description: "Instant chat, social media, and AI mockups. No data saved. No watermark. Easy to use.",
    longDescription: "A canvas-based mockup editor to generate high-fidelity chat, tweet, and social interface images instantly. Easy to customize and export with no watermark and complete client-side data privacy.",
    liveLink: "https://mock.minianon.in",
    githubLink: "https://github.com/TuShArBhArDwA/MiniMock",
    image: "/images/minianonmock.jpg",
    tags: ["JavaScript", "HTML5 Canvas", "Mockup Editor", "Dynamic UI"]
  },
  {
    id: "minirizz",
    title: "MiniRizz",
    description: "Your AI Wingman for the digital age – never get left on read again",
    longDescription: "A mobile application utilizing GPT APIs to generate engaging, contextual, and witty messaging suggestions for modern chat conversations. Never get left on read again.",
    liveLink: "https://rizz.minianon.in",
    githubLink: "https://github.com/TuShArBhArDwA/minirizz",
    image: "/images/minirizz.jpg",
    tags: ["AI Chat", "React Native", "GPT API", "Mobile App"]
  },
  {
    id: "pulseai-prep",
    title: "PulseAI Prep",
    description: "AI-driven interview preparation with mock interviews and feedback",
    longDescription: "An interactive educational portal providing mock technical and behavioral interviews. Conducts real-time analysis on candidate responses and delivers deep analytical feedback with structured grading.",
    liveLink: "https://ai-interview-platform-pink.vercel.app/",
    githubLink: "https://github.com/TuShArBhArDwA/PulseAI",
    image: "/images/pulse.png",
    tags: ["AI Interviewer", "React", "Node.js", "WebSocket"]
  },
  {
    id: "anonbeats",
    title: "AnonBeats",
    description: "Personal, ad-free music player for uploading tracks, building playlists, and streaming",
    longDescription: "An elegant, lightweight music application. Upload your audio tracks, compile playlists, and stream high-quality audio ad-free on a clean, responsive neumorphic media player.",
    liveLink: "https://beats.minianon.in",
    githubLink: "https://github.com/TuShArBhArDwA/AnonBeats",
    image: "/images/beats.jpg",
    tags: ["React", "Audio APIs", "Tailwind CSS", "Neumorphic Player"]
  },
  {
    id: "canvas-editor",
    title: "Canvas Editor",
    description: "Minimal 2D canvas for ideas with instant cloud persistence",
    longDescription: "A minimalist infinite 2D drafting canvas designed for quick brainstorming and wireframing, complete with real-time cloud sync and collaborative persistence.",
    liveLink: "https://canvas.minianon.in",
    githubLink: "https://github.com/TuShArBhArDwA/Canvas-Editor",
    image: "/images/canvas.png",
    tags: ["React", "HTML5 Canvas API", "Cloud DB", "Brainstorming"]
  },
  {
    id: "maze-solver",
    title: "Maze Solver",
    description: "An interactive maze generator and solver with multiple algorithms",
    longDescription: "A visual simulation highlighting maze generation and solving via DFS, BFS, Dijkstra, and A* search algorithms. Customize wall densities and watch algorithm speeds in real-time.",
    liveLink: "https://maze.minianon.in",
    githubLink: "https://github.com/TuShArBhArDwA/MazeSolver",
    image: "/images/path.png",
    tags: ["HTML5 Canvas", "Search Algorithms", "React", "Visualizations"]
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}

export const getAllProjects = (): Project[] => {
  return projects
}
