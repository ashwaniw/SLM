import { CiImageOn } from "react-icons/ci";

function ImageOCR() {
  return (
      <section className="capability">
        <div className='btnxLarge'>
          <div className="icon"><CiImageOn /></div>
          <div className="block">
            <h3 className="capability-title">Image & OCR</h3> 
            <strong className='short-desc'>Extract text, detect objects & annotate images.</strong>
          </div>
        </div>
      </section>
  );
}

export default ImageOCR;
