import logo from './logo.svg';
import './App.css';
import FirstStarter from './FirstStarter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FirstStarter name='Linh'/>
        <FirstStarter name='Hung'/>
        <FirstStarter name='Nga'/>
      </header>
    </div>
  );
}
export default App;
