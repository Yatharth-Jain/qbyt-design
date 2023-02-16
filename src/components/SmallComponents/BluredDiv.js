import React from 'react'

export default function BluredDiv({classes,children}) {
  return (
    <>
    <div className={classes+' rounded-[6px] overflow-hidden inline-block relative '}>
      <div className='w-[110%] h-[110%] absolute bg-BluredDivColor blur-[2px] z-[-1]'></div>
      {children}
    </div>
    </>
  )
}
