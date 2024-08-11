import React from 'react'
import { SOCIAL_LINKS } from 'configs/Links'
import { Link } from 'lucide-react'

const Connect = React.memo(() => {
  return (
    <div className="flex flex-col gap-5 rounded-xl p-4 lg:p-6 shadow-feature-card dark:shadow-feature-card-dark">
      <div className="flex items-center gap-2">
        <Link className="h-[18px] w-[18px]" />
        <h2 className="text-sm font-light">Connect</h2>
      </div>
      <div className="grid grid-cols-3 gap-4 px-2">
        {SOCIAL_LINKS.map(({ href, title, icon: Icon }) => {
          const linkHref = title === 'Email' ? `mailto:${href}` : href
          const linkClasses =
            'flex items-center gap-3 hover:text-primary-500 dark:hover:text-darkPrimary-500'

          return (
            <a
              key={href}
              href={linkHref}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClasses}
            >
              <Icon className="h-[18px] w-[18px]" />
              <span className="font-light">{title}</span>
            </a>
          )
        })}
      </div>
    </div>
  )
})

export default Connect
