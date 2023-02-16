import * as React from "react"
import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import Strategy from "../components/Strategy/Strategy"

export default function IndexPage() {



  return (
    <>
    <Navbar/>
    <Hero/>
    <Strategy/>
    </>
  )
}

export const Head = () => <title>Project</title>
