import logo from '../src/images/ia-logo.png';
import './App.css';

function App() {
  return (
      <header className="App-header-footer">
        <div className='container'>
          <div className='block-container'>
            <div className='left'>
              <div><img src={logo} className="App-logo" alt="logo" /></div>
              <div className='app'>
                <h1 className='app-title'>Ingenuity AI</h1>
                <small>AI Suite</small>
              </div>
            </div>
            <div className='right'>
              <a className="App-link" href="javascript:void(0)">
                Features
              </a>
              <a className="App-link" href="javascript:void(0)">
                Quick Apps
              </a>          
              <a className="button" href="javascript:void(0)">
                Login
              </a>
            </div>
          </div>
        </div>
      </header>
  );
}

export default App;
