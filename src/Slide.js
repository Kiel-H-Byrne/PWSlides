import React, {useEffect} from 'react'
import {Typography, Divider} from '@material-ui/core'
import { getMonth, isThisMonth } from 'date-fns'
import slugify from './slugify'

//get current month, 
// if timestamp month = current month, render

const Slide = (props) => {
    let {values,bgColor} = props
    
    const slideStyle = {
        backgroundColor: bgColor
    }

  useEffect(() => {
    window.impress().init()
  }, [])

  if (isThisMonth(new Date(values[0]))) {
    return (
        <div 
        className={`step slide`}  
        data-rel-x="1.2w"
        data-rel-y={0} 
        data-rel-z=".5w"
        data-scale="1" 
        style={slideStyle}
        // data-rotate="45"
        id={slugify(values[1])}
        >
              <div className="slide-content" >
                <Typography variant="h3" align="center">{values[1]} </Typography>
                <Divider width="80%" variant="middle" />             
                <Typography variant="body1" paragraph align="center">{values[2]}</Typography>  
                <Typography variant="overline" align="justify">{values[4]}</Typography>
              </div>
              <div id="impress-toolbar"></div>

        </div>
    )
  } else {
    return (
      <div ></div>
    )
  }
}

export default Slide
