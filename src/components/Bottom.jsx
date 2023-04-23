import React from "react";
import style from "./style.module.css";

const Bottom = () => {
  return (
    <div id={style.foot}>
      <div id={style.heading}>
        <h2>
          QUESTIONS OR COMMENTS? <strong> GET IN TOUCH:</strong>{" "}
        </h2>
      </div>
      <div id={style.forminfo}>
        <div id={style.form}>
          <div id={style.inpall}>
            <input id={style.inp1} type="text" placeholder="name" />
            <input id={style.inp2} type="email" placeholder="email" />
          </div>
          <div id={style.tarea}>
            <textarea id={style.inp3} placeholder="message"></textarea>
          </div>
          <div id={style.buttonfoot}>
            <a href="#.com">
            <i className= "fa-solid fa-envelope"></i>SEND MESSAGE
            </a>
          </div>
        </div>
        <div id={style.info}>
          <p>
            Erat lorem ipsum veroeros consequat magna tempus lorem ipsum
            consequat Phaselamet mollis tortor congue. Sed quis mauris sit amet
            magna accumsan tristique. Curabitur leo nibh, rutrum eu malesuada.
          </p>
          <div id={style.list}>
            <div className={style.listall}>
              <ul type="none">
                <li>
                <i class="fa-solid fa-house-chimney"></i>
                  <a href="#.com">Nashville,TN 00000 USA</a>
                </li>
                <li>
                <i className="fa-solid fa-phone-flip"></i>
                  <a href="#.com"> (000) 000-0000</a>
                </li>
                <li>
                <i className= "fa-solid fa-envelope"></i>
                  <a href="#.com"> info@untitled.tld</a>
                </li>
              </ul>
            </div>

            <div className={style.listall}>
              <ul type="none">
                <li>
                <i className="fa-brands fa-twitter"></i>
                  <a href="#.com"> @untitled</a>
                </li>
                <li>
                <i className="fa-brands fa-instagram"></i>
                  <a href="#.com"> instagram.com/untitled</a>
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-star"></i>
                  <a href="#.com">dribbble.com/untitled</a>
                </li>
                <li>
                <i className="fa-brands fa-facebook-f"></i>
                  <a href="#.com"> facebook.com/untitled</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id={style.end}>
        <span>
          © Untitled. All rights reserved. <span>|</span>
        </span>
        <span>
          Design: <a href="#.com">HTML5 UP </a> <span>|</span>
        </span>
        <span>
          Demo images: <a href="#.com">regularjane </a>
        </span>
      </div>
    </div>
  );
};
export default Bottom;
