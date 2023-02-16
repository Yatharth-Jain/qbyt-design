import React from 'react'

export default function BluredDiv({classes,children,blur='2px'}) {
  return (
    <>
    <div className={classes+' rounded-[6px] overflow-hidden inline-block bg-BluredDivColor relative'} style={{backdropFilter:`blur(${blur})`}}>
      {children}
    </div>
    </>
  )
}
