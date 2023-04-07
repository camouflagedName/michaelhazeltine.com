import { Offcanvas } from 'bootstrap';
import { useEffect, useRef, useState } from 'react';
import SidebarContent from './SidebarContent';

const Sidebar = function Sidebar({ update }: { update: (param: any) => void }) {
  const [init, setInit] = useState(true);
  const [isMobile, setIsMobile] = useState(!(window.innerWidth >= 576));
  const [collapseToggle, setCollapseToggle] = useState(false);
  const [getOffcanvasEl, setOffcanvasEl] = useState<Offcanvas | null>(null);
  // const [activeItem, setActiveItem] = useState();
  // const [prevItem, setPrevItem] = useState();

  const mobileSidebarClass = 'offcanvas d-sm-none offcanvas-start';
  const sidebarClass = 'd-none d-sm-flex col-3 justify-content-center flex-column visible vh-100';
  const active = 'border border-0 list-group-item list-group-item-action list-color-modified-active link-hover-mod';
  const inactive = 'rounded list-group-item list-group-item-action list-color-modified link-hover-mod';

  const sidebarRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLLIElement>(null);

  /* handle window resize */
  useEffect(() => {

    const handleResize = () => {
      const isNotDesktop = (window.innerWidth < 576);
      if (isNotDesktop !== isMobile) setIsMobile(isNotDesktop);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }

  }, [isMobile]);

  useEffect(() => {
    const sidebarEl = sidebarRef.current;
    const aboutRefEl = aboutRef.current;

    if (!isMobile) {
      if (sidebarEl) sidebarEl.className = sidebarClass;

      // initialize sidebar
      if (init) {
        const aboutEl = document.querySelector('#about');
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
            if (init && aboutRefEl) aboutRefEl.className = active;
            offcanvasElement.show();
            setOffcanvasEl(offcanvasElement);
          }
        }
      }
  }, [init, collapseToggle, isMobile]);

  /* removes the faded OffCanvas backdrop */
  useEffect(() => {
    if (!isMobile) {
      getOffcanvasEl?.hide();
    }
  }, [isMobile, getOffcanvasEl])

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {

    const targetEl = event.currentTarget;
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
      <div className="d-sm-none">
        <nav className="navbar bg-dark fixed-top">
          <div className="container-fluid">
            <button className="navbar-toggler navbar-dark bg-dark" type="button" aria-controls="offcanvasNavbar" onClick={handleSidebarToggle}>
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
