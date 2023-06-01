const resume = require('../util/docs/MHazeltine_Resume_Apr2023.pdf');

function Resume() {
  return (
    <div className="d-flex col">
      <div className="ratio ratio-1x1">
        <iframe title="resume" src={resume} />
      </div>
    </div>
  );
}

export default Resume;
