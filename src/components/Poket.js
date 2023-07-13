// 정보출력
import { useEffect, useState } from "react";
import "../css/Poket.css";
import axios from "axios";

function Poket(props) {
  const [poketid, setPoketid] = useState("");
  const [poketimg, setPoketimg] = useState("");
  const [shinyimg, setShinyimg] = useState("");
  const [change, setChange] = useState(true);

  useEffect(() => {
    getPoket();
  }, []);

  const getPoket = async () => {
    const result = await axios.get(props.detail);
    //console.log(result.data.id);
    //console.log(result.data.sprites.front_default);
    //console.log(result.data.sprites.front_shiny);

    setPoketid(result.data.id);
    setPoketimg(result.data.sprites.front_default);
    setShinyimg(result.data.sprites.front_shiny);
  };

  const poksearch = () => {
    window.location.href = "/poketmon/info?query=" + poketid;
  };

  return (
    <div id="poket">
      <div className="poket-imgae" onClick={poksearch}>
        {change ? <img src={poketimg} /> : <img src={shinyimg} />}
      </div>
      <div className="poket-name">
        <span>name :</span> <span>{props.name}</span>
      </div>
      <div className="poket-id">
        <span>id :</span> <span>{poketid}</span>
      </div>
      <button onClick={() => setChange(!change)}>C</button>
    </div>
  );
}

export default Poket;
