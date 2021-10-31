import { useSelector } from "react-redux";
import "./result.css";
import { Link } from "react-router-dom";

const Resultt = () => {
  let Result = useSelector((state) => state.Re);
  if (isNaN(Result)) Result = "MATH ERROR";
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
