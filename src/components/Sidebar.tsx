import { Offcanvas } from 'bootstrap';
import { useEffect, useRef, useState } from 'react';
import SidebarContent from './SidebarContent';
import useResize from '../hooks/useResize';

const Sidebar = function Sidebar({ update, title }: { update: (param: any) => void, title: string }) {
  const [init, setInit] = useState(true);
  const [collapseToggle, setCollapseToggle] = useState(false);
  const [getOffcanvasEl, setOffcanvasEl] = useState<Offcanvas | null>(null);
  const [isMobile] = useResize(!(window.innerWidth >= 576));
  const mobileSidebarClass = 'offcanvas d-sm-none offcanvas-start';
  let sidebarClass = 'd-none d-sm-flex col-3 justify-content-center flex-column visible';
  const active = 'border border-0 list-group-item list-group-item-action list-color-modified-active link-hover-mod';
  const inactive = 'rounded list-group-item list-group-item-action list-color-modified link-hover-mod';
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sidebarEl = sidebarRef.current;

    if (!isMobile) {
      if (sidebarEl) sidebarEl.className = sidebarClass;
      if (window.innerHeight === document.documentElement.offsetHeight) {
        sidebarEl?.classList.add('vh-100');
      }


      // initialize sidebar
      if (init) {
        const url = window.location.pathname;
        let modURL = url.replace("/", "#")
        if (modURL.length === 1) modURL += 'about';
        const aboutEl = document.querySelector(modURL);
        if (aboutEl) aboutEl.className = active;
      }
    } else {
      if (sidebarEl) {

        sidebarEl.className = mobileSidebarClass;
        sidebarEl.addEventListener('hide.bs.offcanvas', () => setCollapseToggle(false));
        const offcanvasElement = new Offcanvas(sidebarEl);


        // activate offcanvas sidebar
        if (collapseToggle) {
          // set the first tab as active only on initial open
          const aboutEl = document.querySelector('#about');
          if (init && aboutEl) aboutEl.className = active;
          offcanvasElement.show();
          setOffcanvasEl(offcanvasElement);
        }
      }
    }
  }, [init, collapseToggle, isMobile, sidebarClass]);

  /* removes the faded OffCanvas backdrop */
  useEffect(() => {
    if (!isMobile) {
      getOffcanvasEl?.hide();
    }
  }, [isMobile, getOffcanvasEl])

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {

    const targetEl = event.currentTarget.parentNode as HTMLElement;
    const altTarget = event.target as HTMLElement;
    const prevActiveEl = document.querySelector('.list-color-modified-active');

    /*
        setActiveItem((prev) => {
        setPrevItem(prev);
        return targetEl.id;
        });
    */
    setInit(false);

    if (prevActiveEl) {
      prevActiveEl.className = inactive;
    }
    targetEl.className = active;

    // update content
    update(altTarget.textContent);

    // close sidebar
    if (getOffcanvasEl) {
      getOffcanvasEl.hide();
      setCollapseToggle(false);
    }
  };

  const handleSidebarToggle = () => {
    setCollapseToggle(true);
  };

  return (
    <>

      <MobileSidebar sidebarToggle={handleSidebarToggle} title={title} />

      <div id="sidebar-lg" ref={sidebarRef}>
        <SidebarContent handleClick={handleClick} />
      </div>
    </>
  );
};

export default Sidebar;

const MobileSidebar = ({ sidebarToggle, title }: { sidebarToggle: () => void, title: string }) => {

  const handleClick = () => {
    sidebarToggle();
  }

  return (
    <div className="d-sm-none" id="sidebar-mobile">
      <nav className="navbar bg-dark sticky-top">
        <div className="container-fluid">
          <button className="navbar-toggler navbar-dark bg-dark" type="button" aria-controls="offcanvasNavbar" onClick={handleClick}>
            <span className="navbar-toggler-icon" />
          </button>
          <h1 className="text-light m-auto">{title}</h1>
        </div>
      </nav>
    </div>
  )
}
