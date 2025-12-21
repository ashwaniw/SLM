import { GrDocumentPerformance } from "react-icons/gr";

function PerformanceMonitoring() {
  return (
      <section className="capability">
        <div className='btnxLarge'>
          <div className="icon"><GrDocumentPerformance /></div>
          <div className="block">
            <h3 className="capability-title">Performance Monitoring</h3> 
            <strong className='short-desc'>Extract text, detect objects & annotate images.</strong>
          </div>
        </div>
      </section>
  );
}

export default PerformanceMonitoring;
