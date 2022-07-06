import { useEffect, useRef, useState } from "react"
import { SidebarContent } from "./SidebarContent"
import { Offcanvas } from 'bootstrap'

const Sidebar = (props) => {
    const [init, setInit] = useState(true)
    const [collapseToggle, setCollapseToggle] = useState(false)
    const [getOffcanvasEl, setOffcanvasEl] = useState()
    const [activeItem, setActiveItem] = useState()
    const [prevItem, setPrevItem] = useState()

    const sidebarRef = useRef()
    const aboutRef = useRef()

    useEffect(() => {
        if (window.innerWidth >= 576) {
            //initialize sidebar
            if (init) {
                const aboutEl = document.querySelector("#about")
                aboutEl.className = "border border-0 list-group-item list-group-item-action list-color-modified-active link-hover-mod"
            }
        }


        else {
            const sidebarOffcanvas = sidebarRef.current
            const offcanvasElement = new Offcanvas(sidebarOffcanvas)

            //activate offcanvas sidebar
            if (collapseToggle) {

                //initialize
                if (init) {
                    aboutRef.current.className = "border border-0 list-group-item list-group-item-action list-color-modified-active link-hover-mod"
                }
                offcanvasElement.show()
                setOffcanvasEl(offcanvasElement)
            }
        }

    }, [init, collapseToggle])

    const handleClick = (event) => {

        const targetEl = event.currentTarget
        const prevActiveEl = document.querySelector(".list-color-modified-active")

        setActiveItem(prev => {
            setPrevItem(prev)
            return targetEl.id
        })
        
        setInit(false)

        prevActiveEl.className = "rounded list-group-item list-group-item-action list-color-modified link-hover-mod"
        targetEl.className = "border border-0 list-group-item list-group-item-action list-color-modified-active link-hover-mod"

        //update content
        props.update(event.target.textContent)

        //close sidebar
        if (getOffcanvasEl) {
            getOffcanvasEl.hide()
            setCollapseToggle(false)
        }
    }

    return (
        <>
            <div className="d-sm-none">
                <nav className="navbar bg-dark fixed-top">
                    <div className="container-fluid">
                        <button className="navbar-toggler navbar-dark bg-dark" type="button" aria-controls="offcanvasNavbar" onClick={() => setCollapseToggle(true)}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
            </div>
            <div className='d-none d-sm-flex col-3 justify-content-center flex-column' id="comp-surface">
                <SidebarContent handleClick={handleClick} aboutRef={aboutRef} />
            </div>
            <div className="offcanvas d-sm-none offcanvas-start" id="comp-surface" ref={sidebarRef}>
                <SidebarContent handleClick={handleClick} aboutRef={aboutRef} />
            </div>
        </>
    )

}

export default Sidebar