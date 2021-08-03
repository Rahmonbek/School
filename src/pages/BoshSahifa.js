import { faDoorOpen, faEnvelope, faNewspaper, faPhone, faSchool, faSearch, faSignInAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons'
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

import '../App.css'

import { Link, NavLink } from 'react-router-dom'
import video1 from '../video/My School _ Educational Video For Kids _ Periwinkle (720p).mp4'
import BoshSahifaDavomi from './BoshSahifaDavomi'
import MaktabTadbirlari from './MaktabTadbirlari'
import Footer from './Footer'
import NavBar from './Navbar'
import FadeLoader from "react-spinners/FadeLoader";




export default class BoshSahifa extends Component {
  state={
loader:true
  }

  componentDidMount(){
      setInterval(()=>{
          this.setState({
              loader:false
          })
      },2000)
  }
    render() {
    
    return (

        <div>
{
    this.state.loader?<div className="loaderT">
<FadeLoader

 color='blue' loading={this.state.loader} size={120} />        

    </div>:
    <div>
          {/* <NavBar/> */}
          <ContainerDashboard >
                <div className='yuqori'>
                    <Container>
                        <div className="first" style={{ marginTop:'5px'}}>
                        <FontAwesomeIcon icon={faEnvelope} className='iconEmail' />
                            <a href='contact@KingsterKids.edu' style={{color:'#FFF', fontSize:'20px'}}>contact@KingsterKids.edu</a>
                        </div>

                        <div className="second" style={{ marginTop:'5px'}}>
                           
                            <a href='+1-3435-2356-222' style={{color:'#FFF', fontSize:'20px', color:'white'}}> <FontAwesomeIcon icon={faPhone} className='iconEmail' style={{color:'#FFF'}} />+1-3435-2356-222</a>
                            
                        </div>
                        <Link to='/register/uz'><FontAwesomeIcon icon={faSignInAlt} className={style.registericon} /></Link>
                        <Link to='/login/uz'><FontAwesomeIcon icon={faUserCircle} className={style.usericon} /></Link>
                    </Container>
                </div>
            </ContainerDashboard>

            <div className={style.dashboard}>
               <div className={style.fer}>
                <NavbarContainer>
                    <Navbar collapseOnSelect expand="lg" >
                        <Container>
                            <Navbar.Brand><p className='maktabLogo' style={{cursor:'pointer'}}>Maktab logosi</p></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{backgroundColor: 'white'}} />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto" >
                                    <NavLink style={{marginLeft:'20px', color:'white'}} to="/uz"><p className='navLink'>Bosh sahifa</p></NavLink>
                                    <NavLink style={{marginLeft:'20px', color:'white'}} to="/hayot/uz"><p className='navLink'>Maktab haqida</p></NavLink>
                                    <NavLink style={{marginLeft:'20px', color:'white'}} to="/qabul/uz"><p className='navLink'>Qabul</p></NavLink>
                                    <NavLink style={{marginLeft:'20px', color:'white'}} to="/yangiliklar/uz"><p className='navLink'>Yangiliklar</p></NavLink>
                                    <NavLink style={{marginLeft:'20px', color:'white'}} to="/rahbariyat/uz"><p className='navLink'>Maktab ma'muriyati</p></NavLink>
                                    <NavLink style={{marginLeft:'20px', color:'white'}} to="/alochilar/uz"><p className='navLink'>Maktab alochilari</p></NavLink>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </NavbarContainer>
                
                <XushKelibsiz>
                    <Container>
                     <h1>Maktab Nomi</h1>                        <Button className='buttonn'>Maktab hayoti</Button>
                    </Container>
                </XushKelibsiz>

                <div className={style.bayroqlar}>
                    <Link to='/uz'><img src={flagUZ} /></Link>
                    <Link to='/ru'><img src={flagRU} /></Link>
                </div>
                </div>
            </div>

            <div className={style.container}>
                <div className={style.bir}>
                    <div className={style.containercha}>
                        <img src={rasm1} className={style.image} />
                        <div className={style.overlay}>
                            <Link style={{color:'white'}} to="/yutuqlar/uz">
                            <FontAwesomeIcon icon={faSchool} className={style.icon} />
                            <h3>Yutuqlarimiz</h3>
                            <p>Sizda bizning maktabimiz yutuqlari bilan tanishib chiqish uchun qulay imkoniyat bor</p>
                            </Link></div>
                    </div>
                </div>

                <div className={style.ikki}>
                    <div className={style.containercha}>
                        <img src={rasm2} className={style.image} />
                        <div className={style.overlay}>
                        <Link style={{color:'white'}} to="/yangiliklar/uz">
                            <FontAwesomeIcon icon={faNewspaper} className={style.icon} />
                            <h3>Yangiliklar</h3>
                            <p>Maktabimizga doir bo'lgan yangiliklardan xabardor bo'ling</p>
                       </Link>
                        </div>
                    </div>
                </div>
                <div className={style.uch}>
                    <div className={style.containercha}>
                        <img src={rasm3} className={style.image} />
                        <div className={style.overlay}>
                        <Link style={{color:'white'}} to="/gallery/uz">
                            <FontAwesomeIcon icon={faDoorOpen} className={style.icon} />
                            <h3>Fotolavhalar</h3>
                            <p>Endi siz maktabimizning fotolavhalarini ko'rishingiz mumkin</p>
                     </Link>   </div>
                    </div>
                </div>
            </div>

            <div className={style.containerRow}>
                <Row>
                    <Col xs={12} sm={12} md={4} lg={4} className={style.col}>
                        <h3>Maktabga video sayohat</h3>
                        {/* <img src={rasm1} className={style.img}/> */}
                        <video controls={true} src={video1} className={style.video}  />
                        <p className={style.pp}>Maktabimizga virtual sayohat qiling va siz bizning maktab shahardagi eng yaxshilaridan biri ekanligiga ishonch hosil qilasiz. Videoni ko'ring!</p>
                    </Col>

                    <Col xs={12} sm={12} md={8} lg={8} className={style.col}>
                        <h3>Maktab yangiliklari va o'zgarishlar</h3>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={6}>
                                <Row>
                                    <Col xs={3} sm={3} md={3} lg={3} className={style.colNews}>
                                        <img src={rasm41} className={style.rasm}/>
                                    </Col>
                                    <Col xs={9} sm={9} md={9} lg={9} className={style.colNews} style={{paddingLeft:'10px', paddingRight:'8px'}}>
                                        <h5>Iyun 6, 2016 /BY/ JAMES SMITH</h5>
                                        <p>Maktabimiz chet ellik professorlar bilan shartnoma imzoladi</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={3} sm={3} md={3} lg={3} className={style.colNews}>
                                        <img src={rasm42} className={style.rasm}/>
                                    </Col>
                                    <Col xs={9} sm={9} md={9} lg={9} className={style.colNews} style={{paddingLeft:'10px', paddingRight:'8px'}}>
                                        <h5>Iyun 6, 2016 /BY/ JAMES SMITH</h5>
                                        <p>Professor Albert xalqaro konferensiyada nutq so'zladi</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={3} sm={3} md={3} lg={3} className={style.colNews}>
                                        <img src={rasm43} className={style.rasm}/>
                                    </Col>
                                    <Col xs={9} sm={9} md={9} lg={9} className={style.colNews} style={{paddingLeft:'10px', paddingRight:'8px'}}>
                                        <h5>Iyun 6, 2016 /BY/ JAMES SMITH</h5>
                                        <p>Professor Albert xalqaro konferensiyada nutq so'zladi</p>
                                    </Col>
                                </Row>
                            </Col>

                            <Col xs={12} sm={12} md={12} lg={6} >
                                <Row>
                                    <Col xs={3} sm={3} md={3} lg={3} className={style.colNews}>
                                        <img src={rasm44} className={style.rasm}/>
                                    </Col>
                                    <Col xs={9} sm={9} md={9} lg={9} className={style.colNews} style={{paddingLeft:'10px', paddingRight:'8px'}}>
                                        <h5>Iyun 6, 2016 /BY/ JAMES SMITH</h5>
                                        <p>Maktabimiz chet ellik professorlar bilan shartnoma imzoladi</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={3} sm={3} md={3} lg={3} className={style.colNews}>
                                        <img src={rasm45} className={style.rasm}/>
                                    </Col>
                                    <Col xs={9} sm={9} md={9} lg={9} className={style.colNews} style={{paddingLeft:'10px', paddingRight:'8px'}}>
                                        <h5>Iyun 6, 2016 /BY/ JAMES SMITH</h5>
                                        <p>Maktabimiz chet ellik professorlar bilan shartnoma imzoladi</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={3} sm={3} md={3} lg={3} className={style.colNews}>
                                        <img src={rasm46} className={style.rasm}/>
                                    </Col>
                                    <Col xs={9} sm={9} md={9} lg={9} className={style.colNews} style={{paddingLeft:'10px', paddingRight:'8px'}}>
                                        <h5>Iyun 6, 2016 /BY/ JAMES SMITH</h5>
                                        <p>Maktabimiz chet ellik professorlar bilan shartnoma imzoladi</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Link to="/yangiliklar/uz"><button className={style.buttoncha}><span>Barchasini o'qish</span></button></Link>
                    </Col>
                </Row>
            </div>
            <BoshSahifaDavomi />
            <MaktabTadbirlari />
            <Footer />
    </div>
}
            
          
        </div>
    )
  }
}
