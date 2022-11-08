import React from 'react';
import aboutText from '../util/aboutText';

const pic = require('../util/images/main_pic(cropped).jpg');

function About() {
  return (
    <div className="d-flex flex-column justify-content-center">
      <h1 className="app-text bg-dark text-center py-2 mb-3">Michael Hazeltine</h1>
      <div className="card border-0 bg-transparent mb-auto mt-auto">
        <div className="text-center shadow-md">
          <img className="card-img-top" src={pic} style={{ maxWidth: '400px', maxHeight: 'auto' }} alt="main" />
        </div>
        <div className="card-body mt-4">
          <div className="row mb-5">
            <h3 className="app-text">Welcome</h3>
            <p className="card-text app-text fs-5">{aboutText.init}</p>
          </div>
          <div className="row my-5">
            <h3 className="app-text">Professional</h3>
            <p className="card-text app-text fs-5">{aboutText.professional}</p>
          </div>
          <div className="row my-5">
            <h3 className="app-text">Personal</h3>
            <p className="card-text app-text fs-5">{aboutText.personal}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
