import React from 'react'
import { Wrench } from 'lucide-react'

import {
  SiJavascript,
  SiReact,
  SiPython,
  SiNextdotjs,
  SiAmazonwebservices,
  SiAnsible,
  SiTypescript,
  SiFigma,
  SiTailwindcss,
  SiOpensearch,
  SiElasticsearch,
  SiDynatrace,
  SiGit,
  SiAmazoncloudwatch,
  SiAwslambda,
  SiLinux,
  SiAdobelightroom,
  SiJira,
  SiNodedotjs,
  SiDocker,
} from '@icons-pack/react-simple-icons'
import { FloatingDock } from '../ui/floating-dock'

const SkillCard = React.memo(() => {

  const otherLinks = [
    {
      title: 'Ansible',
      icon: <SiAnsible className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '#',
    },
    {
      title: 'Git',
      icon: <SiGit className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '#',
    },
    {
      title: 'Jira',
      icon: <SiJira className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '#',
    },
    {
      title: 'Docker',
      icon: <SiDocker className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '#',
    },
    {
      title: 'Figma',
      icon: <SiFigma className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '#',
    },
    {
      title: 'Linux',
      icon: <SiLinux className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '#',
    },
  ]

  const obsLinks = [
    {
      title: 'OpenSearch',
      icon: <SiOpensearch className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '#',
    },
    {
      title: 'ElasticSearch',
      icon: <SiElasticsearch className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '#',
    },
    {
      title: 'Dynatrace',
      icon: <SiDynatrace className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '#',
    },
  ] 
  
  const cloudLinks = [
     {
       title: 'AWS',
       icon: (
         <SiAmazonwebservices className="h-full w-full text-neutral-500 dark:text-neutral-300" />
       ),
       href: '#',
     },
     {
       title: 'AWS Lambda',
       icon: <SiAwslambda className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
       href: '#',
     },
     {
       title: 'AWS CloudWatch',
       icon: <SiAmazoncloudwatch className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
       href: '#',
     },
   ]
   const programeLanguageLinks = [
     {
       title: 'JavaScript',
       icon: <SiJavascript className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
       href: '#',
     },
     {
       title: 'React',
       icon: <SiReact className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
       href: '#',
     },
     {
       title: 'Python',
       icon: <SiPython className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
       href: '#',
     },
     //  {
     //    title: 'Aceternity UI',
     //    icon: (
     //      <Image
     //        src="https://assets.aceternity.com/logo-dark.png"
     //        width={20}
     //        height={20}
     //        alt="Aceternity Logo"
     //      />
     //    ),
     //    href: '#',
     //  },
     {
       title: 'Next.JS',
       icon: <SiNextdotjs className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
       href: '#',
     },

     {
       title: 'TypeScript',
       icon: <SiTypescript className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
       href: '#',
     },
     {
       title: 'Node.Js',
       icon: <SiNodedotjs className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
       href: '#',
     },
     {
       title: 'TailwindCSS',
       icon: <SiTailwindcss className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
       href: '#',
     },
   ]

  const allLinks = [...programeLanguageLinks, ...cloudLinks, ...obsLinks,...otherLinks]

  return (
    <div className="flex flex-col gap-10 rounded-xl p-4 shadow-feature-card dark:shadow-feature-card-dark lg:p-6">
      <div className="flex items-center gap-2">
        <Wrench className="h-[18px] w-[18px]" />
        <h2 className="text-sm font-light">Skills</h2>
      </div>

      <div className="flex items-start w-full my-4 ">
        <FloatingDock
          mobileClassName="translate-y-10" // only for demo, remove for production
          items={allLinks}
        />
        
      </div>
    </div>
  )
})

export default SkillCard
