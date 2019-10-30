import React, {useState, useEffect} from 'react';
import './App.css';

import SlideShow from './SlideShow'


const xhr = new XMLHttpRequest();
const spreadsheetId = "1oTI3Aqiq-INhzpIJEBpN8FTZsRbxu4rjOLyp2SW5_D0"
const spreadsheetRange = "SHOUTOUTS!A:E"
const GKEY = process.env.REACT_APP_GOOGLE_KEY
const requestURL = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${spreadsheetRange}?key=${GKEY}`
// const requestURL = `https://jsonplaceholder.typicode.com/todos`

function App() {
  const [slideData, setSlideData] = useState(null)
  

  //EVENTS
  
  const getShoutouts = async function() {
    try {
      await fetch(requestURL).then(data => data.json()).then(results => setSlideData(results))  
    } catch (error) {
      console.log(error)
    }
  }

  // xhr.onload = () => {
  //   if (xhr.status >= 200 && xhr.status < 300 ) {
      
  //     setData(JSON.parse(xhr.response))
  //   } else {
  //     console.log('The Request Failed')
  //   }  
  // }

  useEffect(() => {
    //WILL RUN IMMEDIATELY ONCE
    getShoutouts()
    const timer = setTimeout( () => {
      //WILL RUN EVERY 24 HOURS (86400 seconds)
      getShoutouts()
    }, 86400000);
    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="App">
      <SlideShow data={slideData}/>
    </div>
  );
}

export default App;
