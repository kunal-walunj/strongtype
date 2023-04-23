import React from "react";
import style from "./style.module.css";

const Banner = () => {
  return (
    <section id={style.imgsec}>
      <div id={style.banner}>
        <p>
          USE THIS SPACE FOR <strong>PROFOUND THOUGHTS</strong> . OR AN <br />{" "}
          ENORMOUS AD. WHATEVER
        </p>
      </div>
    </section>
  );
};

export default Banner;
