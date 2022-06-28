import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./BoshSahifaDavomi.module.css";
import { ButtonWrapper } from "./StyleBoshSahifa";
import school1 from "../img/school1.jpg";
import ustoz1 from "../img/ustoz1.jpg";
import ustoz2 from "../img/ustoz2.jpg";
import school2 from "../img/school2.jpg";
import school3 from "../img/school3.jpg";
import school4 from "../img/school4.jpg";
import school5 from "../img/school5.jpg";
import axios from "axios";
import Aos from "aos";
import styles from "../css/alochilar.module.css";

import { getExcellent, getPupil } from "../host/Config";

import { idMaktab, url, user } from "../host/Host";
import Global from "../host/Global";
import { Image } from "antd";

export default class BoshSahifaDavomi extends Component {
    state = {
        loader: true,
        excellent: [],
        pupil: [],
        pupils: [],
        data: null,
        id: 0,
        school: null,
        class: [],
        teachers: [],
    };

    getExcellents = () => {
        axios.get(`${url}/school-by-admin/${user}/`).then((res) => {
            this.setState({ data: res.data });
            axios.get(`${url}/excellent/`).then((res1) => {
                var v = [];
                res1.data.map((item) => {
                    if (item.school === res.data.id) {
                        v.push(item);
                    }
                });

                this.setState({ excellent: v.slice(0, 2) });
                setInterval(() => {
                    this.setState({
                        loader: false,
                    });
                }, 2000);
            });
        });
    };

    componentDidMount() {
        axios
            .get(`${url}/active-teachers/?school=${idMaktab}`)
            .then((res) => {
                this.setState({ teachers: res.data });
            })
            .catch((err) => console.log(err));
        Aos.init({
            duration: 2000,
        });
        this.getExcellents();
    }

    render() {
        return (
            <div>
                <div className={style.container}>
                    <Container>
                        <Row>
                            <Col xs={0} sm={0} md={6} lg={6}></Col>
                            <Col xs={12} sm={12} md={6} lg={6}>
                                <h1>Qabul uchun ariza topshiring</h1>
                                <h3>Kuzgi qabul jarayoni hozir mavjud</h3>
                                <p>
                                    Biz o'quvchilarimizga shunchaki ta'lim beribgina qolmasdan, shu bilan birga ularga
                                    kelajakda o'z o'rnilarini topishlariga yordam beramiz.
                                </p>
                                <ButtonWrapper>
                                    <button className="btn drawBorder">
                                        <a
                                            style={{ textDecoration: "none", color: "white" }}
                                            href="https://my.maktab.uz/"
                                            target="_blank"
                                        >
                                            Hoziroq ariza topshiring
                                        </a>
                                    </button>
                                </ButtonWrapper>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container fluid style={{ backgroundColor: "white" }}>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <div className={style.tana}>
                                <br />
                                <br />
                                <h1 className={style.sarlavha} style={{ fontSize: "28px" }}>
                                    A'lochilar doskasi
                                </h1>

                                <Container className={style.back}>
                                    {/* <div className={style.line}></div> */}
                                    <br />

                                    <Row>
                                        {this.state.excellent.length !== 0
                                            ? this.state.excellent.map((item) => {
                                                  return (
                                                      <Col lg={6} md={6} sm={12}>
                                                          <div className={style.card} style={{ marginTop: "10px" }}>
                                                              <div className={style.qizil}>Bizning faxrimiz</div>
                                                              <img
                                                                  src={item.image !== null ? item.image : school2}
                                                                  alt=""
                                                              />
                                                              <p
                                                                  style={{
                                                                      fontSize: "20px",
                                                                      textAlign: "center",
                                                                      marginTop: "20px",
                                                                      fontWeight: "bold",
                                                                      color: "black",
                                                                  }}
                                                              >
                                                                  {item.full_name}
                                                              </p>
                                                              <p
                                                                  style={{
                                                                      fontSize: "18px",
                                                                      color: "black",
                                                                      textAlign: "center",
                                                                  }}
                                                              >
                                                                  {item.clas}
                                                              </p>
                                                          </div>
                                                      </Col>
                                                  );
                                              })
                                            : ""}
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <div className={style.tana}>
                                <br />
                                <br />
                                <h1 className={style.sarlavha} style={{ fontSize: "28px" }}>
                                    O'qituvchilar doskasi
                                </h1>
                                <Container className={style.back}>
                                    <br />
                                    <Row>
                                        {this.state.teachers.length !== 0
                                            ? this.state.teachers.map((item, key) => {
                                                  return (
                                                      <Col lg={12} md={12} sm={12}>
                                                          <div style={{ padding: "10px" }}>
                                                              <div className={style.card}>
                                                                  <div className={style.bayroq}></div>
                                                                  <Row style={{ minHeight: 250 }}>
                                                                      <Col lg={5}>
                                                                          <img
                                                                              src={
                                                                                  item.imageURL !== ""
                                                                                      ? url + item.imageURL
                                                                                      : ustoz1
                                                                              }
                                                                              alt=""
                                                                              className={style.antImage}
                                                                          />
                                                                      </Col>
                                                                      <Col lg={7} style={{ height: "100%" }}>
                                                                          <p
                                                                              style={{
                                                                                  fontSize: "20px",
                                                                                  marginTop: "20px",
                                                                                  marginLeft: "20px",
                                                                                  fontWeight: "bold",
                                                                                  color: "black",
                                                                                  width: "80%",
                                                                              }}
                                                                          >
                                                                              F.I.Sh.: {item.full_name}
                                                                          </p>

                                                                          <p
                                                                              style={{
                                                                                  fontSize: "18px",
                                                                                  color: "black",
                                                                                  marginLeft: "20px",
                                                                              }}
                                                                          >
                                                                              Lavozimi: {item.position}
                                                                          </p>
                                                                          <p
                                                                              style={{
                                                                                  fontSize: "18px",
                                                                                  color: "black",
                                                                                  marginLeft: "20px",
                                                                              }}
                                                                          >
                                                                              Telefon raqami: {item.phone}
                                                                          </p>
                                                                          <p
                                                                              style={{
                                                                                  fontSize: "18px",
                                                                                  color: "black",
                                                                                  marginLeft: "20px",
                                                                              }}
                                                                          >
                                                                              Qo'shimcha: {item.description}
                                                                          </p>
                                                                      </Col>
                                                                  </Row>
                                                              </div>
                                                          </div>
                                                      </Col>
                                                  );
                                              })
                                            : ""}
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
