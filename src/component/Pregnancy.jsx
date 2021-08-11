import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./css/Heading.css";
import "./css/hover_css.css";
import Pregnancy_data from "./Pregnancy_data";
function Pregnancy() {
  const css_Default = "card-title aaa black_text";
  const [value, setvalue] = useState("");
  const [css1, setcss1] = useState(css_Default);
  const [css2, setcss2] = useState(css_Default);
  const [css3, setcss3] = useState(css_Default + " aa");

  const p = (e) => {
    if (e.target.innerText === "Third Trimester (24 to 40 Weeks)") {
      setvalue("Third Trimester (24 to 40 Weeks)");
      setcss1(css_Default + " aa");
      setcss2(css_Default);
      setcss3(css_Default);
    } else if (e.target.innerText === "Second Trimester (12 to 24 Weeks)") {
      setvalue("Second Trimester (12 to 24 Weeks)");
      setcss2(css_Default + " aa");
      setcss3(css_Default);
      setcss1(css_Default);
    } else {
      setvalue("First Trimester (Conception to 12 Weeks)");
      setcss3(css_Default + " aa");
      setcss1(css_Default);
      setcss2(css_Default);
    }
  };
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-center">
        <div className="card m-2" style={{ width: 362 }}>
          <div className="card-body p-0 nav-item ${}">
            <Link className={css3} onClick={p}>
              First Trimester (Conception to 12 Weeks)
            </Link>
          </div>
        </div>
        <div className="card m-2" style={{ width: 362 }}>
          <div className="card-body p-0">
            <Link className={css2} onClick={p}>
              Second Trimester (12 to 24 Weeks)
            </Link>
          </div>
        </div>

        <div className="card m-2" style={{ width: 362 }}>
          <div className="card-body p-0">
            <Link className={css1} onClick={p}>
              Third Trimester (24 to 40 Weeks)
            </Link>
          </div>
        </div>
      </div>
      <Pregnancy_data name={value} />
    </div>
  );
}

export default Pregnancy;
