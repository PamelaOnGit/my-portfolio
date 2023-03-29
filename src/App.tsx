import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route
} from "react-router-dom";
import { Homepage } from './components/homepage/Homepage';


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <Routes>
        <Route path="/" element=  {<Homepage />} />


      </Routes>
    </Router>
  );
}

export default App;
