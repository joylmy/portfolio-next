interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  tags?: string[]
}

const projectsData: Project[] = [
  {
    title: 'Personal Portfolio',
    description: `My personal website and blog is a place where I share things I am learning and enjoying. It is built with Next.js, TailwindCSS, and TypeScript, and MDX is used to manage Markdown content.`,
    // TODO: add img src when homepage redone
    // imgSrc: '/static/images/google.png',
    // TODO: change website when deployed
    href: 'https://www.google.com',
    tags: ['NextJS', 'TailwindCSS', 'TypeScript', 'MDX'],
  },
  {
    title: 'Auto-Update-Dependency',
    description: `A npm tool that could upgrade all dependencies of any project you want to update at one time.`,
    // imgSrc: '/static/images/time-machine.jpg',
    href: 'https://github.com/joylmy/Auto-Update-Dependency',
    tags: ['JavaScript','NodeJS']
  },
]

export default projectsData
