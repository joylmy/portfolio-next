'use client'
import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { motion, useScroll, useSpring } from 'framer-motion'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company } = content
  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      <div className="pt-4">
        <motion.div
          className="fixed left-0 right-0 top-0 h-1 origin-left bg-primary-200 dark:bg-darkPrimary-200"
          style={{ scaleX }}
        />
        <div className="mb-4 flex flex-col-reverse items-center justify-between sm:flex-row sm:items-center">
          <div className="text-center sm:text-left">
            <h1 className="text-xl font-bold md:text-3xl lg:text-4xl">Mengyuan Li</h1>
            <h2 className="text-sm font-normal md:text-base">
              {occupation} at <span className="font-semibold">{company}</span>
            </h2>
          </div>
          <div>
            <Image
              alt="Mengyuan Li"
              height={130}
              width={130}
              src={avatar || ''}
              className="rounded-full object-scale-down"
            />
          </div>
        </div>
        <div className="prose max-w-none pb-4 text-justify text-sm dark:prose-invert md:text-lg xl:col-span-2">
          {children}
        </div>
      </div>
    </>
  )
}
