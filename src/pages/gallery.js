import React, { Component } from "react";
import style from "../css/gallery.module.css"
import img1 from "../img/b1.JPG"
import img2 from "../img/b2.jpg"
import img3 from "../img/b3.jpg"
import img4 from "../img/b4.jpg"
import img5 from "../img/b5.jpg"
import img6 from "../img/b6.jpg"
import img7 from "../img/b7.png"
export default class Gallery extends Component{


render(){
    
return(
    <div className={style.mat}>
           <br/><br/><br/>
        <div className={style.header}>
    <div className={style.parda}>
        <div className={style.sarlavha}>
            <h2>Bizning Fotogalareya</h2>
            <h1>Maktabimiz hayotidan fotolavxalar</h1>
        </div>
        <div className={style.cl}></div>
    </div>
        </div>
        <div className={style.gal}>
        <div className={style.bor}>
 <div className={style.rasm}> <img src={img1} /></div>
        </div>
        <div className={style.bor}>
 <div className={style.rasm}> <img src={img2} /></div>
        </div>
        <div className={style.bor}>
 <div className={style.rasm}> <img src={img3} /></div>
        </div>
        <div className={style.bor}>
 <div className={style.rasm}> <img src={img4} /></div>
        </div>
        <div className={style.bor}>
 <div className={style.rasm}> <img src={img5} /></div>
        </div>
        <div className={style.bor}>
 <div className={style.rasm}> <img src={img6} /></div>
        </div>
        <div className={style.bor}>
 <div className={style.rasm}> <img src={img7} /></div>
        </div>
        </div>
    </div>    
)
}
}