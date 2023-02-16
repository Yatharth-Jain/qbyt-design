import React from "react";
import BluredDiv from "../SmallComponents/BluredDiv";
import {StrategiesStats} from '../../data/data.json';
import infoBtn from '../../images/componentProps/Strategy/infoBtn.svg'

export default function Strategy() {
  return (
    <section className="w-full" id="strategySection">
      <div className="flex w-full h-[100vh] item-center items-center">
        <div className="w-[50%]">
          <div className="h-full w-full max-w-[600px]">
            <h2 className="text-4xl font-medium mb-[24px] flex flex-col">
              <span>High Profitability</span>
              <span>of Market Neutral Strategies</span>
            </h2>
            <h4 className="font-LinkFontHeading text-xl tracking-wide font-thin pt-[25px] mb-[20px]">
              <span className="opacity-50">No matter bear or bull - generate profits whatever the market is.Up to </span>
              9
              <span className="opacity-50"> from </span>
              10
              <span className="opacity-50"> profitable trades.</span>
            </h4>
            <p>
              A market-neutral strategy combines both long and short positions
              with the aim of absolute returns — regardless of the general
              direction of the market. The long and short positions are of equal
              exposure, so, in the event of a fall in the general markets, the
              losses in the long positions would be offset by gains in the short
              positions, and vice versa.
            </p>
          </div>
        </div>
        <div className="flex w-[50%] items-center ">
            <BluredDiv classes="mx-[10%] w-full h-[300px] rounded-[20px]">
                <div className="w-full h-full grid grid-cols-3 p-[56px]">
                    {
                        StrategiesStats.map(e=>{
                            return(
                                <div className="relative">
                                    <h4 className={`font-LinkFontHeading text-4xl font-bold ${e.color=='secondary' ? 'text-SecondaryColor':''}`}>{e.value}</h4>
                                    <h6 className="w-[70%] font-thin uppercase text-xs pt-1">{e.title}</h6>
                                    {
                                        e.info && <div className="absolute right-[20px] top-0 opacity-50"><img src={infoBtn} alt="" srcset="" /></div>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </BluredDiv>
        </div>
      </div>
    </section>
  );
}
