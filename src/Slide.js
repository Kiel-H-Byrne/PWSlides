import React, {useEffect} from 'react'
import {Grid, Typography, Divider} from '@material-ui/core'
let windowWidth = window.innerWidth
let windowHeight = window.innerHeight

const Slide = (props) => {
    let {idx, values,bgColor} = props

    const slideStyle = {
        // width: '100vw',
        // // height: '100vh',
        padding: 'auto',
        margin: 'auto ',
        backgroundColor: bgColor
    
    }

  useEffect(() => {
    window.impress().init()
  }, [])
    return (
        
        <div container xs={12} className={`step step-${idx}`}  data-rel-x={windowWidth || 0} data-rel-y={0} data-scale="1" style={slideStyle}>
              <div className="slide-content">
                <Typography variant="h3" align="center">{values[1]} </Typography>
              
                <Divider width="80%" variant="middle" />             
                <Typography variant="body1" paragraph align="center">{values[2]}</Typography>  
              

                <Typography variant="overline">{values[4]}</Typography>
                </div>
        </div>
        
        
        
        
    )
}

export default Slide
