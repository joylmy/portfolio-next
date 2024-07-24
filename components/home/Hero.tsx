
'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const TEXT = [
  {
    text: 'swim',
  },
  {
    text: 'take photos',
  },
  {
    text: 'rescue cats',
  },
  {
    text: 'coordinate music',
  },
]

const Hero = () => {
  return (
    <div className="space-y-5 md:my-5">
      {/* Text and image */}
      <div className="flex flex-col-reverse gap-8 md:flex-row">
        {/* Head - motion effects */}
        <div className="space-y-5">
          {/* Text */}
          <div className="space-y-5">
            <div className="space-y-2 text-5xl font-bold">
              <h1>🐯 Hi I’m Mengyuan Li</h1>
              <h1>
                aka{' '}
                <motion.span
                  initial={{
                    backgroundSize: '0% 100%',
                  }}
                  animate={{
                    backgroundSize: '100% 100%',
                  }}
                  transition={{
                    duration: 2,
                    ease: 'linear',
                    delay: 0.3,
                  
                  }}
                  style={{
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'left center',
                    display: 'inline',
                  }}
                  className=
                    "relative inline-block rounded-lg  bg-gradient-to-r text-white from-primary-300 to-indigo-300 px-1 pb-1 dark:from-darkPrimary-500 dark:to-amber-600 "               
                >
                  Joy
                </motion.span>
              </h1>
            </div>
            <div className="space-y-3 text-3xl font-normal">
              <h1>By day, I build cloud solutions</h1>
              <h1>By night, I swim / take photos / rescue cats / coordinate music</h1>
            </div>
          </div>
          {/* Timezone */}
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

