import { PiHeartbeatLight } from "react-icons/pi";

function PIIPHI() {
  return (
      <section className="capability">
        <div className='btnxLarge'>
          <div className="icon">
            <PiHeartbeatLight />
          </div>
          <div className="block">
            <h3 className="capability-title">PII / PHI Detection</h3> 
            <strong className='short-desc'>Detect & mask sensitive data across docs, images & audio.</strong>
          </div>
        </div>
      </section>
  );
}

export default PIIPHI;
