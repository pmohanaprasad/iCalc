import './CSS/Result.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Invalid = () => {
  const red = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      red.push('/App');
    }, 3000);
  });

  return (
    <div className="st">
      Invalid Input (Enter Numbers or Operator Accordingly)
    </div>
  );
};

export default Invalid;
