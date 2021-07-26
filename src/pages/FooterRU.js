import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import style from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTelegram, faYoutube } from '@fortawesome/free-brands-svg-icons'


export default class FooterRU extends Component {
    render() {
        return (
            <div>
                <div className={style.container}>
                    <Row>
                        <Col xs={12} sm={6} md={3} lg={3} className={style.logoUchun}>
                            <h2>Логотип школы</h2>
                            <p>Улица Алишера Навои,<br/> Юнусабадский район, Ташкент</p>
                            <p style={{marginBottom: '0'}}>schoolname@gmail.com</p>
                            <p>+998 90 256 89 87</p>  
                        </Col>
                        <Col xs={12} sm={6} md={3} lg={3} className={style.ulLi}>
                            <h2>Наша школа</h2>
                            <ul>
                                <li><a href='#'>Удобные сервисы</a></li>
                                <li><a href='#'>Учителя</a></li>
                                <li><a href='#'>Безопасность школы</a></li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={6} md={3} lg={3} className={style.ulLi}>
                            <h2>Школьная жизнь</h2>
                            <ul>
                                <li><a href='#'>Kухня</a></li>
                                <li><a href='#'>Cпальная комната</a></li>
                                <li><a href='#'>Школьные мероприятия</a></li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={6} md={3} lg={3} className={style.ulLi}>
                            <h2>Дополнительные уроки</h2>
                            <ul>
                                <li><a href='#'>Математика</a></li>
                                <li><a href='#'>Химия</a></li>
                                <li><a href='#'>Программирование</a></li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
