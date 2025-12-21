import { GrCompliance } from "react-icons/gr";

function WebContentCompliance() {
  return (
      <section className="capability">
        <div className='btnxLarge'>
          <div className="icon"><GrCompliance /></div>
          <div className="block">
            <h3 className="capability-title">Web Content Compliance</h3> 
            <strong className='short-desc'>Extract text, detect objects & annotate images.</strong>
          </div>
        </div>
      </section>
  );
}

export default WebContentCompliance;
