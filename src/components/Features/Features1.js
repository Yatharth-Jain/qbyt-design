import React from 'react'
import BluredDiv from '../SmallComponents/BluredDiv'
import {Features} from '../../data/data.json'

export default function Features1() {
    var {Features_1} = Features;
  return (
        <BluredDiv classes='w-full' blur='16px'>
            <div className='my-24 mx-48'>
            <h3 className='text-4xl flex flex-col font-semibold'>
                <span>Not possible with “Broker” </span>
                <span>Instruments but easy with Qbyt:</span>
            </h3>

            <ul className='w-full columns-2 mt-10'>
                {
                    Features_1.map(e=>{
                        return <li className='flex items-center mb-3 text-xl'><img src={require(`../../images/componentProps/Features/bullet-${Math.floor(Math.random()*4)+1}.svg`).default} alt="Hello" srcset="" /><p>{e}</p></li>
                    })
                }
            </ul>
            </div>
        </BluredDiv>
    )
}
