
'use client'
import React,{useEffect} from 'react'
import Image from 'next/image'
import { motion,useAnimate } from 'framer-motion'

const TEXT = [
  {
    text: 'swim',
    className: 'bg-clip-text text-transparent bg-gradient-to-r from-[#ff1835] to-[#ffc900]',
  },
  {
    text: 'take photos',
    className: 'bg-clip-text text-transparent bg-gradient-to-r from-[#fca311] to-[#00b4d8]',
  },
  {
    text: 'rescue cats',
    className: 'bg-clip-text text-transparent bg-gradient-to-r from-[#f72585] to-[#4cc9f0]',
  },
  {
    text: 'coordinate music',
    className: 'bg-clip-text text-transparent bg-gradient-to-r from-[#9381ff] to-[#ffd8be]',
  },
  {
    text: 'swim',
    className: 'bg-clip-text text-transparent bg-gradient-to-r from-[#ff1835] to-[#ffc900]',
  },
]

const Hero = () => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    void animate(
      [
        [scope.current, { y: '0%' }, { duration: 0.3 }],
        [scope.current, { y: '-20%' }, { duration: 0.3, at: '+1.3' }],
        [scope.current, { y: '-40%' }, { duration: 0.3, at: '+1.3' }],
        [scope.current, { y: '-60%' }, { duration: 0.3, at: '+1.3' }],
        [scope.current, { y: '-80%' }, { duration: 0.3, at: '+1.3' }],
      ],
      {
        repeat: Number.POSITIVE_INFINITY,
      }
    )
  }, [animate, scope])


  return (
    <div className="space-y-5 md:my-5 ">
      {/* Text and image */}
      <div className="flex flex-col-reverse gap-8 md:flex-row justify-between ">
        {/* Head - motion effects */}
        <div className="space-y-5">
          {/* Text */}
          <div className="space-y-5">
            <div className="space-y-4 text-4xl md:text-5xl font-bold ">
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
                  className="relative inline-block rounded-lg  bg-gradient-to-r from-primary-300 to-indigo-300 px-1 pb-1 text-white dark:from-darkPrimary-500 dark:to-amber-600 "
                >
                  Joy
                </motion.span>
              </h1>
            </div>
            <div className="space-y-4 text-2xl font-normal md:text-3xl">
              <h1>By day, I build cloud solutions</h1>
              <h1 >
                By night, I {''}
                <div className="inline-grid h-8 overflow-hidden ">
                  <div ref={scope}>
                    {TEXT.map(({ text, className }, i) => (
                      // eslint-disable-next-line @eslint-react/no-array-index-key -- it's static
                      <div className={className} key={i}>
                        {text}
                      </div>
                    ))}
                  </div>
                </div>{' '}
              </h1>
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

