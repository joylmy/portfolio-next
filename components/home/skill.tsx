import React from 'react'
import { Wrench } from 'lucide-react'

const SkillCard = React.memo(()=> {
  return (
    <div className="shadow-feature-card dark:shadow-feature-card-dark flex flex-col gap-5 rounded-xl p-4 lg:p-6">
      <div className="flex items-center gap-2">
        <Wrench className="h-[18px] w-[18px]" />
        <h2 className="text-sm font-light">Skills</h2>
      </div>
    </div>
  )
}) 

export default SkillCard