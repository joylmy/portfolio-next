import React, { useState, useEffect } from 'react'
import { PawPrint, SmilePlus } from 'lucide-react'

const FunFact: React.FC = () => {
  const [daysInCatRecue, setDaysInCatRescue] = useState(0)
  const [daysWithConerstone,setDaysWithConerStone] = useState(0)
  const [dayWithCloud,setDayWithCloud] = useState(0)

  useEffect(() => {
    const startCatDay = new Date('2023-06-01')
    const currentDate = new Date()
    const diffInCatMs = currentDate.getTime() - startCatDay.getTime()
    const diffInCatDays = Math.floor(diffInCatMs / (1000 * 60 * 60 * 24))

    const startMusicDay = new Date('2023-08-06')
    const diffInMusicMs = currentDate.getTime() - startMusicDay.getTime()
    const diffInMusicDays = Math.floor(diffInMusicMs / (1000 * 60 * 60 * 24))

    const startCloudDays = new Date('2022-01-19')
    const diffInCloudMs = currentDate.getTime() - startCloudDays.getTime()
    const diffInCloudDays = Math.floor(diffInCloudMs / (1000 * 60 * 60 * 24))
    setDaysInCatRescue(diffInCatDays)
    setDaysWithConerStone(diffInMusicDays)
    setDayWithCloud(diffInCloudDays)

  }, [])

  return (
    <div className="flex flex-col gap-5 rounded-xl p-4 shadow-feature-card dark:shadow-feature-card-dark lg:p-6">
      <div className="flex items-center gap-2">
        <SmilePlus className="h-[18px] w-[18px]" />
        <h2 className="text-sm font-light">Fun Facts</h2>
      </div>
      <div className="flex flex-col gap-3">
        <p>☁️ {dayWithCloud} days with AWS</p>
        <p>🐱 {daysInCatRecue} days with Toronto Cat Rescue</p>
        <p>🎹 {daysWithConerstone} days with CornerStone Church Music Team</p>
      </div>
    </div>
  )
}

export default FunFact
