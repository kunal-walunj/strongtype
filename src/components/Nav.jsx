import React from "react";
import style from "./style.module.css";

const Nav = () => {
  return (
    <div>
      <nav>
        <ul id={style.nav}>
          <li>
            <a href="#.com" className={style.icon}>
            <i class="fa-solid fa-house-chimney"></i>
              <span>INTRODUCTION</span>
            </a>
          </li>
          <li>
            <a href="#.com" className={style.icon}>
            <i class="fa-solid fa-chart-column"></i> 
              <span> DROWPDOWN</span>
            </a>
          </li>
          <li>
            <a href="#.com" className={style.icon}>
              <i className="fa-solid fa-gear"></i>
              <span>LEFT SIDEBAR</span>
            </a>
          </li>
          <li>
            <a href="#.com" className={style.icon}>
            <i class="fa-solid fa-repeat"></i>
              <span>RIGHT SIDEBAR</span>
            </a>
          </li>
          <li>
            <a href="#.com" className={style.icon}>
              <i className="fa-sharp fa-solid fa-star"></i>
              <span>NO SIDEBAR</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
