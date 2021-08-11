import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./css/Heading.css";
import "./css/hover_css.css";

import PregnancyTips_data from "./PregnancyTips_data";
function PregnancyTips() {
  const css_Default = "card-title aaa black_text";
  const [css1, setcss1] = useState(css_Default);
  const [css2, setcss2] = useState(css_Default + " aa");
  const [value, setvalue] = useState("");
  const p = (e) => {
    console.log(e.target.innerText);
    if (e.target.innerText === "For Toddlers") {
      setvalue("For Toddlers");
      setcss1(css_Default + " aa");
      setcss2(css_Default);
    } else {
      setvalue("For babies");
      setcss2(css_Default + " aa");
      setcss1(css_Default);
    }
  };
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-center">
        <div className="card m-2" style={{ width: 362 }}>
          <div className="card-body p-0">
            <Link className={css2} onClick={p}>
              For babies
            </Link>
          </div>
        </div>
        <div className="card m-2" style={{ width: 362 }}>
          <div className="card-body p-0">
            <Link className={css1} onClick={p}>
              For Toddlers
            </Link>
          </div>
        </div>
      </div>
      <PregnancyTips_data name={value} />
    </div>
  );
}

export default PregnancyTips;
