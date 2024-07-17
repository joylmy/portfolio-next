'use client'
import Image from './Image'
import Link from './Link'
import React, { useState } from 'react'

const Card = ({ title, description, imgSrc, href, tags }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`md max-w-[544px] p-4  md:w-1/2 `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`${
          imgSrc && 'h-full'
        }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 shadow-lg transition-transform duration-300 dark:border-gray-700  ${
          isHovered
            ? '-translate-y-1 transform border-2 border-primary-500 border-opacity-60 dark:border-yellow-500 dark:shadow-white'
            : ''
        }`}
      >
        {imgSrc &&
          (href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              <Image
                alt={title}
                src={imgSrc}
                className="object-cover object-center md:h-36 lg:h-48"
                width={544}
                height={306}
              />
            </Link>
          ) : (
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          ))}
        <div className="p-6 ">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
          <div className="mt-4 flex space-x-2">
            {tags &&
              tags.map((t) => {
                return (
                  <div className="rounded-md bg-primary-300 px-2 py-1 text-sm font-medium text-gray-500 dark:bg-darkPrimary-500 dark:text-slate-100">
                    {t}
                  </div>
                )
              })}
          </div>
          <div className="mt-2">
            {href && (
              <Link
                href={href}
                className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:text-darkPrimary-400 dark:hover:text-darkPrimary-600"
                aria-label={`Link to ${title}`}
              >
                Learn more &rarr;
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
