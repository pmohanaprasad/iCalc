import { useState } from "react";
import "./CSS/App.css";
import Button from "./Components/Button";
import Input from "./Components/Input";
import { useSelector, useDispatch } from "react-redux";
import { num2 } from "./Redux/Action";
import { Link } from "react-router-dom";

const Number = () => {
  const [Text, setText] = useState("");
  const dispatch = useDispatch();
  const Result = useSelector((state) => state.N2);

  const addToText = (nxt) => {
    dispatch(num2(Result + nxt));
  };

  const Clear = () => {
    dispatch(num2(""));
    setText("");
  };

  const Backspace = () => {
    dispatch(num2(Result.slice(0, -1)));
  };

  const Store = () => {
    dispatch(num2(Result));
    setText((Text) => "Operand 2 = " + Text + Result);
  };

  return (
    <div className="App">
      <div className="bg">
        <h1>Calculator</h1>
      </div>
      <div className="Button">
        <Input
          Text={Text}
          Result={Result}
          handleonchange={(e) => {
            dispatch(num2(e.target.value));
          }}
        />
        <div className="Row">
          <Button symbol="1" click={addToText} />
          <Button symbol="2" click={addToText} />
          <Button symbol="3" click={addToText} />
        </div>
        <div className="Row">
          <Button symbol="4" click={addToText} />
          <Button symbol="5" click={addToText} />
          <Button symbol="6" click={addToText} />
        </div>
        <div className="Row">
          <Button symbol="7" click={addToText} />
          <Button symbol="8" click={addToText} />
          <Button symbol="9" click={addToText} />
        </div>
        <div className="Row">
          <div>
            <Button symbol="0" click={addToText} />
          </div>
          <div>
            <Button symbol="OK" click={Store} />
          </div>
        </div>
        <div className="Row">
          <Button symbol="Clear" click={Clear} color="#650000" />
          <Button symbol="<" click={Backspace} color="#D98808" />
        </div>
        <div className="Row">
          <div className="link">
            <Link
              to="/operator"
              style={{ textDecoration: "none", color: "white" }}
            >
              Choose Operation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Number;
