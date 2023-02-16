import * as React from "react"
import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import Strategy from "../components/Strategy/Strategy"
import WhyQbyt from "../components/WhyQbyt/WhyQbyt"

export default function IndexPage() {



  return (
    <>
    <Navbar/>
    <Hero/>
    <Strategy/>
    <WhyQbyt/>
    </>
  )
}

export const Head = () => <title>Project</title>
