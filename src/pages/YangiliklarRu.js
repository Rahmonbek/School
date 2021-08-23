

import React, { Component } from 'react'
import yangilik1 from '../img/yangilik1.jpg'
import yangilik2 from '../img/yangilik2.jpg'
import new1 from '../img/new1.jpg'
import new2 from '../img/new2.jpg'
import new3 from '../img/new3.jpg'
import new4 from '../img/new4.jpg'
import styles from '../css/yangiliklar.module.css'
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'
import { FaDivide } from 'react-icons/fa'
// import {DownCircleOutlined} from '@ant-design/icons'


export default class YangiliklarRu extends Component {
    componentDidMount(){
        Aos.init({
            duration:2000
        })
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

                {/* ============Header============== */}

                <div className={styles.header}>
                <div className={styles.headerSliderText}>
                        <h3 style={{fontFamily: 'Lobster'}}>Узнай последние новости нашей школы</h3>
                        {/* <div className={styles.headerIcons}>
                        <a href="1"><DownCircleOutlined style={{fontSize:'40px',color:'white'}} className={styles.headerIcon}/></a>
                        </div> */}
                        </div>
                <div
                      //  className={styles.sliderHeader}
                      // responsive={responsive} infinite={true}
                      // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                      // autoPlaySpeed={3000}
                      // keyBoardControl={false}
                      //   showDots={false}
                        >
                       <div>
                       <img src={yangilik1} className={styles.headerImage}/>                   
                       </div>
                       <div>
                           <img src={yangilik2} className={styles.headerImage}/>                         
                       </div>
                       {/* <div>
                           <img src={school3} className={styles.headerImage}/>                
                       </div>
                       <div>
                           <img src={school4} className={styles.headerImage}/>                          
                       </div>
                       <div>
                           <img src={school5} className={styles.headerImage}/>
                       </div> */}
                    </div>
                </div>

                {/* ==================Section===================== */}

                <Container fluid >
                    <div className={styles.yangi}><h1 style={{fontSize:'60px'}} data-aos="fade-up">Новости</h1></div>
                    <div className={styles.line} data-aos="fade-up"></div>
                    <Row>
                        <Col lg={7}>
                            <div className={styles.news} data-aos="zoom-in-right">
                               <img src={new1} alt='Foto lavha' />
                               <h3>Организован фестиваль "Поколения Аль-Хорезми".</h3>
                               
                               <p className={styles.date}><i class="far fa-calendar-alt"></i> 04.06.2021</p> 
                               <p>
                               3 июня прошел Фестиваль поколений Аль-Хорезми с участием Лю Цзясиня, представителя HUAWEI в Узбекистане.
                               </p>
                               <p>
                               Президент, директор Агентства творчества и развития специализированных школ Хилола Умарова открыла фестиваль и поздравила участников:
                               </p>
                               <p>
                               - Президент, учащиеся творческих и специализированных школ участвуют в фестивале со своими проектами. Думаю, что сегодняшний фестиваль стал возможностью для наших студентов не только показать свои работы и таланты, но и обменяться идеями. Следует отметить, что Huawei всегда поощряла интерес молодежи к информационным технологиям. Наша совместная работа очень важна в направлении молодежи к современным профессиям. Поздравляю участников этого фестиваля и желаю им удачи в их новых проектах в будущем.
                               </p>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className={styles.recent_news} data-aos="zoom-in-left">
                              <div className={styles.title}>
                              <h3>Последние новости</h3>
                              </div>
                              <div className={styles.body}>
                                 <Row>
                                    <Link to="/yangiliklarRu/uz">
                                    <Col lg={12} md={12} sm={12} style={{marginBottom:'10px'}} className={styles.body_card} >
                                     <MDBCard style={{ maxWidth: '540px' }}>
                                      <MDBRow className='g-0'>
                                      <MDBCol md='4'>
                                      <MDBCardImage src={new1} alt='...' fluid style={{margin:'7px'}}/>
                                      </MDBCol>
                                      <MDBCol md='8'>
                                      <MDBCardBody>
                                      <MDBCardTitle>Организован фестиваль "Поколения Аль-Хорезми".</MDBCardTitle>
                                      
                                      <MDBCardText>
                                      <small className='text-muted'><p className={styles.date}><i class="far fa-calendar-alt"></i> 04.06.2021   </p> </small>
                                      </MDBCardText>
                                      </MDBCardBody>
                                      </MDBCol>
                                      </MDBRow>
                                      </MDBCard>
                                     </Col>
                                    </Link>
                                    

                                    <Link to="/yangiliklarRu_2/uz">
                                    <Col lg={12} style={{marginBottom:'10px'}} className={styles.body_card}>
                                       <MDBCard style={{ maxWidth: '540px' }}>
                                       <MDBRow className='g-0'>
                                       <MDBCol md='4'>
                                       <MDBCardImage src={new2} alt='...' fluid style={{margin:'7px'}} />
                                       </MDBCol>
                                       <MDBCol md='8'>
                                       <MDBCardBody>
                                       <MDBCardTitle>Последний звонок в школе</MDBCardTitle>
                                       
                                       <MDBCardText>
                                       <small className='text-muted'><p className={styles.date}><i class="far fa-calendar-alt"></i> 04.06.2021</p> </small>
                                       </MDBCardText>
                                       </MDBCardBody>
                                       </MDBCol>
                                       </MDBRow>
                                       </MDBCard>
                                     </Col>
                                    </Link>
                                     

                                     <Link to="/yangiliklarRu_3/uz">
                                     <Col lg={12} style={{marginBottom:'10px'}} className={styles.body_card} >
                                       <MDBCard style={{ maxWidth: '540px' }}>
                                       <MDBRow className='g-0'>
                                       <MDBCol md='4'>
                                       <MDBCardImage src={new3} alt='...' fluid style={{margin:'7px', height:'110px'}}/>
                                       </MDBCol>
                                       <MDBCol md='8'>
                                       <MDBCardBody>
                                       <MDBCardTitle>Школьники на экскурсии</MDBCardTitle>
                                      
                                       <MDBCardText>
                                       <small className='text-muted'><p className={styles.date}><i class="far fa-calendar-alt"></i> 04.06.2021</p> </small>
                                       </MDBCardText>
                                       </MDBCardBody>
                                       </MDBCol>
                                       </MDBRow>
                                       </MDBCard>
                                     </Col>
                                     </Link>
                                    

                                    <Link to="/yangiliklarRu_4/uz">
                                    <Col lg={12} style={{marginBottom:'10px'}} className={styles.body_card}>
                                     <MDBCard style={{ maxWidth: '540px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src={new4} alt='...' fluid style={{margin:'7px'}}/>
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>Открытый диалог по подготовке к приему</MDBCardTitle>
            
            <MDBCardText>
              <small className='text-muted'><p className={styles.date}><i class="far fa-calendar-alt"></i> 04.06.2021</p> </small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
                                     </Col>
                                    </Link>
                                 </Row>
                              </div>
                              <div className={styles.title} style={{marginTop:'10%'}}>
                              <h3>Недавние события</h3>
                              </div>
                              <Row style={{display:'flex', justifyContent:'space-around', textAlign:'center'}}>
                                <Col lg={4} className={styles.tadbir1} >
                                </Col>
                                <Col lg={4} className={styles.tadbir2}>
                                </Col>
                                <Col lg={4} className={styles.tadbir3}>
                                </Col>
                              </Row>
                              <Row style={{display:'flex', justifyContent:'space-around', textAlign:'center'}}>
                                <Col lg={4} className={styles.tadbir4} >
                                </Col>
                                <Col lg={4} className={styles.tadbir5}>
                                </Col>
                                <Col lg={4} className={styles.tadbir6}>
                                </Col>
                              </Row>
                            </div>
                        </Col>
                    </Row>

                   
                </Container>
            </div>
        )
    }
}
