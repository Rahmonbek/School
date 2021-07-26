import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import style from './MaktabTadbirlari.module.css'
import rasm1 from '../img/11.jpg'
import rasm2 from '../img/12.jpg'
import rasm3 from '../img/13.jpg'
import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export default class MaktabTadbirlari extends Component {
    render() {
        return (
            <div>
                <div className={style.container}>
                    <h2>Maktab tadbirlari</h2>
                    <Row style={{textAlign: 'center'}}>
                        <Col xs={12} sm={12} md={4} lg={4} style={{marginTop: '15px'}}>
                            <div className={style.flipBox}>
                                <div class={style.flipBoxInner}>
                                    <div class={style.flipBoxFront}>
                                        <img src={rasm1} alt="Paris" />
                                    </div>
                                    <div className={style.flipBoxBack}>
                                        <p>Moliya va investitsiya</p>
                                    </div>
                                </div>
                            </div>
                            <Row className={style.map}>
                                <Col xs={2} sm={2} md={2} lg={2}>
                                    <h1>17</h1>
                                    <p>JUN</p>
                                </Col>
                                <Col xs={10} sm={10} md={10} lg={10}>
                                    <h3>Moliya va investitsiya</h3>
                                    <div className={style.innerMap}>
                                        <FontAwesomeIcon className={style.redIcon1} icon={faClock} />
                                        <span>1.00pm-2.00pm</span>
                                    </div>
                                    <div className={style.innerMap}>
                                        <FontAwesomeIcon className={style.redIcon2} icon={faMapMarkerAlt} />
                                        <span>Kingster Grand Hall</span>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} style={{marginTop: '15px'}}>
                            <div className={style.flipBox}>
                                <div class={style.flipBoxInner}>
                                    <div class={style.flipBoxFront}>
                                        <img src={rasm2} alt="Paris" />
                                    </div>
                                    <div className={style.flipBoxBack}>
                                        <p>Moliya va investitsiya</p>
                                    </div>
                                </div>
                            </div>
                            <Row className={style.map}>
                                <Col xs={2} sm={2} md={2} lg={2}>
                                    <h1>16</h1>
                                    <p>FEB</p>
                                </Col>
                                <Col xs={10} sm={10} md={10} lg={10}>
                                    <h3>Moliya va investitsiya</h3>
                                    <div className={style.innerMap}>
                                        <FontAwesomeIcon className={style.redIcon1} icon={faClock} />
                                        <span>1.00pm-2.00pm</span>
                                    </div>
                                    <div className={style.innerMap}>
                                        <FontAwesomeIcon className={style.redIcon2} icon={faMapMarkerAlt} />
                                        <span>Kingster Grand Hall</span>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} style={{marginTop: '15px'}}>
                            <div className={style.flipBox}>
                                <div class={style.flipBoxInner}>
                                    <div class={style.flipBoxFront}>
                                        <img src={rasm3} alt="Paris" />
                                    </div>
                                    <div className={style.flipBoxBack}>
                                        <p>Moliya va investitsiya</p>
                                    </div>
                                </div>
                            </div>
                            <Row className={style.map}>
                                <Col xs={2} sm={2} md={2} lg={2}>
                                    <h1>08</h1>
                                    <p>DEC</p>
                                </Col>
                                <Col xs={10} sm={10} md={10} lg={10}>
                                    <h3>Moliya va investitsiya</h3>
                                    <div className={style.innerMap}>
                                        <FontAwesomeIcon className={style.redIcon1} icon={faClock} />
                                        <span>1.00pm-2.00pm</span>
                                    </div>
                                    <div className={style.innerMap}>
                                        <FontAwesomeIcon className={style.redIcon2} icon={faMapMarkerAlt} />
                                        <span>Kingster Grand Hall</span>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Link to='/tadbirlar/uz' className={style.barchasiniKurish}>Hamma tadbirlarni ko'rish -&gt;</Link>
                    
                </div>
            </div>
        )
    }
}
