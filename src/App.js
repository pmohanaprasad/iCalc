import { useState } from "react";
import "./App.css";
import Button from "./Button";
import Input from "./Input";
import { useSelector, useDispatch } from "react-redux";
import { num1 } from "./Redux/Action";
import { Link } from "react-router-dom";

const App = () => {
  const [Text, setText] = useState("");

  const dispatch = useDispatch();
  const Result = useSelector((state) => state.N1);

  const addToText = (nxt) => {
    dispatch(num1(Result + nxt));
  };

  const Clear = () => {
    dispatch(num1(""));
    setText("");
  };

  const Backspace = () => {
    dispatch(num1(Result.slice(0, -1)));
  };

  const Store = () => {
    dispatch(num1(Result));
    setText((Text) => "Operand 1 = " + Text + Result);
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
          handleonchange={(k) => {
            dispatch(num1(k.target.value));
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
              to="/Number"
              style={{ textDecoration: "none", color: "white" }}
            >
              Number 2
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
