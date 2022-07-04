//https://docs.google.com/document/d/e/2PACX-1vRyuOne0BEqw9bBVM1u90TsFwq9HhXXBaW6-0XYvaLbkvgRQP5vMqDAdPSV0IxmjA/pub?embedded=true
const resume = require("../util/docs/MHazeltine_Resume_6.19.pdf")

const Resume = () => {

    return (
        <>
            <div className="d-flex col-12 col-md-9">
                <div className="ratio ratio-16x9">
                    <iframe title="resume" src={resume}></iframe>
                </div>
            </div>
        </>
    )
}

export default Resume