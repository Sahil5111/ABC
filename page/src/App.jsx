import { useState } from 'react'
import './App.css'

function App() {
  const [Data, setData] = useState({
    Source: '',
    Destination: ''
  })

  const [Fare, setFare] = useState("")

  function handleChange(e) {
    setData(Data => {
      let value = e.target.value
      return {
        ...Data,
        [e.target.name]: value
      }
    })
  }

  function HandleSubmit() {
    fetch(`http://localhost:3000/random?Source=${Data.Source}&Destination=${Data.Destination}`)
      .then(response => response.json())
      .then(response => setFare(response.Fare))
  }

  return (
    <>
      <div className="App">
        <label htmlFor="Source">Source:</label>
        <input
          type="text"
          name="Source"
          id="Source"
          value={Data.Source}
          onChange={e => handleChange(e)}
        />
        <label htmlFor="Destination">Destination:</label>
        <input
          type="text"
          name="Destination"
          id="Destination"
          value={Data.Destination}
          onChange={e => handleChange(e)}
        />
        <button onClick={HandleSubmit}>Fetch Minimum Fare</button>
      </div>
      {Fare !== '' && <div>Minimum Fare is: {Fare}₹</div>}
    </>
  )
}

export default App
