import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./css/Heading.css";
import "./css/hover_css.css";

import Tooddler_data from "./Tooddler_data";
function Toddler() {
  const css_Default = "card-title aaa black_text";
  const [css1, setcss1] = useState(css_Default);
  const [css2, setcss2] = useState(css_Default);
  const [css3, setcss3] = useState(css_Default);
  const [css4, setcss4] = useState(css_Default + " aa");
  const [value, setvalue] = useState("");
  const p = (e) => {
    console.log(e.target.innerText);
    if (e.target.innerText === "Early Education") {
      setvalue("Early Education");
      setcss1(css_Default + " aa");
      setcss2(css_Default);
      setcss3(css_Default);
      setcss4(css_Default);
    } else if (e.target.innerText === "Growth Milestone") {
      setvalue("Growth Milestone");
      setcss2(css_Default + " aa");
      setcss1(css_Default);
      setcss3(css_Default);
      setcss4(css_Default);
    } else if (e.target.innerText === "Food Chart") {
      setvalue("Food Chart");
      setcss3(css_Default + " aa");
      setcss2(css_Default);
      setcss1(css_Default);
      setcss4(css_Default);
    } else {
      setvalue("Health And Daily Care");
      setcss4(css_Default + " aa");
      setcss1(css_Default);
      setcss2(css_Default);
      setcss3(css_Default);
    }
  };
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-center">
        <div className="card m-2" style={{ width: 362 }}>
          <div className="card-body p-0">
            <Link className={css4} onClick={p}>
              Health And Daily Care
            </Link>
          </div>
        </div>

        <div className="card m-2" style={{ width: 362 }}>
          <div className="card-body p-0">
            <Link className={css3} onClick={p}>
              Food Chart
            </Link>
          </div>
        </div>

        <div className="card m-2" style={{ width: 362 }}>
          <div className="card-body p-0">
            <Link className={css2} onClick={p}>
              Growth Milestone
            </Link>
          </div>
        </div>
        <div className="card m-2" style={{ width: 362 }}>
          <div className="card-body p-0">
            <Link className={css1} onClick={p}>
              Early Education
            </Link>
          </div>
        </div>
      </div>
      <Tooddler_data name={value} />
    </div>
  );
}

export default Toddler;
