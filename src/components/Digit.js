// 정보 출력
import "../css/Digit.css";

function Digit(props) {
  const digisearch = () => {
    window.location.href = "/digimon/info?query=" + props.id;
  };

  return (
    <div id="digit">
      <div className="digit-imgae" onClick={digisearch}>
        <img src={props.dimg} />
      </div>
      <div className="digit-name">
        <span>name :</span> <span>{props.name}</span>
      </div>
      <div className="digit-id">
        <span>id :</span> <span>{props.id}</span>
      </div>
    </div>
  );
}

export default Digit;
