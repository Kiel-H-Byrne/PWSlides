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
  const [xhrData, setData] = useState(null)
  
  //EVENTS
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300 ) {
      // console.log('success!', xhr)
      setData(JSON.parse(xhr.response))
    } else {
      console.log('The Request Failed')
    }  
  }

  useEffect(() => {
    xhr.open('GET', requestURL);
    xhr.send();
    return () => {
      // cleanup
    };
  }, [requestURL])
  return (
    <div className="App">
      <SlideShow data={xhrData}/>
    </div>
  );
}

export default App;
