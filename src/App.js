import { useState } from 'react';
import { Row } from 'reactstrap';
import './CSS/App.css';
import Button from './Components/Button';
import Input from './Components/Input';

const App = () => {
  const [Text, setText] = useState('');
  const [Result, setResult] = useState('');

  const addToText = (symbol) => {
    setText(Text + symbol);
  }

  const addOptoText = (symbol) => {
    setText(Text + ' ' + symbol + ' ');
  }

  const Clear = () => {
    setText('');
    setResult('');
  }

  const Backspace = () => {
    setText(Text.slice(0, -1));
  }

  const onSubmit = () => {
    try {
      setResult(eval(Text))
    }
    catch {
      setText('Error');
    }
  }

  return (<>
    <div className="App">
      <div className="bg">
        <span>Calculator</span>
      </div>
      <div className="Button">
        <Input
          Text={Text}
          Result={Result}
        />
        <Row >
          <Button col={3} symbol="1" click={addToText} />
          <Button col={3} symbol="2" click={addToText} />
          <Button col={3} symbol="3" click={addToText} />
          <Button col={3} symbol="+" click={addOptoText} color="#D98808" />
        </Row>
        <Row >
          <Button col={3} symbol="4" click={addToText} />
          <Button col={3} symbol="5" click={addToText} />
          <Button col={3} symbol="6" click={addToText} />
          <Button col={3} symbol="-" click={addOptoText} color="#D98808" />
        </Row>
        <Row >
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
        <Row >
          <Button col={3} symbol="Clear" click={Clear} color="#650000" />
          <Button col={3} symbol="=" click={onSubmit} color="#008000" />
        </Row>
      </div>
    </div>
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()}  pmohanaprasad. All rights reserved.</p>
    </footer>
  </>
  );
};

export default App;
