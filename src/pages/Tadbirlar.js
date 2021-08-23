

import React, { Component } from 'react'
import yangilik1 from '../img/yangilik1.jpg'
import yangilik2 from '../img/yangilik2.jpg'
import new1 from '../img/new1.jpg'
import new2 from '../img/new2.jpg'
import new3 from '../img/new3.jpg'
import new4 from '../img/new4.jpg'
import new5 from '../img/13.jpg'
import new6 from '../img/11.jpg'
import new7 from '../img/12.jpg'
import new8 from '../img/4.jpg'
import new9 from '../img/6.jpg'
import tadbir1 from '../img/tadbir1.jfif'
import tadbir2 from '../img/tadbir2.jfif'
import tadbir3 from '../img/tadbir3.jfif'
import tadbir4 from '../img/tadbir4.jfif'
import styles from '../css/yangiliklar.module.css'
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'
// import {DownCircleOutlined} from '@ant-design/icons'
import { Carousel } from 'antd';
import { getEvents } from '../host/Config'
import FadeLoader from "react-spinners/FadeLoader";


export default class Yangiliklar extends Component {
  state={
    events:[],
    id:0,
    loader:true
  }  
  
  getEvents=()=>{
    getEvents().then(res=>{
   
      console.log(res.data)
      if(window.location.href.indexOf('id=')===-1){
        
       
        
        this.setState({
          events:res.data,
          loader:false
        })
       
        }
          
      
      else{
       
        this.setState({
          events:res.data,
          id:window.location.href.slice(window.location.href.indexOf('=')+1),
          loader:false
        })
        
      }
      
    }).catch(err=>{
      console.log(err)
    })
  }
    componentDidMount(){
        Aos.init({
            duration:2000
        })
     this.getEvents();
    }

