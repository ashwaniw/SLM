import { HiOutlineVideoCamera } from "react-icons/hi2";

function VideoSummarization() {
  return (
      <section className="capability">
        <div className='btnxLarge'>
          <div className="icon"><HiOutlineVideoCamera /></div>
          <div className="block">
            <h3 className="capability-title">Video Summarization</h3> 
            <strong className='short-desc'>Scene-level summaries, chapters & transcript highlights.</strong>
          </div>
        </div>
      </section>
  );
}

export default VideoSummarization;
