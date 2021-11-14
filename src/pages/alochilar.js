import React, { Component } from "react";
import style from "../css/alochilar.module.css";
import img from "../img/pl.jpg";
import styles from "../css/maktabHayoti.module.css";
import { DownCircleOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import { Container, Row, Col, Image } from "react-bootstrap";
import axios from "axios";
import school1 from "../img/school1.jpg";
import school2 from "../img/school2.jpg";
import school3 from "../img/school3.jpg";
import school4 from "../img/school4.jpg";
import school5 from "../img/school5.jpg";
import Aos from "aos";
import { getExcellent, getPupil } from "../host/Config";
import { url, user, idMaktab } from "../host/Host";
import { FadeLoader } from "react-spinners";
import Global from "../host/Global";

export default class Alochilar extends Component {
  state = {
    loader: true,
    excellent: [],
    pupil: [],
    pupils: [],
    data: null,
    id: 0,
    school: null,
    class: [],
  };
  getSchool=()=>{
    axios.get(`${url}/school-by-admin/${user}/`).then((res) => {
      this.setState({ data: res.data });
      axios.get(`${url}/excellent/`).then((res1) => {
       var v=[]
       res1.data.map(item=>{
         if(item.school===res.data.id){
           v.push(item)
         }
       })
       
        this.setState({ excellent: v });
        setInterval(() => {
          this.setState({
            loader: false,
          });
        }, 2000);
     
      });
    });
  
   
  
  }
    componentDidMount() {
      Aos.init({
        duration: 2000,
      });
      // this.getExcellents();
      this.getSchool();
    }
  
  render() {
    const { data } = this.state;
    return (
      <div>
        {this.state.loader ? (
          <div className="loaderT">
            <FadeLoader color="blue" loading={this.state.loader} size={120} />
          </div>
        ) : (
          <>
            <div className={styles.headerSliderText}>
              <h3 style={{ fontFamily: "font", fontWeight: "900" }}>
                Maktab A'lochilari
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
                    data !== null && data.m_h_h1 !== null
                      ? data.m_h_h1
                      : school1
                  }
                  className={styles.headerImage}
                />
              </div>
              <div>
                <Image
                  src={
                    data !== null && data.m_h_h2 !== null
                      ? data.m_h_h2
                      : school1
                  }
                  className={styles.headerImage}
                />
              </div>
              <div>
                <Image
                  src={
                    data !== null && data.m_h_h3 !== null
                      ? data.m_h_h3
                      : school3
                  }
                  className={styles.headerImage}
                />
              </div>
              <div>
                <Image
                  src={
                    data !== null && data.m_h_h4 !== null
                      ? data.m_h_h4
                      : school4
                  }
                  className={styles.headerImage}
                />
              </div>
              <div>
                <Image
                  src={
                    data !== null && data.m_h_h5 !== null
                      ? data.m_h_h5
                      : school5
                  }
                  className={styles.headerImage}
                />
              </div>
            </Carousel>

            <div style={{ width: "100%", backgroundColor: "white" }}>
              <br />
              <br />
              <br />
              <br />
              <h1 className={style.sarlavha}>A'lochilar doskasi</h1>
              <div className={style.line}></div>
              <div className={style.tana}>
                {this.state.excellent.length !== 0
                  ? this.state.excellent.map((item) => {
                     
                      return (
                        <div className={style.card}>
                          <div className={style.image}>
                            <img
                              src={item.image !== null ? item.image : school2}
                              alt=""
                            />
                          </div>
                          <div className={style.content}  style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
                            <p>
                              <b>O'quvchi: </b> {item.full_name}
                            </p>
                          
                            <p>
                              <b>Sinfi: </b>
                              {item.clas}
                            </p>
                            <p>
                              <b>Tug'ilgan sanasi: </b> {item.birth_day}
                            </p>
                            {/* <div style={{ cursor: "pointer" }}>Baholarini ko'rish</div> */}
                          </div>
                        </div>
                      );
                    })
                  : ""}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}
