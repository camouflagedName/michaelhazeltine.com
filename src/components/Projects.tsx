import projectData from '../util/projectData';
import ProjectItem from './ProjectItem';

function Projects() {
  const dataMap = projectData.map((data) => {
    if (data.show) {
      return (
        <ProjectItem
          key={data.title}
          title={data.title}
          description={data.description}
          github={data.links.github}
          website={data.links.website}
          date={data.date}
          stack={data.stack}
        />
      );
    }
    return false;
  });

  return (
    <div className="row row-cols-1 row-cols-md-2 g-5 my-5 text-center mx-4 justify-content-center">
      {dataMap}
    </div>
  );
}

export default Projects;
