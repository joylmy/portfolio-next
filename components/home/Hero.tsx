'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="space-y-5 md:my-5">
      {/* Text and image */}
      <div className="flex flex-col-reverse gap-8 md:flex-row ">
        {/* Head - motion effects*/}
        <div className="space-y-5">
          {/* Text */}
          <div className="space-y-5">
            <div className="space-y-2 text-5xl font-bold">
              <h1>🐯 Hi I’m Mengyuan Li</h1>
              <h1>aka Joy</h1>
            </div>
            <div className="space-y-3 text-3xl font-normal">
              <h1>By day, I build cloud solutions </h1>
              <h1>By night, I swim / take photos / rescue cats / coordinate music</h1>
            </div>
          </div>
          {/* Timzone */}
          <div className="text-muted-foreground text-base">Toronto • UTC -5</div>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-start">
          <div className="relative h-48 w-48 overflow-hidden sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96">
            <Image
              alt="Mengyuan Li"
              src="/static/images/IMG_0184.jpg"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
