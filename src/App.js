import logo from './logolang.png';
import './App.css';
import StartButton from './components/StartButton/StartButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="text">
          If you want to learn a language click on the button below.
        </div>
        <div>
          <StartButton className="startbutton" link={'/translator-pol-eng'} text={'POLISH - ENGLISH'}/>
          <StartButton className="startbutton" link={'/translator-eng-pol'} text={'ENGLISH - POLISH'}/>
          <StartButton className="startbutton" link={'/translator-pol-fre'} text={'POLISH - FRENCH'}/>
        </div>
      </header>
    </div>
  );
}

export default App;
