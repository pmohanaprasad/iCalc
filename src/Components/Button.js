import { Col } from "reactstrap";
import "../CSS/Button.css";

const Button = ({ symbol, color, click, input, col }) => {
  return (
    <Col xs={col}
      onClick={() => click(symbol)}
      className={`Buttonw ${symbol === "0" ? "Zero" : ""} ${symbol === "OK" ? "Zero" : ""
        } ${symbol === "Clear" ? "cr" : ""} ${symbol === "<" ? "Zero" : ""}`}
      style={{ backgroundColor: color }}
    >
      {symbol}
    </Col>
  );
};

export default Button;
