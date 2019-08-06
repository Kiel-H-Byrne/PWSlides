import React, {useEffect, createRef} from 'react'
import Slide from './Slide';


const defaults = {
  width: 1024,
  height: 768,
  maxScale: 1,
  minScale: 0,
  perspective: 1000,
  transitionDuration: 1000
};

let slideData = {
  x: 0,
  y: 0,
  scale: 1
}
let entries = Object.entries(slideData)

const slideShowData = (values) => {

//take length of values, return array of x, y, scale.
//either x or y must increment by some value greather than screenHeight.
// x can stay constant (straight line), or random
// y needs to increment by 1024?


let initPosition = 0;

const newArr = values.map((index) => {
  let newPosition = {
    x: 0,
    y: initPosition,
    scale:1
  }
  initPosition = initPosition + 1000
})
  return newArr
}

const randColor = () => {
  const colors = ['rgba(255, 27, 27, 0.8)','rgba(179, 27, 27, 0.8)','rgba(193, 131, 54, 0.8)','rgba(81, 129, 115, 0.8)','rgba(52, 153, 81, 0.8)','rgba(35, 165, 121, .8)','rgba(55, 186, 214, 0.8)','rgba(155, 146, 234, 0.8)'];
  let randColor = colors[Math.floor(Math.random() * colors.length)]
  
  return randColor
}







const SlideShow = ({data}) => {

return (
  <div id="impress" data-transition-duration="1000">
    {
      data && data.values.map( (el,idx) =>(<Slide id={`slide-${idx}`} values={el} idx={idx} key={idx} bgColor={randColor()}/>))

    }
    
    </div>
)
  }

export default SlideShow


