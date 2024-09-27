import { useEffect, useState } from 'react';
import { Row } from 'reactstrap';
import './CSS/App.css';
import Button from './Components/Button';
import Input from './Components/Input';

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;

const App = () => {
  const [Text, setText] = useState('');
  const [Result, setResult] = useState('');

  const addToText = (symbol) => {
    setText(Text + symbol);
  };

  const addOptoText = (symbol) => {
    setText(Text + ' ' + symbol + ' ');
  };

  const Clear = () => {
    setText('');
    setResult('');
  };

  const Backspace = () => {
    setText(Text.slice(0, -1));
  };

  const onSubmit = () => {
    try {
      setResult(eval(Text));
    } catch {
      setText('Error');
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key >= 0 && event.key <= 9) {
        addToText(event.key);
      } else if (
        event.key === '+' ||
        event.key === '-' ||
        event.key === '*' ||
        event.key === '/'
      ) {
        addOptoText(event.key);
      } else if (event.key === 'Enter') {
        onSubmit();
      } else if (event.key === 'Backspace') {
        Backspace();
      } else if (event.key === 'Delete') {
        Clear();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [Backspace, addOptoText, addToText, onSubmit]);

  return (
    <>
      {!isMobile ? <div className="App">
        <div className="bg">
          <span>Calculator</span>
        </div>
        <div className="Button">
          <Input Text={Text} Result={Result} />
          <Row>
            <Button col={3} symbol="1" click={addToText} />
            <Button col={3} symbol="2" click={addToText} />
            <Button col={3} symbol="3" click={addToText} />
            <Button col={3} symbol="+" click={addOptoText} color="#D98808" />
          </Row>
          <Row>
            <Button col={3} symbol="4" click={addToText} />
            <Button col={3} symbol="5" click={addToText} />
            <Button col={3} symbol="6" click={addToText} />
            <Button col={3} symbol="-" click={addOptoText} color="#D98808" />
          </Row>
          <Row>
            <Button col={3} symbol="7" click={addToText} />
            <Button col={3} symbol="8" click={addToText} />
            <Button col={3} symbol="9" click={addToText} />
            <Button col={3} symbol="*" click={addOptoText} color="#D98808" />
          </Row>
          <Row>
            <Button col={4} symbol="0" click={addToText} />
            <Button col={4} symbol="<" click={Backspace} color="#D98808" />
            <Button col={3} symbol="/" click={addOptoText} color="#D98808" />
          </Row>
          <Row>
            <Button col={3} symbol="Clear" click={Clear} color="#650000" />
            <Button col={3} symbol="=" click={onSubmit} color="#008000" />
          </Row>
        </div>
      </div> : <div className="App text-white">
        Only for Desktop, Please open in Desktop
      </div>}
      <footer className="footer">
        <p>
          &copy; pmohanaprasad.tech
        </p>
      </footer>
    </>
  );
};

export default App;
