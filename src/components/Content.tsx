import About from './AboutAlt';
import Projects from './Projects';
import Resume from './Resume';
import Timeline from './Timeline';

function Content({ page }: { page: string }) {
  //const selectedPage = page === 'Resume' ? <Resume /> : page === 'Projects' ? <Projects /> : <About />;
  let selectedPage: JSX.Element = <About />;

  switch (page) {
    case 'Resume':
       selectedPage = <Resume />;
       break;
    case 'Projects':
      selectedPage =  <Projects />;
      break;
    case 'About':
      selectedPage = <About />;
      break;
    case 'Timeline':
      selectedPage = <Timeline />
      break;
    default:
      selectedPage = <About />;
  }
  
  return selectedPage;
}

export default Content;
