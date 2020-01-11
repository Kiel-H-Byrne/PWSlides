import React, { useState, useEffect } from "react";
import "./App.css";

import SlideShow from "./SlideShow";

const spreadsheetId = "1oTI3Aqiq-INhzpIJEBpN8FTZsRbxu4rjOLyp2SW5_D0";
const spreadsheetRange = "SHOUTOUTS!A:E";
const GKEY = process.env.REACT_APP_GOOGLE_KEY;
const requestURL = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${spreadsheetRange}?key=${GKEY}`;
// const requestURL = `https://jsonplaceholder.typicode.com/todos`

function App() {
  const [slideData, setSlideData] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  //EVENTS

  const getShoutouts = async function() {
    try {
      await fetch(requestURL)
        .then(data => data.json())
        .then(results =>
          results.error
            ? setErrorMsg(results.error.message)
            : setSlideData(results)
        );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //WILL RUN IMMEDIATELY ONCE
    console.log(`Getting INIT shoutouts at ${new Date()}`);
    getShoutouts();
    const timer = setTimeout(() => {
      //WILL RUN EVERY 24 HOURS (86400 seconds)
      console.log(`Getting NEW shoutouts at ${new Date()}`);
      getShoutouts();
    }, 86400000);
    return () => clearTimeout(timer);
  }, []);

  return errorMsg ? (
    <div className="fallback-message">
      <strong>{errorMsg}</strong>
    </div>
  ) : (
    <div className="App">
      <SlideShow data={slideData} />
    </div>
  );
}

export default App;
