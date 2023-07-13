// 리스트 출력(영화처럼) 혹은 검색 기능
import "../css/Digilist.css";
import axios from "axios";
import Digit from "./Digit";
import { useEffect, useState } from "react";

function Digilist() {
  const [digilist, setDigilist] = useState([]);
  const [pagelist, setPagelist] = useState([]);
  const total = 1422;
  const [page, setPage] = useState(0);
  const [current, setCurrent] = useState(1);
  const [size, setSize] = useState(15);
  const endpage = parseInt(total / size) + 1;
  const [search, setSearch] = useState("");

  useEffect(() => {
    getdigimon();
    getPagenumber();
  }, [current]);

  const getdigimon = async () => {
    try {
      const result = await axios.get(
        `https://www.digi-api.com/api/v1/digimon?page=${page}&pageSize=${size}`
      );
      //console.log(result.data.content);
      setDigilist(result.data.content);
      //console.log(digilist);
    } catch {}
  };

  const result = digilist.map((data) => (
    <Digit
      key={data.name}
      id={data.id}
      detail={data.href}
      dimg={data.image}
      name={data.name}
    />
  ));

  const digisearch = () => {
    window.location.href = "/digimon/info?query=" + search;
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
      onClick={() => changepage(data)}
    >
      {data}
    </span>
  ));

  const changepage = (data) => {
    setPage(data - 1);
    setCurrent(data);
  };

  const prev = () => {
    if (current === 1) {
      alert("첫 페이지입니다.");
      return;
    }
    setCurrent(current - 1);
    setPage(page - 1);
  };
  const next = () => {
    if (current === endpage) {
      alert("마지막 페이지입니다.");
      return;
    }
    setCurrent(current + 1);
    setPage(page + 1);
  };
  return (
    <div id="digilist">
      <div className="diopt">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Name or ID"
        ></input>
        <button onClick={digisearch}>검색</button>
        <div className="pagination">
          <span className="prev" onClick={prev}>
            &lt;
          </span>
          {pagination}
          <span className="prev" onClick={next}>
            &gt;
          </span>
        </div>
      </div>
      <div className="di-input">{result}</div>
    </div>
  );
}

export default Digilist;
