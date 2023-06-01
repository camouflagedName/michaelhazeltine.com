import React from 'react';
import { Link } from 'react-router-dom';

export default function SidebarContent({ handleClick }: { handleClick: (param: React.MouseEvent<HTMLElement>) => void }) {

  return (
    <>
      <div className="w-100 mb-auto mt-4">
        <h1 className="text-center name display-4">
          <b>Directory</b>
        </h1>
      </div>
      <div className="w-100 mb-auto mt-auto">
        <ul className="link-group">
          <li id="about">
            <Link  to={"/"} onClick={handleClick} className='list-group-link rounded list-group-item list-group-item-action list-color-modified link-hover-mod'>
              <div className="fs-4 text-center">About Me</div>
            </Link>
          </li>
          <li
            id="timeline"
          >
            <Link to={"/timeline"} onClick={handleClick} className='list-group-link rounded list-group-item list-group-item-action list-color-modified link-hover-mod'>
              <div className="fs-4 text-center">Timeline</div>
            </Link>
          </li>
          <li
            id="projects"
          >
            <Link to={"/projects"} onClick={handleClick} className='list-group-link rounded list-group-item list-group-item-action list-color-modified link-hover-mod'>
              <div className="fs-4 text-center">Projects</div>
            </Link>
          </li>
          <li
            id="resume"
          >
            <Link to={"/resume"} onClick={handleClick} className='list-group-link rounded list-group-item list-group-item-action list-color-modified link-hover-mod'>
              <div className="fs-4 text-center">Resume</div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-100 mt-auto mb-4">
        <h4 className="text-center app-text">Contact</h4>
        <div
          className="row rows-cols-3 text-white text-center fs-5"
          id="contact-links"
        >
          <div className="col">
            <a href="mailto:michael.a.hazeltine@gmail.com" aria-label="email">
              <i className="bi bi-envelope-fill" />
            </a>
          </div>
          <div className="col">
            <a
              href="https://www.linkedin.com/in/michael-hazeltine-19972087"
              target="_blank"
              aria-label="linked in"
              rel="noreferrer"
            >
              <i className="bi bi-linkedin" />
            </a>
          </div>
          <div className="col">
            <a
              href="https://www.github.com/camouflagedname"
              target="_blank"
              rel="noreferrer"
              aria-label="github"
            >
              <i className="bi bi-github" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
