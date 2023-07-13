//푸터
import "../css/Footer.css";

function Footer() {
  return (
    <div id="footer">
      <div>&copy; Ryong Project : Poketmon & Digimon</div>
      <button onClick={() => (window.location.href = "/box")}>Box</button>
    </div>
  );
}

export default Footer;
