
interface ProjectItemParams {
  website: string | undefined;
  github: string;
  title: string;
  description: string;
  date?: string;
}

function ProjectItem({
  website, github, title, description
}: ProjectItemParams) {
  const links = website === ''
    ? (
      <div className="mt-auto">
        <a href={github} target="_blank" rel="noreferrer" className="btn btn-outline-secondary mt-2">GitHub</a>
      </div>
    )
    : (
      <div className="d-flex row-cols-2 mt-auto">
        <div className="col mt-3">
          <a href={github} target="_blank" rel="noreferrer" className="btn btn-outline-secondary">GitHub</a>
        </div>
        <div className="col mt-3">
          <a href={website} target="_blank" rel="noreferrer" className="btn btn-outline-secondary">Demo</a>
        </div>
      </div>
    );

  return (
    <div className="col d-flex">
      <div className="card mh-100 w-100 rounded-5 bg-dark project-item-decoration">
        <div className="card-body d-flex flex-column rounded-5">
          <h3 className="card-title m-0">{title}</h3>
          <p className="card-text text-start mb-auto mt-auto">{description}</p>
          {links}
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;