import { CiHashtag } from "react-icons/ci";

function DocumentTagging() {
  return (
      <section className="capability">
        <div className='btnxLarge'>
          <div className="icon"><CiHashtag /></div>
          <div className="block">
            <h3 className="capability-title">Document Tagging</h3> 
            <strong className='short-desc'>Auto topic tagging & taxonomy management.</strong>
          </div>
        </div>
      </section>
  );
}

export default DocumentTagging;
