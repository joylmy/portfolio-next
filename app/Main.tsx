
// import NewsletterForm from 'pliny/ui/NewsletterForm'
import Hero from '@/components/home/Hero'
import { motion, useScroll } from 'framer-motion'
import AboutMe from '@/components/home/AboutMe'
import FriendsRegard from '@/components/home/FriendsRegard'
import LatestPosts from '@/components/home/LatestPosts'



export default function Home({ posts }) {
  return (
    <>
      {/* Hero */}
      < Hero />

      {/* About Me */}
      <AboutMe />
      {/* Friends' Regard */}
      <FriendsRegard />
      {/* Latest Articles */}
      <LatestPosts posts={posts} />

      {/* Newsletter - To Delte */}
      {/* {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
