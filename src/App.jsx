import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ResidentCard from "./components/ResidentCard";

function App() {
  const [location, setLocation] = useState({});
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const random = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${random}`)
      .then((res) => setLocation(res.data));
  }, []);

  const searchLocation = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${searchValue}`)
      .then((res) => setLocation(res.data));
  };

  return (
    <div className="App">
      <header className="header">
        <img
          className="headerImg"
          src="https://www.futuro.cl/wp-content/uploads/2019/01/rick-morty-web.jpg"
          alt=""
        />
        <input className="input"
          type="text"
          placeholder="Write the ID"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="button" onClick={searchLocation}><i class="fa-solid fa-magnifying-glass"></i></button>
      </header>
      <div className="infoBar">
        <h1>{location?.name}</h1>
        <div className="infoBarInfo">
          <h2>Type: {location.type}</h2>
          <h2>Dimension: {location.dimension}</h2>
          <h2>Population: {location.residents?.length}</h2>
        </div>
      </div>
      <ul className="residentList">
        {location.residents?.map((resident) => (
          <ResidentCard resident={resident} key={resident.id} />
        ))}
      </ul>
      <footer>
        <h6>Hecho por: Ignacio G Escudero</h6>
      </footer>
    </div>
  );
}

export default App;
