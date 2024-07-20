'use client'
import React, { useEffect } from 'react'
import Image from '@/components/Image'

const Hero = () => {
  return (
    <div className="space-y-5 md:my-5">
      {/* Text and image */}
      <div className="flex flex-col gap-8 ">
        {/* Head - motion effects*/}
        <>
          <h1 className="text-5xl font-bold">
            🐯 Hi I’m Mengyuan Li
            <br />
            aka Joy
          </h1>
          <h1 className="text-3xl font-medium">
            By day, I build cloud solutions
            <br />
            <br />
            By night, I swim / rescue cats / coordinate music (上下翻动效果）
          </h1>
        </>
        {/* Image */}
        <div>
          <Image
            alt="Mengyuan Li"
            // height={130}
            // width={130}
            src="/static/images/IMG_0184.jpg"
            className="rounded-full object-scale-down"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
