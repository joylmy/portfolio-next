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
    imgSrc: '/static/images/google.png',
    // TODO: change website when deployed
    href: 'https://www.google.com',
    tags: ['NextJS', 'TailwindCSS', 'TypeScript', 'MDX'],
  },
  {
    title: 'The Time Machine',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
