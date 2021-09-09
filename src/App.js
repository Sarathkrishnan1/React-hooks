import './App.css';
import Usestatepage from './components/UseStateCodes/Usestatepage';
import Usestatepagetwo from './components/UseStateCodes/Usestatepagetwo';
import Usestateobjpage from './components/UseStateCodes/Usestateobjpage';
import Usestatearrpage from './components/UseStateCodes/Usestatearrpage';

function App() {
  return (
    <div className="App">
     <Usestatepage /><br />
     <Usestatepagetwo /><br />
     <Usestateobjpage /><br />
     <Usestatearrpage />
    </div>
  );
}

export default App;
