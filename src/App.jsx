import { useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'
import Charaters from './components/Charaters'

function App() {
  const [location, setLocation] = useState({})
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location`)
    .then((res) => setLocation(res.data.results))
    }, [])
  
    
  // console.log(location)
  return (
    <div className="App">
      <h1>{location[0]?.name}</h1>
      <h2>{location.residents?.map(resident => (
        <Charaters resident={resident}/>
      ))}</h2>
    </div>
  )
}

export default App