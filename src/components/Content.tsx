//import About from './AboutAlt';
import AboutText from './AboutText';
import Projects from './Projects';
import Resume from './Resume';
import Timeline from './Timeline';

function Content({ page }: { page: string }) {
  let selectedPage: JSX.Element = <AboutText />;

  switch (page) {
    case 'Resume':
       selectedPage = <Resume />;
       break;
    case 'Projects':
      selectedPage =  <Projects />;
      break;
    case 'About':
      selectedPage = <AboutText />;
      break;
    case 'Timeline':
      selectedPage = <Timeline />
      break;
    default:
      selectedPage = <AboutText />;
  }
  
  return selectedPage;
}

export default Content;
