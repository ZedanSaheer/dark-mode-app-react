import { useState } from 'react';
import './App.css';

function App() {

  const [toggle,setToggle] = useState(false)

  return (
    <div className="App">
      <div className="DarkmodeToggle">
          <div className="DarkmodeSwitch">
              {toggle ? "on" : "off"}
          </div>
      </div>
      <main>
        This is a sample container for testing 
        <div>This should turn grey</div>
      </main>
    </div>
  );
}

export default App;
