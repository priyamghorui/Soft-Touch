import "./css/Heading.css";
import about_pic from "./photos/about.jpg";
function Error(props) {
    console.log(props.location.pathname);
  return (
     <div>
<div>
    <h1 className="center_about">Sorry {props.location.pathname} page is not found</h1>
</div>
         <img src={about_pic} alt="" className="w-100"/>
     </div>
  );
}

export default Error;
