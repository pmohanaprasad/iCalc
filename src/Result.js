import { useSelector } from "react-redux";
import "./CSS/Result.css";
import { Link } from "react-router-dom";

const Resultt = () => {
  const Result = useSelector((state) => state.Re);

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
