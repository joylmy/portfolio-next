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
  SiDocker
} from '@icons-pack/react-simple-icons'

const SkillCard = React.memo(()=> {
  return (
    <div className="flex flex-col gap-5 rounded-xl p-4 shadow-feature-card dark:shadow-feature-card-dark lg:p-6">
      <div className="flex items-center gap-2">
        <Wrench className="h-[18px] w-[18px]" />
        <h2 className="text-sm font-light">Skills</h2>
      </div>
      {/* TODO: Place to put floating skill stack 
      
      UI Component:
      https://ui.aceternity.com/components/floating-dock
      
      
      */}
      <div>
        <SiReact size={30} />
        <SiJavascript size={30} />
        <SiTypescript size={30} />
        <SiNodedotjs size={30} />
        <SiPython size={30} />
        <SiNextdotjs size={30} />
        <SiTailwindcss size={30} />
        <SiAmazonwebservices size={30} />
        <SiAmazoncloudwatch size={30} />
        <SiAwslambda size={30} />
        <SiAnsible size={30} />
        <SiFigma size={30} />
        <SiOpensearch size={30} />
        <SiElasticsearch size={30} />
        <SiDynatrace size={30} />
        <SiGit size={30} />
        <SiDocker size={30} />
        <SiLinux size={30} />
        <SiAdobelightroom size={30} />
        <SiJira size={30} />
      </div>
    </div>
  )
}) 

export default SkillCard