import { LiaFileAudio } from "react-icons/lia";
function AudioSummarization() {
  return (
      <section className="capability">
        <div className='btnxLarge'>
          <div className="icon"><LiaFileAudio /></div>
          <div className="block">
            <h3 className="capability-title">Audio Summarization</h3> 
            <strong className='short-desc'>Transcribe & summarize meetings, calls & podcasts.</strong>
          </div>
        </div>
      </section>
  );
}

export default AudioSummarization;
