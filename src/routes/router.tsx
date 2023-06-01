import { createBrowserRouter } from "react-router-dom";
import AboutText from '../components/AboutText';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Timeline from '../components/Timeline';
import Main from "../components/Main";


export const router = createBrowserRouter([
    {
        element: <Main />,
        children: [
            {
                path: "/",
                element: <AboutText />
            },
            {
                path: "/projects",
                element: <Projects/>
            },
            {
                path: "/timeline",
                element: <Timeline />
            },
            {
                path: "/resume",
                element: <Resume />
            },
        ]
    }

])