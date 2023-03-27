import "./styles.css";
import divider from "../public/images/pattern-divider-desktop.svg";
import iconDice from "../public/images/icon-dice.svg";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [datas, setData] = useState({});

  const getData = async () => {
    try {
      const response = await axios.get(`https://api.adviceslip.com/advice`);
      setData(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = () => {
    getData();
  };

  const { slip } = datas;

  return (
    <div className="App">
      <h5>ADVICE #{slip?.id}</h5>
      <h1>{slip?.advice}</h1>
      <img className="divider" src={divider} alt="" />
      <button onClick={handleClick}>
        <img src={iconDice} alt="" />
      </button>
    </div>
  );
}
