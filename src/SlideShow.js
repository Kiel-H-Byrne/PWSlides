import React from 'react'
import {format} from 'date-fns'
import {Grid, Card, Typography, Link, Divider, CardMedia} from '@material-ui/core'

import Slide from './Slide';



const randColor = () => {
  const colors = ['rgba(255, 27, 27, 0.8)','rgba(179, 27, 27, 0.8)','rgba(193, 131, 54, 0.8)','rgba(81, 129, 115, 0.8)','rgba(52, 153, 81, 0.8)','rgba(35, 165, 121, .8)','rgba(55, 186, 214, 0.8)','rgba(155, 146, 234, 0.8)','rgba(68, 68, 248, 1)'];
  let randColor = colors[Math.floor(Math.random() * colors.length)]
  
  return randColor
}

const SlideShow = ({data}) => {

  return (
    <div id="impress" data-autoplay="0">
        <div className="step slide" id="title" data-z="0" data-goto-prev="final">
        <Grid container> 
          <Grid item  xs={12}> <Typography className="slide-honoree" variant="h2" align="center" gutterBottom>DCO Shoutouts</Typography></Grid>
          <Divider variant="middle" />
          <Grid item  xs={12}> <Typography className="slide-person" variant="h4" align="center">{format(new Date(), 'MMMM'	)}</Typography></Grid>
        </Grid>
        </div>
      {
        data && data.values.map( (el,idx) =>(<Slide id={`slide-${idx}`} values={el} idx={idx}  key={idx} bgColor={randColor()}/>))
      }
        <div className="step slide" id="final" data-z="0" data-goto-next="title" >
        <Card elevation={0}> 
          <Grid item  xs={12}> <Typography className="slide-shout" variant="h3" align="center">No More Shoutouts.</Typography></Grid>
          <Grid item  xs={12}>
          <Link target="_blank" href="http://www.google.com">
            <Typography className="slide-person" variant="h4" align="center">Submit a shoutout today!</Typography>
          </Link>
          <CardMedia image="http://fffff.at/files/2011/07/QR_hobo_codes/free_wifi.png" 
          style={{height: '300px', width: '300px', margin: '0 auto'}}/> 
          </Grid>
        </Card>
        </div>

      </div>
  )
}

export default SlideShow


