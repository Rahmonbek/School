import React, { Component } from 'react';
import styles from '../css/maktabHayotiru.module.css'
import { Pannellum} from "pannellum-react";
import myImage from "../img/360.jpeg";


const PannellumReactRu = () => (
  <div className={styles.PannellumReactContainer}>
    <Pannellum
        className={styles.PannellumReact}
        width="100%"
        height="450px"
        image={myImage}
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        onLoad={() => {
            console.log("panorama loaded");
        }}
    >
   </Pannellum> 
   </div>
);

export default PannellumReactRu;