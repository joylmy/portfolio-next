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
  SiKibana,
} from '@icons-pack/react-simple-icons'
// import Marquee from 'react-fast-marquee'
import IconMarquee from '@/components/ui/icon-marquee'

const SkillCard = React.memo(() => {
  const icons = [
    <SiJavascript key="js" className="mx-4 w-10 h-10" />,
    <SiReact key="rc" className="mx-4 w-10 h-10" />,
    <SiPython key="py" className="mx-4 w-10 h-10" />,
    <SiNextdotjs key="nj" className="mx-4 w-10 h-10" />,
    <SiNodedotjs key="nx" className="mx-4 w-10 h-10" />,
    <SiTypescript key="ts" className="mx-4 w-10 h-10" />,
    <SiTailwindcss key="tw" className="mx-4 w-10 h-10" />,
    <SiGit key="git" className="mx-4 w-10 h-10" />,
  ]

  const icons2 = [
    <SiAmazonwebservices key="1" className="mx-4 w-10 h-10" />,
    <SiAmazoncloudwatch key="2" className="mx-4 w-10 h-10" />,
    <SiOpensearch key="3" className="mx-4 w-10 h-10" />,
    <SiAwslambda key="4" className="mx-4 w-10 h-10" />,
    <SiElasticsearch key="js5" className="mx-4 w-10 h-10" />,
    <SiKibana key="6" className="mx-4 w-10 h-10" />,
    <SiDynatrace key="7" className="mx-4 w-10 h-10" />,
    <SiJira key="8" className="mx-4 w-10 h-10" />
  ]

  const icons3 = [
  <SiAnsible key="1" className="mx-4 w-10 h-10" />,
  <SiFigma key="2" className="mx-4 w-10 h-10" />,
  <SiLinux key="3" className="mx-4 w-10 h-10" />,
  <SiDocker key="4" className="mx-4 w-10 h-10" />,
  <SiAdobelightroom key="5" className="mx-4 w-10 h-10" />,
  
  ]

  return (
    <div className="flex flex-col gap-4 overflow-hidden rounded-xl p-4 shadow-feature-card dark:shadow-feature-card-dark lg:p-6">
      <div className="flex items-center gap-2">
        <Wrench className="h-[18px] w-[18px]" />
        <h2 className="text-sm font-light">Skills</h2>
      </div>

      {/* Use Marquee instead */}
      <div className="flex flex-col gap-4">
        <IconMarquee icons={icons} direction="left" />
        <IconMarquee icons={icons2} direction="right" />
        <IconMarquee icons={icons3} direction="left" />
      </div>
    </div>
  )
})

export default SkillCard
