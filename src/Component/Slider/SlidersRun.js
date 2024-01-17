import React from 'react'
import { Slider, RangeSlider } from 'rsuite';
const SlidersRun = () => {
  return (
   <>
 <div style={{maxWidth:"300px",width:"100%"}}>
 <Slider
      progress
      defaultValue={100}
      max={1000}
      onChange={value => {
        console.log(value);
      }}
    />
 </div>
   </>
  )
}

export default SlidersRun