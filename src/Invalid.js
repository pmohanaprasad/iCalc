import "./CSS/Result.css";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const Invalid = () => {
  const red = useHistory();

  useEffect(() => {
    setTimeout(() => {
      red.push("/App");
    }, 3000);
  });

  return (
    <div className="st">
      Invalid Input (Enter Numbers or Operator Accordingly)
    </div>
  );
};

export default Invalid;
