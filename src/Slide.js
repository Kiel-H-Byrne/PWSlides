import React, {useEffect} from 'react'
import {Typography, Divider, Grid} from '@material-ui/core'
import { getMonth, isThisMonth, format } from 'date-fns'
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
                <Grid item xs={12} alignContent="stretch">
                  <Grid item><img src="/img/PW-logo-black.svg" width="200px" style={{display:'flex', margin: '1rem auto'}} /></Grid>
                  <Grid item><Typography className="slide-title" align="center">Shout Out</Typography></Grid>
                </Grid>
                <Grid item xs={12}><Divider width="80%" variant="middle"/>  </Grid>           
                <Grid item xs={12}><Typography className="slide-honoree" align="center">{values[1]} </Typography></Grid>
                <Grid item xs={12}><Typography className="slide-shout" paragraph align="center"><i>{values[2]}</i></Typography>  </Grid>
                <Grid item xs={12}><Typography className="slide-person" align="right">- {values[4]}</Typography></Grid>
                <Grid item xs={12}><Typography className="slide-date" align="center">{format(new Date(values[0]), 'MMMM Do, YYYY')}</Typography></Grid>
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
