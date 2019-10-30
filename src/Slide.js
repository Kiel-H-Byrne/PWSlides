import React, {useEffect} from 'react'
import {Typography, Divider, Grid} from '@material-ui/core'
import { format, differenceInDays } from 'date-fns'
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
  }, [values])
let today = new Date()
let shoutDate = new Date(values[0])
let filter = differenceInDays(today, shoutDate) <= 30

  if (filter) {
    return (
        <div 
        className={`step slide`}  
        style={slideStyle}
        data-rel-x="1w"
        data-rel-y= "0" 
        // data-rel-z="1w"
        // data-scale="1" 
        // data-rotate="45"
        id={slugify(values[1])}
        >
              <Grid container className="slide-content" justify="space-evenly" alignItems="stretch">
                <Grid item xs={12}>
                  <Grid item><img src="/img/PW-logo-black.svg" width="200px" className="slide-logo" /></Grid>
                  <Grid item><Typography className="slide-title" align="center">Shout Out</Typography></Grid>
                </Grid>
                <Grid item xs={12}><Divider variant="middle"/>  </Grid>           
                <Grid item xs={12}><Typography className="slide-honoree" align="center">{values[1]} </Typography></Grid>
                <Grid item xs={12}><Typography className="slide-shout" paragraph align="center"><i>{values[2]}</i></Typography>  </Grid>
                <Grid item xs={12}><Typography className="slide-person" align="right">- {values[4]}</Typography></Grid>
                <Grid item xs={12}><Typography className="slide-date" align="center">{format(new Date(values[0]), 'MMMM Do, YYYY')}</Typography></Grid>
              </Grid>

        </div>
    )
  } else {
    return null
  }
}

export default Slide
