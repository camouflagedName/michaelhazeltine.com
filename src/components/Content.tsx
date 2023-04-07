import About from './AboutAlt';
import Projects from './Projects';
import Resume from './Resume';

function Content({ page }: { page: string }) {
  const selectedPage = page === 'Resume' ? <Resume /> : page === 'Projects' ? <Projects /> : <About />;
  return selectedPage;
}

export default Content;
