import projectData from "../util/projectData"
import ProjectItem from "./ProjectItem"

const Projects = () => {

  const data = projectData.map((data, index) => {
    if (data.show) {
      return (
        <ProjectItem key={index} title={data.title} description={data.description} github={data.links.github} website={data.links.website} date={data.date} />
      )
    }
    else return false
  })

  return (
    <div className="row row-cols-1 row-cols-md-2 g-5 my-5 text-center mx-4 justify-content-center">
      {data}
    </div>
  )
}

export default Projects