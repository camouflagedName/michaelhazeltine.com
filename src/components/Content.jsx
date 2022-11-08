/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React from 'react';
import About from './AboutAlt';
import Projects from './Projects';
import Resume from './Resume';

function Content({ page }) {
  const selectedPage = page === 'Resume' ? <Resume /> : page === 'Projects' ? <Projects /> : <About />;
  return selectedPage;
}

export default Content;
