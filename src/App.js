import logo from './assets/logo.png';
import './App.css';
import { Header } from './components';

function App() {
  return (
    <div className="container">
      <header className="d-flex justify-content-center align-items-center">
        <img src={logo} className="App-logo" alt="logo" width='300'  />
      </header>

      <Header/>
    </div>
  );
}

export default App;
