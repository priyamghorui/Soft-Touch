import "./css/Heading.css";
import about_pic from "./photos/about.jpg";
function AboutUs() {
  return (
      <div>
    <div className="qq">
      <div className="d-flex flex-wrap flex-column align-items-center justify-content-center center_about">
        <h1>@ Soft-Touch</h1>
        <p>
          It is a Organizarion to make people aware about all details regarding
          during and after pregnancy.
        </p>
      </div>

      <img src={about_pic} alt="" className="w-100 about_pic_position" />
      </div>
    </div>
  );
}

export default AboutUs;
