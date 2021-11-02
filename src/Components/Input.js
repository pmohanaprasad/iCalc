import "D:/Monish/Code/iCalc/src/CSS/Input.css";

const Input = ({ Text, Result, handleonchange }) => {
  return (
    <div className="Input">
      <input
        type="text"
        className="Result"
        value={Result}
        onChange={handleonchange}
        autofocus="autofocus"
      />

      <div className="Text">
        <h3>{Text}</h3>
      </div>
    </div>
  );
};

export default Input;
