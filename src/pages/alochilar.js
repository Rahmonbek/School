import React, { Component } from 'react'
import style from '../css/alochilar.module.css'
import img from '../img/pl.jpg'
import styles from "../css/maktabHayoti.module.css";
import { DownCircleOutlined } from "@ant-design/icons";
import { Carousel } from 'antd';
import { Container, Row, Col, Image } from "react-bootstrap";
import axios from 'axios';
import Aos from 'aos';
import school1 from "../img/school1.jpg";
import school2 from "../img/school2.jpg";
import school3 from "../img/school3.jpg";
import school4 from "../img/school4.jpg";
import school5 from "../img/school5.jpg";
import { getPupils, getExcellent } from '../host/Config';
import { idMaktab, url,  } from '../host/Host';


export default class Alochilar extends Component{
    state={
        loader:true,
        excellent:[],
        pupil:[],
        id:0,
        school:null,
          }
         
    constructor(props) {
        super(props);
        this.state = { data: [] };
       
      }

      getExcellents=()=>{
        axios.get(`${url}/excellent/${idMaktab}/`).then(res=>{
            this.setState({
                excellent :res.data,
          loader:false,
            })
            console.log(res.data)
        })
      }

      getPupil=()=>{
        getPupils().then(res=>{
            this.setState({
               pupil:res.data
            })
            console.log(res.data)
        })
       
      }

      

    

      componentDidMount() {
     
        Aos.init({
          duration: 2000,
        });
        axios
          .get("http://maktab2.herokuapp.com/school-by-admin/137/")
          .then((res) => {
            this.setState({ data: res.data });
          });
        
         this.getExcellents() ;
         this.getPupil();
      }

      
    render(){
        const { data } = this.state;
        return(
<div>
            <div className={styles.headerSliderText}>
          <h3 style={{ fontFamily: "font", fontWeight: "900" }}>
            Maktab Hayoti
          </h3>
          <div className={styles.headerIcons}>
            <a href="#1">
              <DownCircleOutlined
                style={{ fontSize: "40px", color: "white" }}
                className={styles.headerIcon}
              />
            </a>
          </div>
        </div>
        <Carousel autoplay className={styles.sliderHeader}>
          <div>
            <Image
              src={
                data !== null && data.m_h_h1 !== null ? data.m_h_h1 : school1
              }
              className={styles.headerImage}
            />
          </div>
          <div>
            <Image
              src={
                data !== null && data.m_h_h2 !== null ? data.m_h_h2 : school1
              }
              className={styles.headerImage}
            />
          </div>
          <div>
            <Image
              src={
                data !== null && data.m_h_h3 !== null ? data.m_h_h3 : school3
              }
              className={styles.headerImage}
            />
          </div>
          <div>
            <Image
              src={
                data !== null && data.m_h_h4 !== null ? data.m_h_h4 : school4
              }
              className={styles.headerImage}
            />
          </div>
          <div>
            <Image
              src={
                data !== null && data.m_h_h5 !== null ? data.m_h_h5 : school5
              }
              className={styles.headerImage}
            />
          </div>
        </Carousel>
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

</div>
)
    }
}