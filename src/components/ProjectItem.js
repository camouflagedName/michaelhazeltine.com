
const ProjectItem = (props) => {

    const links = props.website === '' ?
        <div className="mt-auto"> 
            <a href={props.github} target="_blank" rel="noreferrer" className="btn btn-outline-secondary">GitHub</a>
        </div>
        :
        <div className="d-flex row-cols-2 mt-auto">
            <div className="col">
                <a href={props.github} target="_blank" rel="noreferrer" className="btn btn-outline-secondary">GitHub</a>
            </div>
            <div className="col">
                <a href={props.website} target="_blank" rel="noreferrer" className="btn btn-outline-secondary">Website</a>
            </div>
        </div>


    return (
        <div className="col d-flex">
            <div className="card mh-100 w-100 rounded-5 bg-dark project-item-decoration">
                <div className="card-body d-flex flex-column rounded-5">
                    <h3 className="card-title m-0">{props.title}</h3>
                    <p className="card-text text-start mb-auto mt-auto">{props.description}</p>
                    {links}
                </div>
            </div>
        </div>
    )
}

export default ProjectItem