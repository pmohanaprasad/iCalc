import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "./Components/Button";
import Input from "./Components/Input";
import { useSelector, useDispatch } from "react-redux";
import { op, res, num1, num2 } from "./Redux/Action";

const Operator = () => {
  const [Text, setText] = useState("");
  const dispatch = useDispatch();
  const Red = useHistory();
  const Result = useSelector((state) => state.Opp);
  const Nu1 = useSelector((state) => state.N1);
  const Nu2 = useSelector((state) => state.N2);

  const addToText = (nxt) => {
    dispatch(op(Result + nxt));
  };

  const Clear = () => {
    dispatch(op(""));
    setText("");
  };

  const Backspace = () => {
    dispatch(op(Result.slice(0, -1)));
  };

  const valid = () => {
    dispatch(op(Result));

    if (Result === "+") dispatch(res(parseFloat(Nu1) + parseFloat(Nu2)));
    else if (Result === "-") dispatch(res(Nu1 - Nu2));
    else if (Result === "*") dispatch(res(Nu1 * Nu2));
    else if (Result === "/") dispatch(res(Nu1 / Nu2));
    else {
      Red.push("/Invalid");
      dispatch(num2(""));
      dispatch(num1(""));
      dispatch(op(""));
      setText("");
    }

    setText((Text) => "Operator = " + Text + Result);
  };

  return (
    <div className="opApp">
      <div className="opbutton">
        <Input
          Text={Text}
          Result={Result}
          handleonchange={(e) => {
            dispatch(op(e.target.value));
          }}
        />
        <div className="op">
          <Button symbol="+" click={addToText} color="#D98808" />
          <Button symbol="-" click={addToText} color="#D98808" />
        </div>
        <div className="op">
          <Button symbol="*" click={addToText} color="#D98808" />
          <Button symbol="/" click={addToText} color="#D98808" />
        </div>
        <div className="op">
          <Button symbol="Clear" click={Clear} color="#650000" />
          <Button symbol="<" click={Backspace} color="#D98808" />
        </div>
        <div className="ok">
          <Button symbol="OK" click={valid} />
        </div>
        <div className="op">
          <div className="link">
            <Link
              to="/Result"
              style={{ textDecoration: "none", color: "white" }}
            >
              Result
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Operator;
