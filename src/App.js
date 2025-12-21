// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import LandingPageHeader from './LandingPageHeader';
import CoreFeatures from '../src/coreFeatures/CoreFeatures'
import QuickApps from './quickApp/QuickApps';

function App() {
  return (
    <div className="App">
      <Header />
      <section className='mainContent'>
          <LandingPageHeader />
          <CoreFeatures />
          <QuickApps />
        </section>
      <Footer />
    </div>
  );
}

export default App;
