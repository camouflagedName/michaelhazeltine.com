import Sidebar from './Sidebar'
import Content from './Content'
import { useState } from 'react'

const Main = () => {
    const [page, setPage] = useState("Error changing content.")

    const changeContent = (content) => {
        setPage(content)
    }

    return (
        <div className='d-flex container-fluid vh-100 p-0' id="app-surface" >
            <Sidebar update={changeContent} />
            <Content page={page} />
        </div>
    )
}

export default Main