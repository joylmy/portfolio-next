
import React from 'react'
import { SOCIAL_LINKS } from 'configs/Links'
import { Link } from 'lucide-react'
// icon and link, 3 * 3 = 9 grids
const Connect = () => {
return (
  <div className="flex flex-col gap-6 rounded-xl p-4 lg:p-6">
    <div className="flex items-center gap-2">
      <Link className="size-[18px]" />
      <h2 className="text-sm font-light">Connect</h2>
    </div>
    <div className="grid grid-cols-3 gap-4 px-2">
      {SOCIAL_LINKS.map((link) => {
        const { href, title, icon } = link

        const Icon = icon

        return (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3  hover:text-primary-500 dark:hover:text-darkPrimary-500"
          >
            <Icon className="size-[18px]" />
            <span className="font-light">{title}</span>
          </a>
        )
      })}
    </div>
  </div>
)
}

export default Connect