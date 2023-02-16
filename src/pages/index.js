import * as React from "react"
import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import Strategy from "../components/Strategy/Strategy"
import WhyQbyt from "../components/WhyQbyt/WhyQbyt"
import Features from "../components/Features/Features"

export default function IndexPage() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Strategy/>
    <WhyQbyt/>
    <Features/>
    </>
  )
}

export const Head = () => <title>Project</title>
