import React from 'react'
import BluredDiv from '../SmallComponents/BluredDiv'
import {whyQbyt} from '../../data/data.json'
// import imgs from '../../images/componentProps/whyqbyt'

export default function WhyQbyt() {
  return (
    <section className='h-[100vh] w-full flex flex-col justify-around py-10' id='whyqbytSection'>
      <h1 className='font-normal font-HeadingFontFamily text-6xl '>Why Qbyt?</h1>
      <div className='grid grid-cols-3 gap-[30px]'>
        {
          whyQbyt.map((e)=>{
            return(
              <BluredDiv classes='w-full h-fit'>
                <div className='p-[32px] flex flex-col font-LinkFontHeading'>
                  <div className='flex justify-center items-center w-[50%] h-[140px] bg-SecondaryColorOpacity rounded-xl mb-[20px]'>
                    <img src={require(`../../images/componentProps/whyqbyt/${e.icon}`).default} alt={e.title} srcset="" />
                  </div>
                  <h5 className='my-[20px] text-2xl font-semibold'>{e.title}</h5>
                  <p className='text-base tracking-wide'>{e.body}</p>
                </div>
              </BluredDiv>
            )
          })
        }
      </div>
    </section>
  )
}
