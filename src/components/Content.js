import About from "./About"
import Projects from "./Projects"
import Resume from "./Resume"

const Content = (props) => {

    return (
        <>
            {
                props.page === "Resume" ?
                    <Resume />
                    :
                    props.page === "Projects" ?
                        <Projects />
                        :
                        <About />
            }
        </>
    )
}

export default Content