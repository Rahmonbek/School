import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "../../css/TeacherCss/Students.module.css";
import yuksak from "../../img/alish.png";
import gimnastika from "../../img/rayhon.jpeg";

export default class Teachers extends Component {
  render() {
    return (
      <div className={style.yutuq}>
        <Container>
          <Row>
            <Col style={{ marginTop: "20px" }} lg={4} md={6} sm={12}>
              <div className="card">
                <Link to="chat">
                  <img alt="" src={yuksak} className={style.image} />
                </Link>
                <div className={style.cardBody}>
                  <h3>Davronov Alisher Diyor o'g'li</h3>
                  <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", height: "100%" }}>
                    <p>
                      <b>Tug'ilgan sana: </b>12.08.1994
                    </p>
                    <p style={{ marginTop: "-10px" }}>
                      <b>Millati: </b>o'zbek
                    </p>

                    <p style={{ marginTop: "-10px" }}>
                      <b>Fan o'qituvchiligi: </b>Matematika
                    </p>
                    <p style={{ marginTop: "-10px" }}>
                      <b>Telefon raqam: </b>
                      <a href="tel:+998930830372">+998930820372</a>
                    </p>
                    <p style={{ marginTop: "-10px" }}>
                      <b>ilmiy darajasi: </b>Oliy toifa
                    </p>
                  </div>
                </div>
              </div>
            </Col>

            <Col style={{ marginTop: "20px" }} lg={4} md={6} sm={12}>
              <div className="card">
                <Link to="chat">
                  <img alt="" src={gimnastika} className={style.image} />
                </Link>
                <div className={style.cardBody}>
                  <h3>Tohirova Rayhon G'olib qizi</h3>
                  <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", height: "100%" }}>
                    <p>
                      <b>Tug'ilgan sana: </b>12.08.1994
                    </p>
                    <p style={{ marginTop: "-10px" }}>
                      <b>Millati: </b>o'zbek
                    </p>

                    <p style={{ marginTop: "-10px" }}>
                      <b>Fan o'qituvchiligi: </b>Matematika
                    </p>
                    <p style={{ marginTop: "-10px" }}>
                      <b>Telefon raqam: </b>
                      <a href="tel:+998930830372">+998930820372</a>
                    </p>
                    <p style={{ marginTop: "-10px" }}>
                      <b>ilmiy darajasi: </b>Oliy toifa
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col style={{ marginTop: "20px" }} lg={4} md={6} sm={12}>
              <div className="card">
                <Link to="chat">
                  <img alt="" src={yuksak} className={style.image} />
                </Link>
                <div className={style.cardBody}>
                  <h3>Davronov Alisher Diyor o'g'li</h3>
                  <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", height: "100%" }}>
                    <p>
                      <b>Tug'ilgan sana: </b>12.08.1990
                    </p>
                    <p style={{ marginTop: "-10px" }}>
                      <b>Millati: </b>o'zbek
                    </p>

                    <p style={{ marginTop: "-10px" }}>
                      <b>Fan o'qituvchiligi: </b>Matematika
                    </p>
                    <p style={{ marginTop: "-10px" }}>
                      <b>Telefon raqam: </b>
                      <a href="tel:+998930830372">+998930820372</a>
                    </p>
                    <p style={{ marginTop: "-10px" }}>
                      <b>ilmiy darajasi: </b>Oliy toifa
                    </p>
                  </div>
                </div>
              </div>
            </Col>

            <Col style={{ marginTop: "20px" }} lg={4} md={6} sm={12}>
              <div className="card">
                <Link to="chat">
                  <img alt="" src={gimnastika} className={style.image} />
                </Link>
                <div className={style.cardBody}>
                  <h3>Tohirova Rayhon G'olib qizi</h3>
                  <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", height: "100%" }}>
                    <p>
                      <b>Tug'ilgan sana: </b>12.08.1970
                    </p>
                    <p style={{ marginTop: "-10px" }}>
                      <b>Millati: </b>o'zbek
                    </p>

                    <p style={{ marginTop: "-10px" }}>
                      <b>Fan o'qituvchiligi: </b>Matematika
                    </p>
                    <p style={{ marginTop: "-10px" }}>
                      <b>Telefon raqam: </b>
                      <a href="tel:+998930830372">+998930820372</a>
                    </p>
                    <p style={{ marginTop: "-10px" }}>
                      <b>ilmiy darajasi: </b>Oliy toifa
                    </p>
                  </div>
                </div>
              </div>
            </Col>

            <Col style={{ marginTop: "20px" }} lg={4} md={6} sm={12}>
              <div className="card">
                <Link to="chat">
                  <img alt="" src={yuksak} className={style.image} />
                </Link>
                <div className={style.cardBody}>
                  <h3>Davronov Alisher Diyor o'g'li</h3>
                  <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", height: "100%" }}>
                    <p>
                      <b>Tug'ilgan sana: </b>12.08.1985
                    </p>
                    <p style={{ marginTop: "-10px" }}>
                      <b>Millati: </b>o'zbek
                    </p>

                    <p style={{ marginTop: "-10px" }}>
                      <b>Fan o'qituvchiligi: </b>Matematika
                    </p>
                    <p style={{ marginTop: "-10px" }}>
                      <b>Telefon raqam: </b>
                      <a href="tel:+998930830372">+998930820372</a>
                    </p>
                    <p style={{ marginTop: "-10px" }}>
                      <b>ilmiy darajasi: </b>Oliy toifa
                    </p>
                  </div>
                </div>
              </div>
            </Col>

            <Col style={{ marginTop: "20px" }} lg={4} md={6} sm={12}>
              <div className="card">
                <Link to="chat">
                  <img alt="" src={gimnastika} className={style.image} />
                </Link>
                <div className={style.cardBody}>
                  <h3>Tohirova Rayhon G'olib qizi</h3>
                  <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", height: "100%" }}>
                    <p>
                      <b>Tug'ilgan sana: </b>12.08.1978
                    </p>
                    <p style={{ marginTop: "-10px" }}>
                      <b>Millati: </b>o'zbek
                    </p>

                    <p style={{ marginTop: "-10px" }}>
                      <b>Fan o'qituvchiligi: </b>Matematika
                    </p>
                    <p style={{ marginTop: "-10px" }}>
                      <b>Telefon raqam: </b>
                      <a href="tel:+998930830372">+998930820372</a>
                    </p>
                    <p style={{ marginTop: "-10px" }}>
                      <b>ilmiy darajasi: </b>Oliy toifa
                    </p>
                  </div>
                </div>
              </div>
            </Col>

            <Col style={{ marginTop: "20px" }} lg={4} md={6} sm={12}>
              <div className="card">
                <Link to="chat">
                  <img alt="" src={yuksak} className={style.image} />
                </Link>
                <div className={style.cardBody}>
                  <h3>Davronov Alisher Diyor o'g'li</h3>
                  <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", height: "100%" }}>
                    <p>
                      <b>Tug'ilgan sana: </b>12.08.1980
                    </p>
                    <p style={{ marginTop: "-10px" }}>
                      <b>Millati: </b>o'zbek
                    </p>

                    <p style={{ marginTop: "-10px" }}>
                      <b>Fan o'qituvchiligi: </b>Matematika
                    </p>
                    <p style={{ marginTop: "-10px" }}>
                      <b>Telefon raqam: </b>
                      <a href="tel:+998930830372">+998930820372</a>
                    </p>
                    <p style={{ marginTop: "-10px" }}>
                      <b>ilmiy darajasi: </b>Oliy toifa
                    </p>
                  </div>
                </div>
              </div>
            </Col>

            <Col style={{ marginTop: "20px" }} lg={4} md={6} sm={12}>
              <div className="card">
                <Link to="chat">
                  <img alt="" src={gimnastika} className={style.image} />
                </Link>
                <div className={style.cardBody}>
                  <h3>Tohirova Rayhon G'olib qizi</h3>
                  <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", height: "100%" }}>
                    <p>
                      <b>Tug'ilgan sana: </b>12.08.1995
                    </p>
                    <p style={{ marginTop: "-10px" }}>
                      <b>Millati: </b>o'zbek
                    </p>

                    <p style={{ marginTop: "-10px" }}>
                      <b>Fan o'qituvchiligi: </b>Matematika
                    </p>
                    <p style={{ marginTop: "-10px" }}>
                      <b>Telefon raqam: </b>
                      <a href="tel:+998930830372">+998930820372</a>
                    </p>
                    <p style={{ marginTop: "-10px" }}>
                      <b>ilmiy darajasi: </b>Oliy toifa
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
