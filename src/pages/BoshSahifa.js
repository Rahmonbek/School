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
import BoshSahifaDavomi from './BoshSahifaDavomi'
import MaktabTadbirlari from './MaktabTadbirlari'
import Footer from './Footer'
import NavBar from './Navbar'
import FadeLoader from "react-spinners/FadeLoader";
import { getNews } from '../host/Config'
import { url, user } from '../host/Host'
import axios from 'axios'
import headerT from "../img/priscilla-du-preez-XkKCui44iM0-unsplash.jpg"
import YouTube from 'react-youtube'
import Global from '../host/Global'



export default class BoshSahifa extends Component {

  state={
loader:true,
news:[],
id:0,
school:null,
  }
getSchool=()=>{
    axios.get(`${url}/school-by-admin/${Global.user}`).then(res=>{
        this.setState({
            school:res.data,
      loader:false,
        })
        console.log(res.data)
    })
}
  getNews=()=>{
    getNews().then(res=>{
   
       

      if(window.location.href.indexOf('id=')===-1){
        
       
        
        this.setState({
          news:res.data,
          })
        }   
      else{
       
        this.setState({
          news:res.data,
          id:window.location.href.slice(window.location.href.indexOf('=')+1),
          })
    
      }
      
    }).catch(err=>{
      console.log(err)
    })


  }

