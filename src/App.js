import { useState } from 'react';
import './App.css';

function App() {

  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(value=>!value);
  }

  return (
    <div className="App">
      <header className={toggle && "activeBg"}>
        <div className="DarkmodeToggle" onClick={handleClick}>
      {  toggle ? ( <div className="DarkmodeSwitch">
            Dark
          </div>) :
         ( <div className="DarkmodeSwitchRed">
            light
          </div>)}
        </div>
      </header>
      <main className={toggle && "activeMain"}>
        <p>This is a sample container for testing</p>
        <p className={toggle && "active"}>This should turn grey</p>
      </main>
    </div>
  );
}

export default App;
