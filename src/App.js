
import './App.css';
import Site from './Site';

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
       <h1>JamieVanRaalte.com</h1>
      </header>
      
      <div className="sites">
        <Site title="JamieOn.Dev" desc="My dev blog" url="https://jamieon.dev" />
        <Site title="Github" desc="See what I'm working on" url="https://github.com/codente" />
        <Site title="Buy me a coffee?" desc="Say thanks if I've helped you!" url="https://buymeacoffee.com/jmele" />
      </div>
     
     
    </div>
  );
}

export default App;
