import React from 'react';
import Img from '../components/Img';
import Para from '../components/Para';
import style from "../components/style.module.css"; 

const Section = () => {
  return (
    <div id={style.section_block}>
        <Img/>
        <Para/>
    </div>
  )
}

export default Section