// 정보 출력
import "../css/Digit.css";

function Digit(props) {
  return (
    <div id="digit">
      <div className="digit-imgae">
        <img src={props.dimg} />
      </div>
      <div className="digit-name">
        <span>name :</span> <span>{props.name}</span>
      </div>
      <div className="digit-id">
        <span>id :</span> <span>{props.id}</span>
      </div>
      detail = {props.detail}
    </div>
  );
}

export default Digit;