    // onclick_new=(link)=>{
    //       <Link to="/${link}/uz"></Link>
    // }
    render() {
      const contentStyle = {
        width: '100%',
        height: '97vh',
        objectFit: 'cover',
        color: '#fff',
        lineHeight: '90vh',
        textAlign: 'center',
        fontFamily: 'Lobster',
        // marginBottom:'-200px',
        // fontSize:'50px',
      };
        // const responsive = {
        //     superLargeDesktop: {
        //       // the naming can be any, depends on you.
        //       breakpoint: { max: 4000, min: 993 },
        //       items: 1
        //     },
        //     desktop: {
        //       breakpoint: { max: 992, min: 769 },
        //       items: 1
        //     },
        //     tablet: {
        //       breakpoint: { max: 768, min: 567 },
        //       items: 1
        //     },
        //     mobile: {
        //       breakpoint: { max: 566, min: 0 },
        //       items: 1
        //     }
        //   }
        return (
          
            <div>
              { this.state.loader?<div className="loaderT">
<FadeLoader

 color='blue' loading={this.state.loader} size={120} />        

    </div>:<div>

                {/* ============Header============== */}

                <div className={styles.headerSliderText}>
                        <h3 style={{fontFamily: 'Lobster'}}>Maktabimiz so'ngi tadbirlari bilan tanishing</h3>
                        {/* <div className={styles.headerIcons}>
                        <a href="1"><DownCircleOutlined style={{fontSize:'40px',color:'white'}} className={styles.headerIcon}/></a>
                        </div> */}
                        </div>
                <Carousel autoplay>
    <div >
      <h3 style={contentStyle} className={styles.carusel1} ></h3>
    </div>
    <div style={{backgroundImage:`${yangilik2}`}}>
      <h3 style={contentStyle} className={styles.carusel2}></h3>
    </div>
    <div style={{backgroundImage:`${yangilik2}`}}>
      <h3 style={contentStyle} className={styles.carusel3}></h3>
    </div>
    <div style={{backgroundImage:`${yangilik2}`}}>
      <h3 style={contentStyle} className={styles.carusel4}></h3>
    </div>
  </Carousel>
 
                {/* <Carousel
                       className={styles.sliderHeader}
                      responsive={responsive} infinite={true}
                      autoPlay={this.props.deviceType !== "mobile" ? true : false}
                      autoPlaySpeed={3000}
                      keyBoardControl={false}
                        showDots={false}
                        >

                         {
                            this.state.events.map(item=>{
                              return(
                                <div>
                                <img src={item.image} style={{width:'100%', height:'100vh'}} className={styles.headerImage}/>                   
                                </div>
                                
                              )
                            })
                          }
                       
                       <div>
                           <img src={yangilik2} className={styles.headerImage}/>                         
                       </div>
                       <div>
                           <img src={school3} className={styles.headerImage}/>                
                       </div>
                       <div>
                           <img src={school4} className={styles.headerImage}/>                          
                       </div>
                       <div>
                           <img src={school5} className={styles.headerImage}/>
                       </div>
                    </Carousel> */}
                    {/* <div style={{position:'reletive'}}>
                   
                       <img src={new9} className={styles.headerImage} />  
                       <div data-aos="fade-left" style={{ position: 'absolute',
               
               bottom: '40px',
               right: '20px',
               backgroundColor: 'white',
               color: '#02024E',
               paddingLeft: '20px',
               paddingRight: '20px', opocity:'0.1',
               float:'right',
               boxShadow:' rgba(0, 0, 0, 0.56) 0px 22px 70px 4px'}}>
                                     <h3 style={{fontFamily: 'Lobster', fontSize:'50px', textAlign:'left', color:'#02024E'}}>Maktabimiz so'ngi tadbirlari bilan tanishing</h3>
                                     <div className={styles.headerIcons}>
                                     <a href="1"><DownCircleOutlined style={{fontSize:'40px',color:'white'}} className={styles.headerIcon}/></a>
                                     </div>
                                     </div>                 
                       </div> */}

                {/* ==================Section===================== */}

                <Container fluid >
                    <div className={styles.yangi}><h1 style={{fontSize:'60px'}} data-aos="fade-up">Tadbirlar</h1></div>
                    <div className={styles.line} style={{borderColor:'#0F4C81'}} data-aos="fade-up"></div>
                    <Row>
                        <Col lg={7} >
                        {
                                 this.state.events.length!==0?
                                 <div className={styles.news} data-aos="zoom-in-right">
                                 
                                 <img src= {this.state.events[this.state.id].image} alt='Foto lavha' />
                                 <h3>{this.state.events[this.state.id].title}</h3>
                                 
                                 <p className={styles.date}><i style={{marginRight:'10px'}} class="far fa-calendar-alt"></i>{this.state.events[this.state.id].published_time.substring(0, 10)}</p> 
                                 <p>
                                 {this.state.events[this.state.id].text}
                                 </p></div>:''
                               }
                        </Col>
                        <Col lg={5}>
                            <div className={styles.recent_news}  style={{backgroundColor:'#0F4C81'}} data-aos="zoom-in-left">
                              <div className={styles.title}>
                              <h3 style={{color:'white'}}>So'ngi tadbirlar</h3>
                              </div>
                              <div className={styles.body}>
                                 <Row>
                                 {
                                     this.state.events.map((item, key)=>{
                                       return(
                                     <Col lg={12} md={12} sm={12} style={{marginBottom:'10px'}} className={styles.body_card} >
                                     <MDBCard onClick={()=>{this.setState({id:key})}} style={{ maxWidth: '540px' }}>
                                      <MDBRow className='g-0'>
                                      <MDBCol md='4'>
                                      <MDBCardImage src={item.image} alt='...' fluid style={{margin:'7px'}}/>
                                      </MDBCol>
                                      <MDBCol md='8'>
                                      <MDBCardBody>
                                      <MDBCardTitle>{item.title}</MDBCardTitle>
                                      
                                      <MDBCardText>
                                      <small className='text-muted'><p className={styles.date}><i style={{marginRight:'10px'}} class="far fa-calendar-alt"></i>{item.published_time.substring(0, 10)}  </p> </small>
                                      </MDBCardText>
                                      </MDBCardBody>
                                      </MDBCol>
                                      </MDBRow>
                                      </MDBCard>
                                     </Col>
                                       )
                                       })
                                   }
                                    
                                 </Row>
                              </div>
                              
                            </div>
                        </Col>
                    </Row>

                   
                </Container></div>}
            </div>
        )
    }
}

