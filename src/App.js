import logo from './assets/logo.png';
import './App.css';
import { Header } from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width='300'  />
      </header>

      <Header/>
    </div>
  );
}

export default App;
