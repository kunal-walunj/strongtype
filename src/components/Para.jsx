import React from "react";
import style from "./style.module.css";

const Para = () => {
  return (
    <div id={style.paragraphs}>
      <div className={style.paragraph1}>
        <h3>OKAY, SO WHAT IS THIS?</h3>
        <h3>NICE! WHAT IS HTML5 UP?</h3>
        <h3>WHAT'S THIS BUILT WITH?</h3>
      </div>

      <div className={style.paragraph2}>
        <span>
          This is <strong>Strongly Typed</strong> , a free, fully responsive
          site template by <a href="#.com">HTML5 UP</a>. Free for personal and
          commercial use under the <a href="#.com">CCA 3.0 license.</a>
        </span>

        <span>
          <a href="#.com">HTML5 UP</a> is a side project of{" "}
          <a href="#.com">AJs</a> = me. I started it as a way to both test my
          responsive tools and sharpen up my coding and design skills a bit.
        </span>

        <span>
          <strong>Responsive Tools</strong> is a simple set of tools for
          building responsive sites and apps. All of my templates at{" "}
          <a href="#.com">HTML5 UP</a> are built using these tools.
        </span>
      </div>
      <div id={style.button}>
        <a href="#.com">
          <i class="fa-solid fa-file"></i>TELL ME MORE
        </a>
      </div>
    </div>
  );
};

export default Para;
