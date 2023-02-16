import React from 'react'
import { Link } from 'gatsby'
import BluredDiv from "../SmallComponents/BluredDiv"

export default function Navbar() {
  const navLinks=[
    {title:"Strategy",to:"#strategySection"},
    {title:"Features",to:""},
    {title:"Roadmap",to:""},
    {title:"Why Qbyt?",to:"#whyqbytSection"},
    {title:"For brokers",to:""},
    {title:"Contact",to:""},
  ]
  return (
    <nav className='fixed right-[10%] top-[14px] z-50' id='navbar'>
      <BluredDiv classes="w-[318px] h-[90px] ">
        <ul className="w-full h-full grid grid-cols-3 p-[18px 20px] items-center ">
          {navLinks.map(li=>{
            return<Link to={li.to} className='flex justify-center font-normal'>{li.title}</Link>
          })}
        </ul>
      </BluredDiv>
    </nav>
  )
}
