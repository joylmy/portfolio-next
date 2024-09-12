'use client'
import React from 'react'


import { AnimatePresence, motion } from 'framer-motion'
import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect'

interface CardProps {
  content: string
  title: string
  friendName: string
  friendLink?: string
  children?: React.ReactNode
}

const Card: React.FC<CardProps> = ({ content, title, friendName, friendLink, children }) => {
  const [hovered, setHovered] = React.useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card relative mx-auto flex h-[30rem]  w-full max-w-sm items-center justify-center border border-black/[0.2] p-4 dark:border-white/[0.2]"
    >
      <Icon className="absolute -left-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -right-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -right-3 h-6 w-6 text-black dark:text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 h-full w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="mx-auto flex w-full items-center justify-center text-center  transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0">
          {title}
        </div>
        <p className="relative text-xl font-bold text-black opacity-0 transition  duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100">
          {content}
          <br />
          <a
            href="https://external-link.com" // Replace this with the actual link
            target="_blank"
            rel="noopener noreferrer"
            // Add any class for styling
          >
            {friendName}
          </a>
        </p>
      </div>
    </div>
  )
}



export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  )
}


const FriendsRegard = () => {
  const [hovered, setHovered] = React.useState(false)

  const EricaRegard =
    'Resiliency is a recurring trait I see in my interactions with Mengyuan. Whether it’s a small or large goal, she sees it through to the end when she sets her mind to it.'

  const MarkRegard =
    'Willingness and ability to learn new technologies and adapt to changing requirements 2. Strong interpersonal skills to work effectively within a team and communicate clearly with stakeholders 3. Patience to troubleshoot issues and persistence to overcome obstacles.'

  return (
    <div className="relative my-24 ">
      {/* Title */}
      <div>
        <h2 className="text-center text-3xl font-bold leading-tight md:text-4xl">
          How Friends See Me
        </h2>
      </div>

      <div className="mx-auto flex w-full flex-col items-center justify-center gap-4  px-8 py-20 lg:flex-row">
        <Card title="Resiliency" content={EricaRegard} friendName="Erica Tham">
          <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-emerald-900" />
        </Card>
        <Card title="Resiliency" content={EricaRegard} friendName="Erica Tham">
          <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-emerald-900" />
        </Card>
        <Card title="Resiliency" content={EricaRegard} friendName="Erica Tham">
          <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-emerald-900" />
        </Card>
      </div>
    </div>
  )
}

export default FriendsRegard

// ////////////////////////


// export function CanvasRevealEffectDemo() {
//   return (
//     <>
//       <div className="mx-auto flex w-full flex-col items-center justify-center gap-4 bg-white px-8 py-20 dark:bg-black lg:flex-row">
//         <Card title="Sheetal is Nisha" icon={<AceternityIcon />}>
//           <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-emerald-900" />
//         </Card>
//         <Card title="Nisha is Munni" icon={<AceternityIcon />}>
//           <CanvasRevealEffect
//             animationSpeed={3}
//             containerClassName="bg-black"
//             colors={[
//               [236, 72, 153],
//               [232, 121, 249],
//             ]}
//             dotSize={2}
//           />
//           {/* Radial gradient for the cute fade */}
//           <div className="absolute inset-0 bg-black/50 [mask-image:radial-gradient(400px_at_center,white,transparent)] dark:bg-black/90" />
//         </Card>
//         <Card title="Munni is Aditi" icon={<AceternityIcon />}>
//           <CanvasRevealEffect
//             animationSpeed={3}
//             containerClassName="bg-sky-600"
//             colors={[[125, 211, 252]]}
//           />
//         </Card>
//       </div>
//     </>
//   )
// }





