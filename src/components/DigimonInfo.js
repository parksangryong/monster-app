//디지몬 상세정보
import "../css/DigimonInfo.css";
import axios from "axios";
import queryString from "query-string";
import { useEffect, useState } from "react";

function DigimonInfo() {
  const [digit, setDigit] = useState([]);
  const [digitimg, setDigitimg] = useState("");
  const [attr, setAttr] = useState([]);
  const [detail, setDetail] = useState([]);
  const [types, setTypes] = useState([]);
  const [priorevo, setPrioerevo] = useState([]);
  const [nextevo, setNextevo] = useState([]);

  useEffect(() => {
    const queryObj = queryString.parse(window.location.search);
    const query = queryObj.query;

    getDigimon(query);
  }, []);

  const getDigimon = async (query) => {
    const result = await axios.get(
      `https://www.digi-api.com/api/v1/digimon/${query}`
    );
    // console.log(result.data);

    setDigit(result.data);
    setDigitimg(result.data.images[0].href);
    setAttr(result.data.attributes);
    setTypes(result.data.types);
    setDetail(result.data.descriptions);
    setPrioerevo(result.data.priorEvolutions);
    setNextevo(result.data.nextEvolutions);
  };

  const attrs = attr.map((data, index) => (
    <span key={index}>{data.attribute}</span>
  ));
  const type = types.map((data, index) => (
    <span key={index}>{data.type} </span>
  ));

  const details = detail.filter((data) => data.language === "en_us");
  //console.log(details);

  const priorevos = priorevo.filter((data) => data.id !== null);
  //console.log(priorevos);

  const nextevos = nextevo.filter((data) => data.id !== null);
  //console.log(nextevos);

  const detailinfo = details.map((data, index) => (
    <span key={index}>{data.description}</span>
  ));

  const prevo = priorevos.map((data, index) => (
    <option key={index} value={data.id}>
      {data.digimon}
    </option>
  ));

  const nextvo = nextevos.map((data, index) => (
    <option key={index} value={data.id}>
      {data.digimon}
    </option>
  ));

  const moveInfo = (e) => {
    window.location.href = "/digimon/info?query=" + e.target.value;
  };

  return (
    <div id="digit-info">
      <div id="digit-center">
        <div className="digit-info-imgs">
          <img src={digitimg} />
        </div>
        <div className="digit-txt">
          <div className="digit-info-name">
            <div className="sp1">name :</div>{" "}
            <span className="sp2">{digit.name}</span>
          </div>
          <div className="digit-info-id">
            <div className="sp1">id :</div>{" "}
            <div className="sp2">{digit.id}</div>
          </div>
          <div className="digit-info-type">
            <div className="sp1">속성 / 타입 : </div>
            <div className="sp2">
              {attrs} / {type}
            </div>
          </div>

          <div className="digit-info-pr">
            <div className="sp1">prio :</div>
            <div className="sp2">
              <select onChange={moveInfo}>
                <option value="">default</option>
                {prevo}
              </select>
            </div>
          </div>

          <div className="digit-info-next">
            <div className="sp1">next :</div>
            <div className="sp2">
              <select onChange={moveInfo}>
                <option value="">default</option>
                {nextvo}
              </select>
            </div>
          </div>

          <div className="digit-info-detail">
            <div className="sp5">정보 : </div>
            <div className="sp6">{detailinfo}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigimonInfo;
