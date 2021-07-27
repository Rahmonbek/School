

import React, { Component } from 'react'
import yangilik1 from '../img/yangilik1.jpg'
import yangilik2 from '../img/yangilik2.jpg'
import new1 from '../img/new1.jpg'
import new2 from '../img/new2.jpg'
import new3 from '../img/new3.jpg'
import new4 from '../img/new4.jpg'
import styles from '../css/yangiliklar.module.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'
import { getNews } from '../host/Config'
import FadeLoader from "react-spinners/FadeLoader";

// import {DownCircleOutlined} from '@ant-design/icons'


export default class Yangiliklar extends Component {
  state={
    news:[],
    id:0,
    loader:true
  }  
  
  getNews=()=>{
    getNews().then(res=>{
   
      if(window.location.href.indexOf('id=')===-1){
        
       
        
        this.setState({
          news:res.data,
          loader:false
        })
       
        }
          
      
      else{
       
        this.setState({
          news:res.data,
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
        this.getNews()
      
    }

    // onclick_new=(link)=>{
    //       <Link to="/${link}/uz"></Link>
    // }
    render() {
        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 993 },
              items: 1
            },
            desktop: {
              breakpoint: { max: 992, min: 769 },
              items: 1
            },
            tablet: {
              breakpoint: { max: 768, min: 567 },
              items: 1
            },
            mobile: {
              breakpoint: { max: 566, min: 0 },
              items: 1
            }
          }
        return (

            <div>
{ this.state.loader?<div className="loaderT">
<FadeLoader

 color='blue' loading={this.state.loader} size={120} />        

    </div>:<>
                {/* ============Header============== */}

                
                <div className={styles.headerSliderText}>
                        <h3 style={{fontFamily: 'Lobster'}}>Maktabimiz so'ngi yangiliklari bilan tanishing</h3>
                        {/* <div className={styles.headerIcons}>
                        <a href="1"><DownCircleOutlined style={{fontSize:'40px',color:'white'}} className={styles.headerIcon}/></a>
                        </div> */}
                        </div>
                <Carousel
                       className={styles.sliderHeader}
                      responsive={responsive} infinite={true}
                      autoPlay={this.props.deviceType !== "mobile" ? true : false}
                      autoPlaySpeed={3000}
                      keyBoardControl={false}
                        showDots={false}
                        >
                          {
                            this.state.news.map(item=>{
                              return(
                                <div>
                                <img src={item.image} style={{width:'100%', height:'100vh'}} className={styles.headerImage}/>                   
                                </div>
                                
                              )
                            })
                          }
                       {/* <div>
                           <img src={school3} className={styles.headerImage}/>                
                       </div>
                       <div>
                           <img src={school4} className={styles.headerImage}/>                          
                       </div>
                       <div>
                           <img src={school5} className={styles.headerImage}/>
                       </div> */}
                    </Carousel>
                

                {/* ==================Section===================== */}

                <Container fluid >
                    <div className={styles.yangi}><h1 style={{fontSize:'60px'}} data-aos="fade-up">Yangiliklar</h1></div>
                    <div className={styles.line} data-aos="fade-up"></div>
                    <Row>
                        <Col lg={7}>
                            
                               {
                                 this.state.news.length!==0?
                                 <div className={styles.news} data-aos="zoom-in-right">
                                 
                                 <img src= {this.state.news[this.state.id].image} alt='Foto lavha' />
                                 <h3>{this.state.news[this.state.id].title}</h3>
                                 
                                 <p className={styles.date}><i class="far fa-calendar-alt"></i>{this.state.news[this.state.id].published_time.substring(0, 10)}</p> 
                                 <p>
                                 {this.state.news[this.state.id].text}
                                 </p></div>:''
                               }
                               
                            
                        </Col>
                        <Col lg={5}>
                            <div className={styles.recent_news} data-aos="zoom-in-left">
                              <div className={styles.title}>
                              <h3>So'ngi yangiliklar</h3>
                              </div>
                              <div className={styles.body}>
                                 <Row>
                                   {
                                     this.state.news.map((item, key)=>{
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
                                      <small className='text-muted'><p className={styles.date}><i class="far fa-calendar-alt"></i>{item.published_time.substring(0, 10)}  </p> </small>
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

                   
                </Container>
</>    }</div>
        )
    }
}
