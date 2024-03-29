
export {}
/*import React, { useEffect, useState } from 'react';
import aboutText from '../util/aboutText';
import pic from '../util/images/main_pic(cropped).jpg';
//const pic = require('../util/images/main_pic(cropped).jpg');

function About() {
  const [text, setText] = useState(aboutText.init);
  const [init, setInit] = useState(true);
  const [selected, setSelected] = useState("");
  const [prev, setPrev] = useState("");
  const active = 'nav-link fs-4 active bg-dark';
  const inactive = 'nav-link fs-4';

  useEffect(() => {
    if (init) {
      const welcome = document.getElementById('welcome');

      if (welcome) {
        welcome.className = active;
        setSelected('welcome');
      }

    } else {
      const activeEl = document.getElementById(selected);
      const prevEl = document.getElementById(prev);

      if (activeEl) {
        activeEl.className = active;
      }

      if (prevEl) {
        prevEl.className = inactive;
      }

    }
  }, [selected, prev, init]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = event.currentTarget;
    setInit(false);
    setSelected((previous) => {
      setPrev(previous);
      return id;
    });

    const clickedButton = event.currentTarget;
    const type = clickedButton.textContent;

    if (type === 'Professional') {
      setText(aboutText.professional);
    } else if (type === 'Personal') {
      setText(aboutText.personal);
    } else {
      setText(aboutText.init);
    }
  };

  return (
    <div className="col-12 col-sm-7 offset-sm-1 d-flex justify-content-center">
      <div className="card border-0 bg-transparent mb-auto mt-auto">
        <div className="text-center shadow-md">
          <img
            className="card-img-top"
            src={pic}
            style={{ maxWidth: '400px', maxHeight: 'auto' }}
            alt="main"
          />
        </div>
        <div className="card-body">
          <ul className="nav nav-tabs mt-3 nav-fill" id="about-text-tab">
            <li className="nav-item">
              <button
                id="welcome"
                className="nav-link fs-4"
                type="button"
                onClick={handleClick}
              >
                <b>Welcome</b>
              </button>
            </li>
            <li className="nav-item">
              <button
                id="professional"
                className="nav-link fs-4"
                type="button"
                onClick={handleClick}
              >
                <b>Professional</b>
              </button>
            </li>
            <li className="nav-item">
              <button
                id="personal"
                className="nav-link fs-4"
                type="button"
                onClick={handleClick}
              >
                <b>Personal</b>
              </button>
            </li>
          </ul>
          <div className="tab-content mt-3">
            <div
              className="tab-pane fade show active"
              role="tabpanel"
              aria-labelledby="list-home-list"
            >
              <p className="card-text text-center app-text fs-5">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
*/