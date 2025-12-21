
import TextSummarization from './TextSummarization'
import ContentCreation from './ContentCreation'
import BRDFromTranscript from './BRDFromTranscript'

function QuickApps() {
  return (
      <section className="Core-capabilities">
        <div className='container'>          
          <div className='block-container quickApps'>
              <h2 className='capability-title'>Quick App — Mini tools hub</h2>
              <p className='short-description'>Instantly access lightweight tools for common tasks.</p>
              <div className='capabilities'>
                <TextSummarization />
                <ContentCreation />
                <BRDFromTranscript />
              </div>
          </div>
        </div>
      </section>
  );
}

export default QuickApps;
