import React from 'react';

const resume = require('../util/docs/MHazeltine_Resume_9.9.pdf');

function Resume() {
  return (
    <div className="d-flex col col-sm-9">
      <div className="ratio ratio-16x9">
        <iframe title="resume" src={resume} />
      </div>
    </div>
  );
}

export default Resume;
