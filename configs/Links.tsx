import {
  type IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiUnsplash,
} from '@icons-pack/react-simple-icons'
import { EMAIL, SITE_GITHUB_URL, SITE_LINKEDIN_URL,SITE_UNSPLASH_URL } from 'lib/constant'



type SocialLinks = Array<{
  href: string
  title: string
  icon: IconType
}>

export const SOCIAL_LINKS: SocialLinks = [
  {
    href: EMAIL,
    title: 'Email',
    icon: SiGmail,
  },

  {
    href: SITE_GITHUB_URL,
    title: 'GitHub',
    icon: SiGithub,
  },
  {
    href: SITE_LINKEDIN_URL,
    title: 'Linkedin',
    icon: SiLinkedin,
  },
  {
    href: SITE_UNSPLASH_URL,
    title: 'Unsplash',
    icon: SiUnsplash,
  },
]
