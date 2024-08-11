'use client'

// import React from "react"
import Connect  from "./connect"
import SkillCard from "./skill"

const AboutMe = () => {

  return (
    <div className="relative my-24 ">
      {/* Title */}
      <div>
        <h2 className="text-3xl font-bold leading-tight md:text-4xl text-center">About me</h2>
      </div>
      {/* set up cards */}
      <div className="mt-12">
        <Connect />
        <SkillCard />
      </div>
    </div>
  )
}

export default AboutMe