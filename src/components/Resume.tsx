import resume from '../util/docs/resume.pdf'

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
