import React from "react";
import style from "./style.module.css";
import img1 from "../imges/stimg1.jpg";
import img2 from "../imges/stimg2.jpg";
import img3 from "../imges/stimg3.jpg";

const Img = () => {
  return (
    <div>
      <div id={style.para}>
        <p>
          GENTLEMEN, BEHOLD! THIS IS <b>STRONGLY TYPED!</b>{" "}
        </p>
      </div>
      <div id={style.imges}>
        <img className={style.imgs} src={img1} alt="loading" />
        <img className={style.imgs} src={img2} alt="loading" />
        <img className={style.imgs} src={img3} alt="loading" />
      </div>
    </div>
  );
};

export default Img;
