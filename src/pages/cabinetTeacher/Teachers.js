import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "../../css/TeacherCss/Students.module.css";
import { getStaffBySchool } from "../../host/Config";
import yuksak from "../../img/alish.png";
import gimnastika from "../../img/rayhon.jpeg";

export default class Teachers extends Component {
  state = {
    teachers: [],
  };
  getStaffs = () => {
    getStaffBySchool().then((res) => {
      this.setState({ teachers: res.data });
    });
  };
  componentDidMount() {
    this.getStaffs();
  }
  render() {
    return (
      <div className={style.yutuq}>
        <Container>
          <Row>
            {this.state.teachers !== []
              ? this.state.teachers.map((item) => {
                  return (
                    <Col style={{ marginTop: "20px" }} lg={4} md={6} sm={12}>
                      <div className="card">
                        <Link to="chat">
                          <img alt="" src={item.image} className={style.image} />
                        </Link>
                        <div className={style.cardBody}>
                          <h3>{item.full_name}</h3>
                          <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", height: "100%" }}>
                            <p style={{ marginTop: "10px" }}>
                              <b>Soha: </b>
                              {item.position}
                            </p>
                            <p style={{ marginTop: "-10px" }}>
                              <b>Telefon raqam: </b>
                              {item.phone}
                            </p>
                            <p style={{ marginTop: "-10px" }}>
                              <b>Mutaxassisligi: </b>
                              {item.speciality}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Col>
                  );
                })
              : ""}
          </Row>
        </Container>
      </div>
    );
  }
}
