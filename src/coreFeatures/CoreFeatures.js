
import PIIPHI from './PIIPHI';
import ImageOCR from './ImageOCR';
import DocumentTagging from './DocumentTagging';
import AudioSummarization from './AudioSummarization';
import GenerativeFormats from './GenerativeFormats';
import PerformanceMonitoring from './PerformanceMonitoring';
import ScanStatusHistory from './ScanStatusHistory';
import VideoSummarization from './VideoSummarization';
import WebContentCompliance from './WebContentCompliance';

function CoreFeatures() {
  return (
      <section className="Core-capabilities">
        <div className='container'>
          <div className='block-container'>
              <h2 className='capability-title'>Core Features</h2>
              <p className='short-description'>All-in-one platform for content intelligence across text, audio, image & video.</p>
              <div className='capabilities'>
                <PIIPHI />
                <ImageOCR />
                <GenerativeFormats />
                <AudioSummarization />
                <VideoSummarization />
                <DocumentTagging />
                <ScanStatusHistory />
                <PerformanceMonitoring />
                <WebContentCompliance />
              </div>
          </div>          
        </div>
      </section>
  );
}

export default CoreFeatures;
