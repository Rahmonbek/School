import { faDoorOpen, faEnvelope, faNewspaper, faPhone, faSchool, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react'
import { ContainerDashboard, XushKelibsiz} from './StyleBoshSahifa'
import style from './BoshSahifa.module.css'
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap'
import { NavbarContainer } from './StyleBoshSahifa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import rasm1 from '../img/vasily-koloda-8CqDvPuo_kI-unsplash.jpg'
import rasm2 from '../img/mira-kireeva-xTq26wLo5do-unsplash.jpg'
import rasm3 from '../img/javier-trueba-iQPr1XkF5F0-unsplash.jpg'
import rasm41 from '../img/1.jpg'
import rasm42 from '../img/2.jpg'
import rasm43 from '../img/3.jpg'
import rasm44 from '../img/4.jpg'
import rasm45 from '../img/5.jpg'
import rasm46 from '../img/6.jpg'
import flagUZ from '../img/flagUZ.png'
import flagRU from '../img/flagRU.png'

import { Link } from 'react-router-dom'
import video1 from '../video/My School _ Educational Video For Kids _ Periwinkle (720p).mp4'
import BoshSahifaDavomiRU from './BoshSahifaDavomiRU'
import MaktabTadbirlariRU from './MaktabTadbirlariRU'
import FooterRU from './FooterRU'



export default class BoshSahifaRU extends Component {
  render() {
    return (

        <div>
            <ContainerDashboard >
                <div className='yuqori'>
                    <Container>
                        <div className="first">
                            <FontAwesomeIcon icon={faEnvelope} className='iconEmail' />
                            <p>контакт@КингстерКидс.эду</p>
                        </div>

                        <div className="second">
                            <FontAwesomeIcon icon={faPhone} className='iconEmail' />
                            <p>+1-3435-2356-222</p>
                        </div>
                        <Link to='/login/uz'><FontAwesomeIcon icon={faUserCircle} className='userIcon' /></Link>
                    </Container>
                </div>
            </ContainerDashboard>

            <div className={style.dashboard}>
                <NavbarContainer>
                    <Navbar collapseOnSelect expand="lg">
                        <Container>
                            <Navbar.Brand href="#home"><p className='maktabLogo'>Логотип школы</p></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{backgroundColor: 'white'}} />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto" >
                                    <Nav.Link href="#boshSahifa"><p className='navLink'>Дом</p></Nav.Link>
                                    <Nav.Link href="#maktabHaqida"><p className='navLink'>Про школу</p></Nav.Link>
                                    <Nav.Link href="#qabul"><p className='navLink'>Принятие</p></Nav.Link>
                                    <Nav.Link href="#yangiliklar"><p className='navLink'>Новости</p></Nav.Link>
                                    <Nav.Link href="#maktabMamuriyati"><p className='navLink'>Администрация школы</p></Nav.Link>
                                    <Nav.Link href="#maktabRasmlari"><p className='navLink'>Школьные картинки</p></Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </NavbarContainer>
                
                <XushKelibsiz>
                    <Container>
                        <h1>Название школы</h1>
                        <Button className='buttonn'>Школьная жизнь</Button>
                    </Container>
                </XushKelibsiz>

                <div className={style.bayroqlar}>
                    <Link to='/'><img src={flagUZ} /></Link>
                    <Link to='/ru'><img src={flagRU} /></Link>
                </div>

            </div>

            <div className={style.container}>
                <div className={style.bir}>
                    <div className={style.containercha}>
                        <img src={rasm1} className={style.image} />
                        <div className={style.overlay}>
                            <FontAwesomeIcon icon={faSchool} className={style.icon} />
                            <h3>Школьная жизнь</h3>
                            <p>У вас есть прекрасная возможность познакомиться с нашей школьной жизнью</p>
                        </div>
                    </div>
                </div>

                <div className={style.ikki}>
                    <div className={style.containercha}>
                        <img src={rasm2} className={style.image} />
                        <div className={style.overlay}>
                            <FontAwesomeIcon icon={faNewspaper} className={style.icon} />
                            <h3>Новости</h3>
                            <p>Будьте в курсе последних новостей о нашей школе</p>
                        </div>
                    </div>
                </div>
                <div className={style.uch}>
                    <div className={style.containercha}>
                        <img src={rasm3} className={style.image} />
                        <div className={style.overlay}>
                            <FontAwesomeIcon icon={faDoorOpen} className={style.icon} />
                            <h3>Процесс приема</h3>
                            <p>Теперь вы можете узнать онлайн, как будет проходить процесс поступления в школу.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.containerRow}>
                <Row>
                    <Col xs={12} sm={12} md={4} lg={4} className={style.col}>
                        <h3>Видео поездка в школу</h3>
                        {/* <img src={rasm1} className={style.img}/> */}
                        <video controls={true}  src={video1} className={style.video}  />
                        <p className={style.pp}>Совершите виртуальный тур по нашей школе, и вы убедитесь, что наша школа одна из лучших в городе. Смотреть видео!</p>
                    </Col>

                    <Col xs={12} sm={12} md={8} lg={8} className={style.col}>
                        <h3>Новости и события школы</h3>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={6}>
                                <Row>
                                    <Col xs={3} sm={3} md={3} lg={3} className={style.colNews}>
                                        <img src={rasm41} className={style.rasm}/>
                                    </Col>
                                    <Col xs={9} sm={9} md={9} lg={9} className={style.colNews}>
                                        <h5>Июн 6, 2016 /БЙ/ ЖАМEС СМИТҲ</h5>
                                        <p>Наша школа подписала контракты с иностранными профессорами.</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={3} sm={3} md={3} lg={3} className={style.colNews}>
                                        <img src={rasm42} className={style.rasm}/>
                                    </Col>
                                    <Col xs={9} sm={9} md={9} lg={9} className={style.colNews}>
                                        <h5>Июн 6, 2016 /БЙ/ ЖАМEС СМИТҲ</h5>
                                        <p>Профессор Альберт выступил на международной конференции</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={3} sm={3} md={3} lg={3} className={style.colNews}>
                                        <img src={rasm43} className={style.rasm}/>
                                    </Col>
                                    <Col xs={9} sm={9} md={9} lg={9} className={style.colNews}>
                                        <h5>Июн 6, 2016 /БЙ/ ЖАМEС СМИТҲ</h5>
                                        <p>Профессор Альберт выступил на международной конференции</p>
                                    </Col>
                                </Row>
                            </Col>

                            <Col xs={12} sm={12} md={12} lg={6} >
                                <Row>
                                    <Col xs={3} sm={3} md={3} lg={3} className={style.colNews}>
                                        <img src={rasm44} className={style.rasm}/>
                                    </Col>
                                    <Col xs={9} sm={9} md={9} lg={9} className={style.colNews}>
                                        <h5>Июн 6, 2016 /БЙ/ ЖАМEС СМИТҲ</h5>
                                        <p>Наша школа подписала контракты с иностранными профессорами.</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={3} sm={3} md={3} lg={3} className={style.colNews}>
                                        <img src={rasm45} className={style.rasm}/>
                                    </Col>
                                    <Col xs={9} sm={9} md={9} lg={9} className={style.colNews}>
                                        <h5>Июн 6, 2016 /БЙ/ ЖАМEС СМИТҲ</h5>
                                        <p>Наша школа подписала контракты с иностранными профессорами.</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={3} sm={3} md={3} lg={3} className={style.colNews}>
                                        <img src={rasm46} className={style.rasm}/>
                                    </Col>
                                    <Col xs={9} sm={9} md={9} lg={9} className={style.colNews}>
                                        <h5>Июн 6, 2016 /БЙ/ ЖАМEС СМИТҲ</h5>
                                        <p>Наша школа подписала контракты с иностранными профессорами.</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <button className={style.buttoncha}><span>Прочтите блог</span></button>
                    </Col>
                </Row>
            </div>
            <BoshSahifaDavomiRU />
            <MaktabTadbirlariRU />
            <FooterRU />
        </div>
    )
  }
}
