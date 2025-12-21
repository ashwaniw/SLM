import logo from './logo.svg';
import './App.css';

function Footer() {
  return (
    <footer className="App-header-footer">
        <div className='container'>
          <div className='block-container'>
            <div className='left'>            
              <div className='app'>
                <h1 className='app-title'>Quick Apps</h1>
                <small>AI Suite — PII/PHI detection · Summaries · Vector DB</small>
              </div>
            </div>
            <div className='right'>
              <a className="App-link" href="javascript:void(0)">
                Docs 
              </a>
              <a className="App-link" href="javascript:void(0)">
                    Privacy
              </a>  
              <a className="App-link" href="javascript:void(0)">
                Contact
              </a>  
            </div>
          </div>
        </div>
      </footer>  
  );
}

export default Footer;