  componentDidMount(){
      
      this.getNews()
      this.getSchool()
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
                <div className={style.yuqori}>
                    <Container>
                        <div className={style.first} style={{ marginTop:'5px'}}>
                        <FontAwesomeIcon icon={faEnvelope} className={style.iconEmail} />
                            <a href={`mailto: ${this.state.school!==null?this.state.school.email:'ittower01@gmail.com'}`} style={{color:'#FFF', fontSize:'20px'}}>{this.state.school!==null?this.state.school.email:'ittower01@gmail.com'}</a>
                        </div>

                        <div className={style.second} style={{ marginTop:'5px',right:'140px'}}>
                           
                            <a href={`tel: ${this.state.school!==null?this.state.school.phone:'+998 93 082 03 72'}`} style={{color:'#FFF', fontSize:'20px', color:'white'}}> <FontAwesomeIcon icon={faPhone} className={style.iconEmail} />{this.state.school!==null?this.state.school.phone:"+1-3435-2356-222"}</a>
                            
                        </div>
                        {/* <Link to='/register'><FontAwesomeIcon icon={faSignInAlt} className={style.registericon} /></Link> */}
                        <Link to='/login' className={style.usericon}><FontAwesomeIcon icon={faUserCircle} /><span style={{fontSize:"20px"}}> Kirish</span></Link>
                    </Container>
                </div>
            </ContainerDashboard>

            <div className={style.dashboard}>
               <div className={style.fer}>
                
                    <Navbar collapseOnSelect expand="lg"  className={style.Navbar}>
                        <Container>
                            <Navbar.Brand><span className={style.maktabLogo} style={{cursor:'pointer'}}>{this.state.school!==null?this.state.school.school_number+' - maktab':"Maktab raqami"}</span></Navbar.Brand>
                            <Navbar.Toggle style={{color:' rgba(0, 0, 0, 0)',border:'none'}} ><i class="fa fa-bars" aria-hidden="true" style={{fontSize:'1.6rem',color:'white'}}></i></Navbar.Toggle>
                            <Navbar.Collapse >
                                <Nav className={style.meauto} >
                                    <NavLink to={`/${Global.user}`}><p className={style.navLink}>Bosh sahifa</p></NavLink>
                                    <NavLink to={`/hayot/${Global.user}`}><p className={style.navLink}>Maktab haqida</p></NavLink>
                                    <NavLink to={`/qabul/${Global.user}`}><p className={style.navLink}>Qabul</p></NavLink>
                                    <NavLink to={`/yangiliklar/${Global.user}`}><p className={style.navLink}>Yangiliklar</p></NavLink>
                                    <NavLink to={`/rahbariyat/${Global.user}`}><p className={style.navLink}>Maktab ma'muriyati</p></NavLink>
                                    <NavLink to={`/alochilar/${Global.user}`}><p className={style.navLink}>Maktab alochilari</p></NavLink>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                
                <XushKelibsiz style={{backgroundColor:'rgba(0, 0, 0, 0.254)', width:'100%', height:'100vh',marginTop:'-190px',paddingTop:'190px'}}>
                    <Container>
                    <h1 style={{fontSize:'40px'}}> {this.state.school!==null?this.state.school.school_name:""}<br/>{this.state.school!==null?this.state.school.school_number+' - maktab ':""}</h1>                        
                    <h1 style={{fontSize:'30px'}}> {this.state.school!==null?this.state.school.type:""}</h1>                        
                     <Link to={`/hayot/${Global.user}`}><Button className='buttonn' >Maktab hayoti</Button></Link>
                    </Container>
                    <img src={this.state.school!==null?this.state.school.b_r1!==null?this.state.school.b_r1:headerT:headerT} className={style.temur}/>
                </XushKelibsiz>
{/* 
                <div className={style.bayroqlar}>
                    <Link to=''><img style={{marginTop:'7px'}} src={flagUZ} /></Link>
                    <Link to='/ru'><img style={{marginTop:'7px'}} src={flagRU} /></Link>
                </div> */}
                </div>
            </div>

            <div className={style.container}>
                <div className={style.bir}>
                    <div className={style.containercha}>
                        <img src={this.state.school!==null?this.state.school.b_c1!==null?this.state.school.b_c1:rasm1:rasm1} className={style.image} />
                        <div className={style.overlay}>
                            <Link style={{color:'white'}} to={`/yutuqlar/${Global.user}`}>
                            <FontAwesomeIcon icon={faSchool} className={style.icon} />
                            <h3>Yutuqlarimiz</h3>
                            <p>Sizda bizning maktabimiz yutuqlari bilan tanishib chiqish uchun qulay imkoniyat bor</p>
                            </Link></div>
                    </div>
                </div>

                <div className={style.ikki}>
                    <div className={style.containercha}>
                        <img src={this.state.school!==null?this.state.school.b_c1!==null?this.state.school.b_c1:rasm2:rasm2} className={style.image} />
                        <div className={style.overlay}>
                        <Link style={{color:'white'}} to={`/yangiliklar/${Global.user}`}>
                            <FontAwesomeIcon icon={faNewspaper} className={style.icon} />
                            <h3>Yangiliklar</h3>
                            <p>Maktabimizga doir bo'lgan yangiliklardan xabardor bo'ling</p>
                       </Link>
                        </div>
                    </div>
                </div>
                <div className={style.uch}>
                    <div className={style.containercha}>
                        <img src={this.state.school!==null?this.state.school.b_c1!==null?this.state.school.b_c1:rasm3:rasm3} className={style.image} />
                        <div className={style.overlay}>
                        <Link style={{color:'white'}} to={`/gallery/${Global.user}`}>
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
 <YouTube videoId={this.state.school!==null?this.state.school.video!==null?this.state.school.video.slice(this.state.school.video.indexOf("youtu.be/")+9):'':''} opts={{ 
      width: '100%',
      height:'100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,}}} className={style.video}  />
                        <p className={style.pp}>Maktabimizga virtual sayohat qiling va siz bizning maktab shahardagi eng yaxshilaridan biri ekanligiga ishonch hosil qilasiz. Videoni ko'ring!</p>
                    </Col>

                    <Col xs={12} sm={12} md={8} lg={8} className={style.col}>
                        <h3>Maktab yangiliklari va o'zgarishlar</h3>

                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12}>
                               <Row>
                               {this.state.news.map((item,key)=>{
return(
   key<6?(
    <Col lg={6}>
    <Row>
    <Col xs={3} sm={3} md={3} lg={3} className={style.colNews}>
        <img src={item.image} className={style.rasm}/>
    </Col>
    <Col xs={9} sm={9} md={9} lg={9} className={style.colNews} style={{paddingLeft:'10px', paddingRight:'8px'}}>
        <p>{item.title}</p>
        <h5><i style={{marginRight:'10px'}} class="far fa-calendar-alt"></i>{item.published_time.substring(0, 10)}</h5>
        
    </Col>
    </Row>
  </Col>
   ):''
)
                               })}
                                   </Row> 
                              
                            </Col>
                        </Row>

                        <Link to={`/yangiliklar/${Global.user}`}><button className={style.buttoncha}><span>Barchasini o'qish</span></button></Link>
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
