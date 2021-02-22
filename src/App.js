import logo from './logo.svg';
import './App.css';

function App() {
  let personInfo={
    name:"Dr. Mahfuz Rahman",
    job:"Singer",
    jobLocation:"Dhaka"
  }
  let style={
    color:`goldenrod`,
    backgroundColor:`blue`,
    padding:`20px`,
    borderRadius:`4px`
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 style={style}>Hey I Am {`${personInfo.name} And I Am A ${personInfo.job}`}</h3>
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
        </p>
        <p style={{color:'yellow'}}>My First React Js</p>
      </header>
    </div>
  );
}

export default App;
