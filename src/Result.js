import { useSelector } from "react-redux";
import "./result.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { res } from "./Redux/Action";

const Resultt = () => {
  const dispatch = useDispatch();
  let Result = useSelector((state) => state.Re);

  useEffect(() => {
    if (isNaN(Result)) dispatch(res("MATH ERROR"));
    // eslint-disable-next-line
  }, [res]);

  return (
    <div>
      <div className="st">Result: {Result}</div>
      <div className="bord">
        <div className="final">
          <Link to="/App" style={{ textDecoration: "none", color: "white" }}>
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resultt;
