// 디지몬 vs 포켓몬 선택할 수 있는 모습 => 선택 시 이동
import "../css/Home.css";

function Home() {
  return (
    <div id="home">
      <div
        className="movepoket"
        onClick={() => (window.location.href = "/poketmon")}
      ></div>
      <div
        className="movedigit"
        onClick={() => (window.location.href = "/digimon")}
      ></div>
    </div>
  );
}

export default Home;
