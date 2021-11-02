import "D:/Monish/Code/iCalc/src/CSS/Button.css";

const Button = ({ symbol, color, click, input }) => {
  return (
    <div
      onClick={() => click(symbol)}
      className={`Buttonw ${symbol === "0" ? "Zero" : ""} ${
        symbol === "OK" ? "Zero" : ""
      } ${symbol === "Clear" ? "cr" : ""} ${symbol === "<" ? "cr" : ""}`}
      style={{ backgroundColor: color }}
    >
      {symbol}
    </div>
  );
};

export default Button;
