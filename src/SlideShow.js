import { Impress, Step } from 'react-impressjs';

import React from 'react'
import Slide from './Slide';


const defaults = {
  width: 1024,
  height: 768,
  maxScale: 1,
  minScale: 0,
  perspective: 1000,
  transitionDuration: 1000
};

const slideShowData = (values) => {
//take length of values, return array of x, y, scale.
//either x or y must increment by some value greather than screenHeight.
// x can stay constant (straight line), or random
// y needs to increment by 1024?
let xVal = 0
let yVal = 0
const newArr = values.map((val,idx) => {
  return {
    x: xVal,
    y: yVal+1000,
    scale:1
  }
})
console.log(newArr)
  return newArr
}
const SlideShow = ({data}) => (
  <div>
  <Impress 
    fallbackMessage={<p>Sorry, your <b>device or browser</b> doesn't support this very well.</p>}
    rootData = {defaults}
    progress>

<Step 
     >
        <h1>Name</h1>
        <hr />
        <p>Description of Shoutout</p>
        <h4>Nominee</h4>
    </Step>
    <Step 
    >
        <h1>Any Element write in Step!</h1>
        <hr />
        <p>Made by your <b>Creativity</b> !!</p>
    </Step>
    {
      data && data.values.map( (el,idx) =>(<Slide id={`slide-${idx}`} values={el} />))
    }
    </Impress>
  
    {/* {data && console.log(data.values)}  */}
    </div>
)

export default SlideShow
