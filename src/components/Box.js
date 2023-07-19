import "../css/Box.css";
import axios from "axios";
import BoxPoket from "./BoxPoket";
import { useEffect, useState } from "react";

function Box() {
  const [polist, setPolist] = useState([]);
  const [mylist, setMylist] = useState([]);

  useEffect(() => {
    getpoketmon();
  }, []);

  const getpoketmon = async () => {
    try {
      const result = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1010`
      );
      //console.log(result.data.results);
      setPolist(result.data.results);

      // console.log(polist);
    } catch {}
  };

  const getRandomPoket = () => {
    let alist = [];

    for (var i = 0; i < 6; i++) {
      var ran = Math.floor(Math.random() * 1009 + 1);
      //console.log(ran);

      alist.push(polist[ran]);
    }

    setMylist(alist);
    console.log(mylist);
  };

  const result = mylist.map((data) => (
    <BoxPoket key={data.name} detail={data.url} name={data.name} />
  ));

  return (
    <div id="box">
      <div className="poketbox">
        <button onClick={getRandomPoket}>포켓몬 랜덤 뽑기</button>
        {result}
      </div>
    </div>
  );
}

export default Box;
