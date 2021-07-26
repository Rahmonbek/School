

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
// import {DownCircleOutlined} from '@ant-design/icons'


export default class Yangiliklar extends Component {
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
                    </Carousel>
                

                {/* ==================Section===================== */}

                <Container fluid >
                    <div className={styles.yangi}><h1 style={{fontSize:'60px'}} data-aos="fade-up">Yangiliklar</h1></div>
                    <div className={styles.line} data-aos="fade-up"></div>
                    <Row>
                        <Col lg={7}>
                            <div className={styles.news} data-aos="zoom-in-right">
                               <img src={new1} alt='Foto lavha' />
                               <h3>"Al-Xorazmiy avlodlari" festivali tashkil etildi</h3>
                               
                               <p className={styles.date}><i class="far fa-calendar-alt"></i> 04.06.2021</p> 
                               <p>
                               Joriy yilning 3-iyun kuni HUAWEI kompaniyasining O‘zbekistondagi vakili Liu Jiaxin ishtirokida “Al-Xorazmiy avlodlari” festivali bo'lib o'tdi.
                               </p>
                               <p>
                               Prezident, Ijod va ixtisoslashtirilgan maktablarni rivojlantirish agentligi  direktori Hilola Umarova festivalni ochib berib,  ishtirokchilarni  tabrikladi:
                               </p>
                               <p>
                               - Tashkil etilgan mazkur festivalda  Prezident, ijod va ixtisoslashtirilgan maktablar o‘quvchilari o‘zlarining loyihalari bilan qatnashishmoqda. O’ylaymanki, bugungi festival  o‘quvchilarimizning  nafaqat o‘z mehnat va iqtidorlarini namoyish etish, balki o‘zaro fikr almashishlariga ham imkon yaratdi. Aytib o‘tish kerakki, Huawei kompaniyasi yoshlarni axborot-texnologiyalari sohasiga qiziqtirishni doimo  rag‘batlantirib kelmoqda. Bu kabi hamkorlikda olib borilayotgan ishlarimiz yoshlarni zamonaviy kasblarga yo‘naltirishda katta ahamiyatga ega. Ushbu festival ishtirokchilarini tabriklayman, kelgusidagi yangidan yangi loyihalarida omad tilayman.
                               </p>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className={styles.recent_news} data-aos="zoom-in-left">
                              <div className={styles.title}>
                              <h3>So'ngi yangiliklar</h3>
                              </div>
                              <div className={styles.body}>
                                 <Row>
                                    <Link to="/yangiliklar/uz">
                                    <Col lg={12} md={12} sm={12} style={{marginBottom:'10px'}} className={styles.body_card} >
                                     <MDBCard style={{ maxWidth: '540px' }}>
                                      <MDBRow className='g-0'>
                                      <MDBCol md='4'>
                                      <MDBCardImage src={new1} alt='...' fluid style={{margin:'7px'}}/>
                                      </MDBCol>
                                      <MDBCol md='8'>
                                      <MDBCardBody>
                                      <MDBCardTitle>"Al-Xorazmiy avlodlari" festivali tashkil etildi</MDBCardTitle>
                                      
                                      <MDBCardText>
                                      <small className='text-muted'><p className={styles.date}><i class="far fa-calendar-alt"></i> 04.06.2021   </p> </small>
                                      </MDBCardText>
                                      </MDBCardBody>
                                      </MDBCol>
                                      </MDBRow>
                                      </MDBCard>
                                     </Col>
                                    </Link>
                                    

                                    <Link to="/yangiliklar/uz">
                                    <Col lg={12} style={{marginBottom:'10px'}} className={styles.body_card}>
                                       <MDBCard style={{ maxWidth: '540px' }}>
                                       <MDBRow className='g-0'>
                                       <MDBCol md='4'>
                                       <MDBCardImage src={new2} alt='...' fluid style={{margin:'7px'}} />
                                       </MDBCol>
                                       <MDBCol md='8'>
                                       <MDBCardBody>
                                       <MDBCardTitle>Maktabda so'nggi qo'ng'iroq</MDBCardTitle>
                                       
                                       <MDBCardText>
                                       <small className='text-muted'><p className={styles.date}><i class="far fa-calendar-alt"></i> 04.06.2021</p> </small>
                                       </MDBCardText>
                                       </MDBCardBody>
                                       </MDBCol>
                                       </MDBRow>
                                       </MDBCard>
                                     </Col>
                                    </Link>
                                     

                                     <Link to="/yangiliklar/uz">
                                     <Col lg={12} style={{marginBottom:'10px'}} className={styles.body_card} >
                                       <MDBCard style={{ maxWidth: '540px' }}>
                                       <MDBRow className='g-0'>
                                       <MDBCol md='4'>
                                       <MDBCardImage src={new3} alt='...' fluid style={{margin:'7px', height:'110px'}}/>
                                       </MDBCol>
                                       <MDBCol md='8'>
                                       <MDBCardBody>
                                       <MDBCardTitle>Maktab o'quvchilari ekskursiyada</MDBCardTitle>
                                      
                                       <MDBCardText>
                                       <small className='text-muted'><p className={styles.date}><i class="far fa-calendar-alt"></i> 04.06.2021</p> </small>
                                       </MDBCardText>
                                       </MDBCardBody>
                                       </MDBCol>
                                       </MDBRow>
                                       </MDBCard>
                                     </Col>
                                     </Link>
                                    

                                    <Link to="/yangiliklar/uz">
                                    <Col lg={12} style={{marginBottom:'10px'}} className={styles.body_card}>
                                     <MDBCard style={{ maxWidth: '540px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src={new4} alt='...' fluid style={{margin:'7px'}}/>
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>Qabulga tayyorgarlik yuzasidan ochiq muloqat</MDBCardTitle>
            
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
                              
                            </div>
                        </Col>
                    </Row>

                   
                </Container>
            </div>
        )
    }
}
