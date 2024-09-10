'use client'

// import React from "react"
import Connect  from "./connect"
import FunFact from "./FunFact"
import SkillCard from "./skill"

const AboutMe = () => {

  return (
    <div className="relative my-24 ">
      {/* Title */}
      <div>
        <h2 className="text-center text-3xl font-bold leading-tight md:text-4xl">About me</h2>
      </div>
      {/* set up cards */}
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        <div className="grid gap-4 ">
          <FunFact />
          <Connect />
        </div>

        <div className="grid gap-4 ">
          <SkillCard />
          {/* Maybe spotify card? */}
        </div>
      </div>
    </div>
  )
}

export default AboutMe