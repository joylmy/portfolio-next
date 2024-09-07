import React from 'react'
import Marquee from 'react-fast-marquee'

interface IconMarqueeProps {
  // You can define any props you need here
  icons: React.ReactNode[],
  direction: string// Example: array of icon URLs or class names
}

const IconMarquee: React.FC<IconMarqueeProps> = ({ icons,direction }) => {
  return (
    <div>
      <Marquee
        pauseOnHover={true}
        autoFill={true}
        direction = {direction}
        speed={20}
      >
        {icons.map((icon, index) => (
          <div key={index}>
            {icon}
          </div>
        ))}
      </Marquee>
    </div>
  )
}

export default IconMarquee
