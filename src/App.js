import { useState } from 'react';
import './App.css';
import InputFields from './components/InputFields';
import InputNumbers from './components/InputNumbers';
function App() {
  const [calVal, setCalVal] = useState('');
  const handleOnClickButton = (buttonName) => {
    if (buttonName === 'C') {
      setCalVal('');
    }else if (buttonName === '=') {
      setCalVal(eval(calVal));
      
    } else {
    let newDisplayVal = calVal + buttonName;
    setCalVal(newDisplayVal);
  }
  };
  return (
    <div>
      <h1>Calculator</h1>
      <div className="container">
        <InputFields inputCalVal={calVal}></InputFields>
        <InputNumbers onClickButton={handleOnClickButton}></InputNumbers>
      </div>
    </div>
  );
}

export default App;
