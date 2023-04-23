import React from "react";
import style from "./style.module.css";

const Logo = () => {
  return (
    <div>
      <a href="#.com">
        <h1>STRONGLY TYPED</h1>
        <p>A RESPONSIVE HTML5 SITE TEMPLATE. MANUFACTURED BY HTML5 UP.</p>
      </a>
      <div id={style.hr}>
        <hr />
        <hr />
      </div>
    </div>
  );
};

export default Logo;
