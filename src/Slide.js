import React, {useEffect} from 'react'
import {Typography, Divider, Grid} from '@material-ui/core'
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
              <Grid container className="slide-content" >
                <Grid item  xs={12}> <Typography className="slide-honoree" variant="h2" align="center">{values[1]} </Typography></Grid>
                <Grid item  xs={12}><Divider width="80%" variant="middle" />  </Grid>           
                <Grid item  xs={12}><Typography className="slide-shout" variant="body1" paragraph align="center"><i>{values[2]}</i></Typography>  </Grid>
                <Grid item  xs={12}><Typography className="slide-person" variant="h4" align="right">{values[4]}</Typography></Grid>
              </Grid>
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
