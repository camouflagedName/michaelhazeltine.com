import About from "../components/AboutAlt";

const AboutText = () => {

      const data = [
            {
                  title: "Welcome",
                  text: 'Welcome! My name is Michael Hazeltine and I am a web developer/programmer.',
            },
            {
                  title: "Professional",
                  text: 'I have been working in web development since 2020. Over the past few years, I have worked with multiple start-ups, including a career exploration app (GoPursue) and a travel hub web app (Todoloo). In 2022, I received my web programming cert through Harvard. Prior to this, I worked as a teacher for the past 10+ years. I have a wide range of experience and am most proficient with TypeScript/React, Python, Django, Next and various other frontend and backend tools.',
            },
            {
                  title: "Personal",
                  text: 'I live in DC with my girlfriend and two dachshunds. In my free time, I like to work on and listen to music, exercise, and explore the city.',
            }
      ];

      const dataEl = data.map(({ title, text }, index) => (
            <div className="card mb-auto mt-auto bg-dark bg-opacity-75 offset-1 col-10" key={index}>
                  <div className="card-body text-white">
                        <h3 className="">{title}</h3>
                        <p className="card-text fs-5">{text}</p>
                  </div>
            </div>
      ))

      return <About>{dataEl}</About>;
}
export default AboutText;
