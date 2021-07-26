import React, { Component } from 'react'
import style from '../css/alochilar.module.css'
import img from '../img/pl.jpg'

export default class Alochilar extends Component{


    render(){
        return(
<div style={{width:"100%" ,backgroundColor:'white'}}>
<br/><br/><br/><br />
    <h1 className={style.sarlavha}>A'lochilar doskasi</h1>
<div className={style.line}></div>
<div className={style.tana}>
    
            <div className={style.card}>
                <div className={style.image}><img src={img}/></div>
                <div className={style.content}>
                    <p>Familiyasi:<b> Eshmatov</b></p>
                    <p>Ismi:<b> Toshmat</b></p>
                    <p>Otasining ismi:<b> G'ishmat o'g'li</b></p>
                    <p>Tug'ulgan sanasi: <b>01.01.2005</b></p>
                    <p>Sinfi: <b>10-B sinf</b></p>
                    <div style={{cursor:'pointer'}}>Baholarini ko'rish</div>
                </div>
            </div>
            <div className={style.card}>
                <div className={style.image}><img src={img}/></div>
                <div className={style.content}>
                    <p>Familiyasi:<b> Eshmatov</b></p>
                    <p>Ismi:<b> Toshmat</b></p>
                    <p>Otasining ismi:<b> G'ishmat o'g'li</b></p>
                    <p>Tug'ulgan sanasi: <b>01.01.2005</b></p>
                    <p>Sinfi: <b>10-B sinf</b></p>
                    <div style={{cursor:'pointer'}}>Baholarini ko'rish</div>
                </div>
            </div>
            <div className={style.card}>
                <div className={style.image}><img src={img}/></div>
                <div className={style.content}>
                    <p>Familiyasi:<b> Eshmatov</b></p>
                    <p>Ismi:<b> Toshmat</b></p>
                    <p>Otasining ismi:<b> G'ishmat o'g'li</b></p>
                    <p>Tug'ulgan sanasi: <b>01.01.2005</b></p>
                    <p>Sinfi: <b>10-B sinf</b></p>
                    <div style={{cursor:'pointer'}}>Baholarini ko'rish</div>
                </div>
            </div>
            <div className={style.card}>
                <div className={style.image}><img src={img}/></div>
                <div className={style.content}>
                    <p>Familiyasi:<b> Eshmatov</b></p>
                    <p>Ismi:<b> Toshmat</b></p>
                    <p>Otasining ismi:<b> G'ishmat o'g'li</b></p>
                    <p>Tug'ulgan sanasi: <b>01.01.2005</b></p>
                    <p>Sinfi: <b>10-B sinf</b></p>
                    <div style={{cursor:'pointer'}}>Baholarini ko'rish</div>
                </div>
            </div>
            <div className={style.card}>
                <div className={style.image}><img src={img}/></div>
                <div className={style.content}>
                    <p>Familiyasi:<b> Eshmatov</b></p>
                    <p>Ismi:<b> Toshmat</b></p>
                    <p>Otasining ismi:<b> G'ishmat o'g'li</b></p>
                    <p>Tug'ulgan sanasi: <b>01.01.2005</b></p>
                    <p>Sinfi: <b>10-B sinf</b></p>
                    <div style={{cursor:'pointer'}}>Baholarini ko'rish</div>
                </div>
            </div>
</div>
</div>

        )
    }
}