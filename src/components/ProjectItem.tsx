
interface ProjectItemParams {
  website: string | undefined;
  github: string;
  title: string;
  description: string;
  date?: string;
  stack: string[];
}

function ProjectItem({
  website, github, title, description, stack
}: ProjectItemParams) {

  const links = website === ''
    ? (
      <div className="mt-auto">
        <a href={github} target="_blank" rel="noreferrer" className="btn project-link-bg mt-2 text-white">GitHub</a>
      </div>
    )
    : (
      <div className="d-flex row-cols-2 mt-auto">
        <div className="col mt-3">
          <a href={github} target="_blank" rel="noreferrer" className="btn project-link-bg text-white">GitHub</a>
        </div>
        <div className="col mt-3">
          <a href={website} target="_blank" rel="noreferrer" className="btn project-link-bg text-white">Demo</a>
        </div>
      </div>
    );

  const stackArray = stack.map((entry, index) =>
    <h6 key={index} className="badge gradient-custom text-white mb-0 mx-2">{entry}</h6>
  )

  return (
    <div className="col d-flex">
      <div className="card mh-100 w-100 rounded-5 bg-dark project-item-decoration">
        <div className="card-body d-flex flex-column rounded-5">
          <h3 className="card-title m-0">{title}</h3>
          <p className="card-text text-start mb-auto mt-auto d-flex align-items-center" style={{height: 96}}>
            <span>{description}</span></p>
          <div className="mt-1">
            {stackArray}
          </div>
          {links}
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
