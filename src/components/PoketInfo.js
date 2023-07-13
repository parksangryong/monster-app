//포켓몬 상세정보
import "../css/PoketInfo.css";
import axios from "axios";
import queryString from "query-string";
import { useEffect, useState } from "react";

function PoketInfo() {
  const [poket, setPoket] = useState([]);
  const [change, setChange] = useState(true);
  const [poketimg, setPoketimg] = useState("");
  const [shinyimg, setShinyimg] = useState("");
  const [ability, setAbility] = useState([]);
  const [stats, setStats] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const queryObj = queryString.parse(window.location.search);
    const query = queryObj.query;

    getPoketmon(query);
  }, []);

  const getPoketmon = async (query) => {
    const result = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${query}`
    );
    console.log(result.data);
    setPoket(result.data);
    setPoketimg(result.data.sprites.front_default);
    setShinyimg(result.data.sprites.front_shiny);
    setAbility(result.data.abilities);
    setStats(result.data.stats);
    setTypes(result.data.types);

    //console.log(ability);
    //console.log(stats);
    //console.log(types);
  };

  const abilitys = ability.map((data, index) => (
    <span key={index}>{data.ability.name} &nbsp; </span>
  ));
  const stat = stats.map((data, index) => (
    <div key={index}>
      <div className="sp3">{data.stat.name}</div>
      <div className="sp4"> : &nbsp;{data.base_stat}</div>
    </div>
  ));
  const type = types.map((data, index) => (
    <span key={index}>{data.type.name} &nbsp;</span>
  ));

  const pokprev = () => {
    if (poket.id === 1) {
      return;
    }
    window.location.href = "/poketmon/info?query=" + (poket.id - 1);
  };
  const poknext = () => {
    if (poket.id === 1010) {
      return;
    }
    window.location.href = "/poketmon/info?query=" + (poket.id + 1);
  };

  return (
    <div id="poket-info">
      <div id="poket-center">
        <div className="poket-info-imgs">
          {change ? <img src={poketimg} /> : <img src={shinyimg} />}
        </div>
        <div className="poket-txt">
          <div className="poket-info-name">
            <div className="sp1">이름 :</div>
            <div className="sp2">{poket.name}</div>
          </div>
          <div className="poket-info-id">
            <span className="sp1">ID :</span>
            <span className="sp2">{poket.id}</span>
          </div>
          <div className="poket-info-wh">
            <div className="sp1">키/몸무게 : </div>
            <div className="sp2">
              {poket.weight / 10}kg / {poket.height / 10} m
            </div>
          </div>
          <div className="poket-info-abil">
            <div className="sp1">특성 : </div>
            <div className="sp2">{abilitys}</div>
          </div>

          <div className="poket-info-type">
            <div className="sp1">타입 : </div>
            <div className="sp2">{type}</div>
          </div>
          <div className="poket-info-stat">
            <div className="sp1">스탯 : </div>
            <div className="sp2">{stat}</div>
          </div>
        </div>
        <button onClick={() => setChange(!change)}>C</button>
      </div>
      {poket.id === 1 ? (
        ""
      ) : (
        <button className="prev2" onClick={pokprev}>
          &lt;
        </button>
      )}

      {poket.id === 1010 ? (
        ""
      ) : (
        <button className="next2" onClick={poknext}>
          &gt;
        </button>
      )}
    </div>
  );
}

export default PoketInfo;
