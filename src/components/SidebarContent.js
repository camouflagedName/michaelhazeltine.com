
export const SidebarContent = (props) => {

    return (
        <>
            <div className='w-100 mb-auto mt-4'>
                <h1 className="text-center name display-4"><b>Directory</b></h1>
            </div>
            <div className='w-100 mb-auto mt-auto'>
                <ul className="list-group">
                    <li id="about" className="list-group-item list-group-item-action list-color-modified link-hover-mod" onClick={props.handleClick} ref={props.aboutRef} >
                        <p className='fs-4 text-center'>About Me</p>
                    </li>
                    <li id="projects" className="rounded list-group-item list-group-item-action list-color-modified link-hover-mod" onClick={props.handleClick} >
                        <p className='fs-4 text-center'>Projects</p>
                    </li>
                    <li id="resume" className="rounded list-group-item list-group-item-action list-color-modified link-hover-mod" onClick={props.handleClick} >
                        <p className='fs-4 text-center'>Resume</p>
                    </li>
                    {/*
                        <li id="about" className="rounded list-group-item list-group-item-action list-color-modified link-hover-mod" onClick={handleClick} >
                            <p className='fs-4 text-center'>About This Website</p>
                        </li>
                    */}
                </ul>
            </div>
            <div className='w-100 mt-auto mb-4'>
                <h4 className="text-center app-text">Contact</h4>
                <div className='row rows-cols-3 text-white text-center fs-5' id="contact-links">
                    <div className='col'><a href="mailto:michael.a.hazeltine@gmail.com"><i className="bi bi-envelope-fill"></i></a></div>
                    <div className='col'><a href="https://www.linkedin.com/in/michael-hazeltine-19972087" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a></div>
                    <div className='col'><a href="https://www.github.com/camouflagedname" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a></div>
                </div>
            </div>
        </>
    )
}