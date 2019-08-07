import React from 'react'
import {format} from 'date-fns'
import {Typography, Link} from '@material-ui/core'

import Slide from './Slide';



const randColor = () => {
  const colors = ['rgba(255, 27, 27, 0.8)','rgba(179, 27, 27, 0.8)','rgba(193, 131, 54, 0.8)','rgba(81, 129, 115, 0.8)','rgba(52, 153, 81, 0.8)','rgba(35, 165, 121, .8)','rgba(55, 186, 214, 0.8)','rgba(155, 146, 234, 0.8)','rgba(68, 68, 248, 1)'];
  let randColor = colors[Math.floor(Math.random() * colors.length)]
  
  return randColor
}

const SlideShow = ({data}) => {

  return (
    <div id="impress" data-autoplay="9">
        <div className="step slide" id="title" data-z="0" data-goto-prev="final">
          <Typography variant="h3" align="center">DCO Shoutouts</Typography>
          <Typography variant="overline" align="center">{format(new Date(), 'MMMM'	)}</Typography>
        </div>
      {
        data && data.values.map( (el,idx) =>(<Slide id={`slide-${idx}`} values={el} idx={idx}  key={idx} bgColor={randColor()}/>))
      }
        <div className="step slide" id="final" data-z="0" data-goto-next="title" >
          <Typography variant="h3" align="center">No More Shoutouts.</Typography>
          
          <Link target="_blank" href="http://www.google.com">
            <Typography>Submit a shoutout today!</Typography>
            <img src ="http://fffff.at/files/2011/07/QR_hobo_codes/free_wifi.png" width="150px"/>
          </Link>
        </div>

      </div>
  )
}

export default SlideShow


