import { useEffect, useRef, useState } from "react"
import { SidebarContent } from "./SidebarContent"
import { Offcanvas } from 'bootstrap'

const Sidebar = (props) => {
    const [collapseToggle, setCollapseToggle] = useState(false)
    const [getOffcanvasEl, setOffcanvasEl] = useState()

    const sideBarRef = useRef()

    useEffect(() => {
        if(window.innerWidth < 576) {
            const sidebarOffcanvas = sideBarRef.current
            const offcanvasElement = new Offcanvas(sidebarOffcanvas)
            
            if(collapseToggle) {
                offcanvasElement.show()
                setOffcanvasEl(offcanvasElement)
            }
        }

    }, [collapseToggle])

    const handleClick = (event) => {
        if(window.innerWidth >= 576) {
            const listEl = event.currentTarget
            const activeEl = document.querySelector(".list-color-modified-active")
            activeEl.className = "rounded list-group-item list-group-item-action list-color-modified link-hover-mod"
            listEl.className = "border border-0 list-group-item list-group-item-action list-color-modified-active link-hover-mod"
        }

        props.update(event.target.textContent)
        if(getOffcanvasEl) {
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
                <SidebarContent handleClick={handleClick} />
            </div>
            <div className="offcanvas d-sm-none offcanvas-start" id="comp-surface" ref={sideBarRef}>
                <SidebarContent handleClick={handleClick} />
            </div>
        </>
    )

}

export default Sidebar