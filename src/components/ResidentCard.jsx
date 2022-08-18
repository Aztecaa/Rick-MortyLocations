import axios from "axios";
import React, { useEffect, useState } from "react";

const ResidentCard = ({ resident }) => {
  const [residentItem, setResidentItem] = useState({});

  useEffect(() => {
    axios.get(resident).then((res) => setResidentItem(res.data));
  }, []);

  console.log(residentItem);

  const status = residentItem.status;

  return (
    <li className="residentItem">
      <div className="residentState">
      <img src={residentItem.image} alt="" />
        <p>
          <span style={({color: status === "Alive" ? 'lightgreen' : status === 'Dead' ? 'red' : 'gray'})}>◉</span>State: {residentItem.status}
        </p>
      </div>
        <h2>{residentItem.name}</h2>
        <hr />
        <div className="infoItem">
          <p>
            Origin:
            <br />
            {residentItem.origin?.name}
          </p>
          <p>
            Episodes:
            <br />
            {residentItem.episode?.length}
          </p>
        </div>
    </li>
  );
};

export default ResidentCard;
