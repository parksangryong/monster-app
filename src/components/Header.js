// 로고, 오늘 날짜, 시간, 현재 볼 수 있는 몬스터 수
import { useEffect, useState } from "react";
import "../css/Header.css";
import dayjs from "dayjs";

function Header() {
  const [time, setTime] = useState("");

  useEffect(() => {
    getTime();

    setTimeout(() => {
      getTime();
    }, 60000);
  }, [time]);

  const getTime = () => {
    setTime(dayjs(new Date()).format("YYYY년 MM월 DD일 / HH시 mm분"));
  };

  return (
    <div id="header">
      <div
        className="pobtns"
        onClick={() => (window.location.href = "/poketmon")}
      >
        <button className="pobtn"></button>
        <span>
          1010 <i>마리</i>
        </span>
      </div>
      <div
        className="dibtns"
        onClick={() => (window.location.href = "/digimon")}
      >
        <button className="dibtn"></button>
        <span>
          1422 <i>마리</i>
        </span>
      </div>
      <div className="time" onClick={() => (window.location.href = "/")}>
        {time}
      </div>
    </div>
  );
}

export default Header;
