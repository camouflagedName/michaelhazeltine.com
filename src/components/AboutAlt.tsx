import pic from '../util/images/main_pic(cropped).jpg';
//const pic = require('../util/images/main_pic(cropped).jpg');

function About({ children }: { children: JSX.Element[] }) {

  return (
    <div className="d-flex flex-column justify-content-center">
      <h1 className="app-text bg-dark text-center py-2 mb-3">Michael Hazeltine</h1>
      <div className="card border-0 bg-transparent mb-auto mt-auto">
        <div className="text-center shadow-md">
          <img className="card-img" src={pic} style={{ maxWidth: '400px', maxHeight: 'auto' }} alt="main" />
        </div>
        <div className="card-body">
          <div className="row my-2">
            {children[0]}
          </div>
          <div className="row my-3">
            {children[1]}
          </div>
          <div className="row mt-3">
            {children[2]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
