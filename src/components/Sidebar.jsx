/* eslint-disable react/prop-types */
import { Offcanvas } from 'bootstrap';
import React, { useEffect, useRef, useState } from 'react';
import SidebarContent from './SidebarContent';

const Sidebar = function Sidebar({ update }) {
  const [init, setInit] = useState(true);
  const [isMobile, setIsMobile] = useState(!(window.innerWidth >= 576));
  const [collapseToggle, setCollapseToggle] = useState(false);
  const [getOffcanvasEl, setOffcanvasEl] = useState();
  // const [activeItem, setActiveItem] = useState();
  // const [prevItem, setPrevItem] = useState();

  const mobileSidebarClass = 'offcanvas d-sm-none offcanvas-start';
  const sidebarClass = 'd-none d-sm-flex col-3 justify-content-center flex-column visible vh-100';
  const active = 'border border-0 list-group-item list-group-item-action list-color-modified-active link-hover-mod';
  const inactive = 'rounded list-group-item list-group-item-action list-color-modified link-hover-mod';

  const sidebarRef = useRef();
  const aboutRef = useRef();

  useEffect(() => {
    const sidebarEl = sidebarRef.current;

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 576) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    });

    if (!isMobile) {
      sidebarEl.className = sidebarClass;

      // initialize sidebar
      if (init) {
        const aboutEl = document.querySelector('#about');
        aboutEl.className = active;
      }
    } else {
      setIsMobile(true);
      sidebarEl.className = mobileSidebarClass;
      sidebarEl.addEventListener('hide.bs.offcanvas', () => setCollapseToggle(false));
      const offcanvasElement = new Offcanvas(sidebarEl);

      // activate offcanvas sidebar
      if (collapseToggle) {
        // initialize
        if (init) {
          aboutRef.current.className = active;
        }

        offcanvasElement.show();
        setOffcanvasEl(offcanvasElement);
      }
    }
  }, [init, collapseToggle, isMobile]);

  const handleClick = (event) => {
    const targetEl = event.currentTarget;
    const prevActiveEl = document.querySelector('.list-color-modified-active');

    /*
        setActiveItem((prev) => {
        setPrevItem(prev);
        return targetEl.id;
        });
    */
    setInit(false);

    prevActiveEl.className = inactive;
    targetEl.className = active;

    // update content
    update(event.target.textContent);

    // close sidebar
    if (getOffcanvasEl) {
      getOffcanvasEl.hide();
      setCollapseToggle(false);
    }
  };

  return (
    <>
      <div className="d-sm-none">
        <nav className="navbar bg-dark fixed-top">
          <div className="container-fluid">
            <button className="navbar-toggler navbar-dark bg-dark" type="button" aria-controls="offcanvasNavbar" onClick={() => setCollapseToggle(true)}>
              <span className="navbar-toggler-icon" />
            </button>
            <h1 className="text-light m-auto">Michael Hazeltine</h1>
          </div>
        </nav>
      </div>
      <div id="sidebar" ref={sidebarRef}>
        <SidebarContent handleClick={handleClick} aboutRef={aboutRef} />
      </div>
    </>
  );
};

export default Sidebar;
