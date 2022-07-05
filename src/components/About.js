import { useState } from "react"
import aboutText from "../util/aboutText"
const pic = require("../util/images/main_pic(cropped).jpg")


const About = () => {
    const [text, setText] = useState(aboutText.init)

    const handleClick = (event) => {
        const clickedButton = event.currentTarget
        const otherButton = document.querySelector(".nav-link.fs-4.active.bg-dark")
        const type = clickedButton.textContent

        if (otherButton.textContent !== clickedButton.textContent) {
            otherButton.className = "nav-link fs-4"
            clickedButton.className = "nav-link fs-4 active bg-dark"
        }

        type === "Professional" ? setText(aboutText.professional)
            : type === "Personal" ? setText(aboutText.personal)
                : setText(aboutText.init)
    }

    return (
        <div className="col-sm-7 offset-sm-1 d-flex justify-content-center">
            <div className="card border-0 bg-transparent mb-auto mt-auto">
                <div className="text-center shadow-md">
                    <img className='card-img-top' src={pic} style={{ maxWidth: "400px", maxHeight: "auto" }} alt='main' />
                </div>
                <div className="card-body">
                    <ul className="nav nav-tabs mt-3 nav-fill" id="about-text-tab">
                        <li className="nav-item">
                            <button className="nav-link fs-4 active bg-dark" type="button" onClick={handleClick}><b>Welcome</b></button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link fs-4" type="button" onClick={handleClick}><b>Professional</b></button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link fs-4" type="button" onClick={handleClick}><b>Personal</b></button>
                        </li>
                    </ul>
                    <div className="tab-content mt-3">
                        <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="list-home-list">
                            <p className="card-text text-center app-text fs-5">{text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About