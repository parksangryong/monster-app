// 리스트 출력(영화처럼) 혹은 검색 기능
import "../css/Poketlist.css";
import axios from "axios";
import Poket from "./Poket";
import { useEffect, useState } from "react";

function Poketlist() {
  const [polist, setPolist] = useState([]);
  const [pagelist, setPagelist] = useState([]);
  const total = polist.length;
  const [page, setPage] = useState(0);
  //0, 15, 30...
  const endpage = parseInt(total / 15) + 1;
  const [current, setCurrent] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getpoketmon();
    getPagenumber();
  }, [current]);

  const getpoketmon = async () => {
    try {
      const result = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1010`
      );
      console.log(result.data.results);
      setPolist(result.data.results);

      //console.log(polist.slice(page, size));
      //setMinpolist(polist.slice(page, size));
    } catch {}
  };

  const result = polist
    .slice(page + 15 * (current - 1), page + 15 * current)
    .map((data) => (
      <Poket key={data.name} detail={data.url} name={data.name} />
    ));

  const poksearch = () => {
    window.location.href = "/poketmon/info?query=" + search;
  };

  const getPagenumber = () => {
    let exlist = [];

    if (current <= 5) {
      for (var i = 1; i <= 9; i++) {
        exlist.push(i);
      }
    } else if (current >= endpage - 4) {
      for (var i = endpage - 8; i <= endpage; i++) {
        exlist.push(i);
      }
    } else {
      for (var i = current - 4; i <= current + 4; i++) {
        exlist.push(i);
      }
    }

    //console.log(pagelist);
    setPagelist(exlist);
  };

  const pagination = pagelist.map((data) => (
    <span
      key={data}
      id="pagenum"
      className={data === current ? "active" : ""}
      onClick={() => setCurrent(data)}
    >
      {data}
    </span>
  ));

  const prev = () => {
    if (current === 1) {
      alert("첫 페이지입니다.");
      return;
    }
    setCurrent(current - 1);
  };
  const next = () => {
    if (current === endpage) {
      alert("마지막 페이지입니다.");
      return;
    }
    setCurrent(current + 1);
  };
  return (
    <div id="poketlist">
      <div className="pokopt">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Name or ID"
        ></input>
        <button onClick={poksearch}>검색</button>

        <div className="pagination">
          <span className="prev" onClick={prev}>
            &lt;
          </span>
          {pagination}
          <span className="next" onClick={next}>
            &gt;
          </span>
        </div>
      </div>
      <div className="po-input">{result}</div>
    </div>
  );
}

export default Poketlist;
