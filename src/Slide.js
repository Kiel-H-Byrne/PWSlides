import { Step } from 'react-impressjs';


import React from 'react'
import PropTypes from 'prop-types'

const defaultData = {
    x: 0,       // as data-x
    y: 0,       // as data-y
    z: 0,       // as data-z
    rotateX: 0, // as data-rotate-x
    rotateY: 0, // as data-rotate-y
    rotateZ: 0, // as data-rotate and data-rotate-z
    scale: 1    // as data-scale
  };

const Slide = (...props) => {
    
    console.log(props)
    return (
        
        <Step >
        <h1>Any Element write in Step!</h1>
        <hr />
        <p>Made by your <b>Creativity</b> !!</p>
    </Step>
    )
}


export default Slide