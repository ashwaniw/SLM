import { HiOutlineDocumentText } from "react-icons/hi2";

function GenerativeFormats() {
  return (
      <section className="capability">
        <div className='btnxLarge'>
          <div className="icon"><HiOutlineDocumentText /></div>
          <div className="block">
            <h3 className="capability-title">Generative Formats</h3> 
            <strong className='short-desc'>Create BRDs, summaries, templates & structured JSON outputs.</strong>
          </div>
        </div>
      </section>
  );
}

export default GenerativeFormats;
