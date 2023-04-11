import { useEffect, useState } from "react";

const useResize = (init:boolean = false) => {
    const [isMobile, setIsMobile] = useState(init);

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

    return [isMobile, setIsMobile];
}

export default useResize;