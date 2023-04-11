import { useEffect, useRef } from "react";
import useResize from "../../hooks/useResize";

const Body = ({ text }: { text: string, }) => {
    const [isMobile] = useResize(!(window.innerWidth >= 576));
    //const height: string | number = 'auto';
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const textRefEl = textRef.current;
        if (isMobile) {
            if (textRefEl) {
                textRefEl.style.height = '96';
            }
        } else {
            if (textRefEl) {
                textRefEl.style.height = 'auto';
            }
        }
    }, [isMobile]);

    return (
        <p
            ref={textRef}
            className="card-text text-start mb-auto mt-auto d-flex align-items-center"
        >
            <span>{text}</span>
        </p>
    );
}

export default Body;