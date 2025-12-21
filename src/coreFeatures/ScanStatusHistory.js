import { PiScanThin } from "react-icons/pi";

function ScanStatusHistory() {
  return (
      <section className="capability">
        <div className='btnxLarge'>
          <div className="icon"><PiScanThin /></div>
          <div className="block">
            <h3 className="capability-title">Scan Status & History</h3> 
            <strong className='short-desc'>Track queue, statuses & view historical reports.</strong>
          </div>
        </div>
      </section>
  );
}

export default ScanStatusHistory;
