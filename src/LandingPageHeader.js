import logo from './logo.svg';
import docIcon from '../src/images/docIcon.png'
import './App.css';

function LandingPageHeader() {
  return (
      <header className="Features-container">
        <div className='container'>
          <div className='block-container'>
            <div className='left flex1'>
              <div className='block-content'>
                <h1 className='title'>
                  <span className='colorPrimary'>AI-Powered Multi Modal </span> 
                  <span className='colorSecondary'>Intelligence for your enterprise</span>
                </h1>
                  <p>Process documents, images, audio & video with enterprise-grade PII/PHI 
                  detection, automatic tagging, vector search and instant summarization.</p>
                  <div className='btnContainer'>
                    <a href='#' className='btnLarge'>Start Free Trial</a>
                    <a href='#' className='btnLarge btn-secondary'>Explore Features</a>
                  </div>
                  <div className='features'>
                    <a href='#' className='btnxLarge'>Avg latency <br/> <strong className='blue'> 2.1s</strong> <strong className='black'>/ request</strong></a>
                    <a href='#' className='btnxLarge'>PII Detection <br/> <strong className='blue'> > 95% </strong> <strong className='black'> accuracy</strong></a>
                    <a href='#' className='btnxLarge'>Platforms  <br/> <strong className='black'> Web.Mobile</strong></a>
                  </div>
              </div>
            </div>
            <div className='right flex1'>
              <div className='block-content'>
                <div className='searchContainer'>
                  <h1 className='title'>"Your Data — Private. Protected. Powerful."</h1>
                  <div className='searchbox'>
                    <p style={{alignItems: 'center'}}>Kindly attach the necessary document <img src={docIcon} alt='' /> for review</p>
                    <input type='text' className='searchInput' placeholder='Supported file types include PDF, PPT, DOC, and TXT' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

  );
}

export default LandingPageHeader;
