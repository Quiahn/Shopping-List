import "./App.css"
import Para from "./components/Para"
import { useState, useEffect } from "react"
import axios from "axios"

function App() {
  // Variables
  const newTime = () => new Date().toLocaleTimeString()
  // States
  const [time, setTime] = useState(newTime)
  const [disChicken, setDisChicken] = useState()
  const [btnToggle, setBtnToggle] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setTime(newTime)
    }, 1000)
  }, [time])

  useEffect(() => {
    console.log('useEffect')
    // get chicken GET request
    axios.get("http://localhost:3001/apple")
      // get chicken then
      .then((res) => {
        console.log("response: " + res.data.orange)
        setDisChicken(res.data.orange)
      })
      // get chicken catch
      .catch((err) => {
        console.log("error: " + err)
      })
  }, [])

  return (
    <div className={"App " + (btnToggle ? 'red' : '')}>
      <h1>Title</h1>
      <Para />
      <h3>Time is: {time}</h3>
      <p>{disChicken}</p>
      <button onClick={() => setBtnToggle(!btnToggle)}>{btnToggle.toString()}</button>
    </div>
  );
}


export default App;
