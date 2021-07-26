import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import style from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTelegram, faYoutube } from '@fortawesome/free-brands-svg-icons'


export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className={style.container}>
                    <Row>
                        <Col xs={12} sm={6} md={3} lg={3} className={style.logoUchun}>
                            <h2>Maktab logosi</h2>
                            <p>Alisher Navoiy ko'chasi,<br/> Yunusobod tumani, Tashkent</p>
                            <p style={{marginBottom: '0'}}>schoolname@gmail.com</p>
                            <p>+998 90 256 89 87</p>  
                        </Col>
                        <Col xs={12} sm={6} md={3} lg={3} className={style.ulLi}>
                            <h2>Bizning maktab</h2>
                            <ul>
                                <li><a href='#'>Qulay xizmatlar</a></li>
                                <li><a href='#'>O'qituvchilar</a></li>
                                <li><a href='#'>Maktab xavfsizligi</a></li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={6} md={3} lg={3} className={style.ulLi}>
                            <h2>Maktabdagi hayot</h2>
                            <ul>
                                <li><a href='#'>Oshxona</a></li>
                                <li><a href='#'>Yotoqxona</a></li>
                                <li><a href='#'>Maktab tadbirlari</a></li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={6} md={3} lg={3} className={style.ulLi}>
                            <h2>To'garaklar</h2>
                            <ul>
                                <li><a href='#'>Matematika</a></li>
                                <li><a href='#'>Kimyo</a></li>
                                <li><a href='#'>Dasturlash</a></li>
                            </ul>
                        </Col>
                    </Row>
                </div>
              </div>
        )
    }
}
