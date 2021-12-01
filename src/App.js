import { useState } from 'react';
import './App.css';

function App() {

  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(true);
  }

  return (
    <div className="App">
      <header>
        <div className="DarkmodeToggle" onClick={handleClick}>
          <div className="DarkmodeSwitch">
            {toggle ? "on" : "off"}
          </div>
        </div>
      </header>
      <main>
        <p>This is a sample container for testing</p>
        <p>This should turn grey</p>
      </main>
    </div>
  );
}

export default App;
