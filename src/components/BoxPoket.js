// 정보출력
import { useEffect, useState } from "react";
import "../css/Box.css";
import axios from "axios";

function BoxPoket(props) {
  const [poketid, setPoketid] = useState("");
  const [poketimg, setPoketimg] = useState("");
  const [shinyimg, setShinyimg] = useState("");
  const ran = Math.floor(Math.random() * 99 + 1);

  useEffect(() => {
    getPoket();

    //console.log(ran);
  }, []);

  const getPoket = async () => {
    const result = await axios.get(props.detail);
    //console.log(result.data.id);
    //console.log(result.data.sprites.front_default);
    //console.log(result.data.sprites.front_shiny);

    setPoketid(result.data.id);
    setPoketimg(result.data.sprites.front_default);

    if (result.data.sprites.front_shiny) {
      setShinyimg(result.data.sprites.front_shiny);
    } else {
      setShinyimg(result.data.sprites.front_default);
    }
  };

  const poksearch = () => {
    window.location.href = "/poketmon/info?query=" + poketid;
  };

  return (
    <div id="box-poket">
      <div className="box-image" onClick={poksearch}>
        {ran >= 5 ? <img src={poketimg} /> : <img src={shinyimg} />}
        <div className="box-ei">{ran >= 5 ? "" : "이로치"}</div>
      </div>
      <div className="box-name">
        <span></span>{" "}
        <span>
          {props.name}({poketid})
        </span>
      </div>
    </div>
  );
}

export default BoxPoket;
