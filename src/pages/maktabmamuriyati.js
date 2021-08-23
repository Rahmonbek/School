import React, { Component } from 'react'
import styles from '../css/maktabmamuriyati.module.css'
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import { Carousel } from 'antd';
import school1 from '../img/school19.jpg'
import school2 from '../img/school20.jpg'
import school3 from '../img/school25.jpg'
import school4 from '../img/school13.jpg'
import {Container,Row,Col} from 'react-bootstrap'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

export default class Maktabmamuriyati extends Component {
  componentDidMount(){
    Aos.init({
        duration:2000
    })
}
    render() {
      const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
        
        return (
            <div>
              <br/><br/><br/>
             <Carousel autoplay
                       className={styles.sliderHeader} >
                       <div>
                       <img src={school1} className={styles.headerImage}/>  
                       {/* <div className={styles.slidertext}>
                           <p>Maktab direktori</p>
                           </div>                  */}
                       </div>

                       <div>
                       <img src={school2} className={styles.headerImage}/>  
                       {/* <div className={styles.slidertext}>
                           <p>Maktab direktori o'rinbosari</p>
                           </div>                  */}
                       </div>

                       <div>
                       <img src={school3} className={styles.headerImage}/>  
                       {/* <div className={styles.slidertext}>
                           <p>Maktab tarbiyaviy ishlar bo'yicha direktor o'rinbosari</p>
                           </div>                  */}
                       </div>

                       <div>
                       <img src={school4} className={styles.headerImage}/>  
                       {/* <div className={styles.slidertext}>
                           <p>Maktab mai'naviy-ma'rifiy ishlar bo'yicha direktor o'rinbosari</p>
                           </div>                  */}
                       </div>                       
                    </Carousel>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.carddirektor} data-aos="zoom-in-up">
                                <Row>
                                    <Col lg={4} style={{border:'1px solid #0F4C81',backgroundColor:'#0F4C81',height:'400px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                        <img src={school3}/>
                                        <p>Maktab direktori</p>
                                    </Col>
                                    <Col className={styles.cardwrap} lg={8} style={{border:'1px solid #0F4C81',backgroundColor:'#FCFCFC',paddingTop:'60px'}}>
                                      <Row>  
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>F.I.O.:</span>
                                      <span className={styles.direktor}>  Shukurov Farxod Alisherovich</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Tug'ilgan sanasi:</span>
                                      <span className={styles.direktor}> 1974-yil</span>
                                        </Col>
                                      
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Ma'muloti:</span>
                                      <span className={styles.direktor}>Oliy ma'lumotli</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Bitirgan oliygohi:</span>
                                      <span className={styles.direktor}>O'zbekiston Miliiy Universiteti</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>E-mail pochta:</span>
                                      <span className={styles.direktor}>alisherovich@gmail.com</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Telefon raqami:</span>
                                      <span className={styles.direktor}>+99812345678</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Qabul soati:</span>
                                      <span className={styles.direktor}>Har ish kuni 11:00 dan 13:00 gacha</span>
                                        </Col>
                                     </Row>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className={styles.carddirektor} data-aos="zoom-in-up">
                                <Row>
                                    <Col className={styles.cardwrap1} lg={8} style={{border:'1px solid #0F4C81',backgroundColor:'#FCFCFC',paddingTop:'60px'}}>
                                      <Row>  
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>F.I.O.:</span>
                                      <span className={styles.direktor}>  Shukurov Farxod Alisherovich</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Tug'ilgan sanasi:</span>
                                      <span className={styles.direktor}> 1974-yil</span>
                                        </Col>
                                       
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Ma'muloti:</span>
                                      <span className={styles.direktor}>Oliy ma'lumotli</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Bitirgan oliygohi:</span>
                                      <span className={styles.direktor}>O'zbekiston Miliiy Universiteti</span>
                                        </Col>
                                        
                                       
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>E-mail pochta:</span>
                                      <span className={styles.direktor}>alisherovich@gmail.com</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Telefon raqami:</span>
                                      <span className={styles.direktor}>+99812345678</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Qabul soati:</span>
                                      <span className={styles.direktor}>Har ish kuni 11:00 dan 13:00 gacha</span>
                                        </Col>
                                     </Row>
                                    </Col>
                                    <Col lg={4} style={{border:'1px solid #0F4C81',backgroundColor:'#0F4C81',height:'400px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                        <img src={school1}/>
                                        <p>Maktab direktori</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={12}>
                        <Carousel autoplay
                       className={styles.sliderComment}
                        >
                       <div>
                       <article className='review' data-aos="zoom-in-up">
      <div className={styles.imgcontainer}>
        <img src={school1} className={styles.personimg} />
        <span className={styles.quoteicon}>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className={styles.author}>Raximov Anvar Shukurovich</h4>
      <p className={styles.job}>Maktab direktori o'rinbosari</p>
      <p className={styles.info}>This self-paced course gives users an overview of the Splunk Enterprise infrastructure. Users get a high-level look at how to grow a Splunk deployment from a single instance to a distributed environment. With tips and best practices for deploying, extending and integrating Splunk while showing the user what is happening behind the scenes.</p>
    </article>
                       </div>
                       <div>
                       <article className='review' data-aos="zoom-in-up">
      <div className={styles.imgcontainer}>
        <img src={school2} className={styles.personimg} />
        <span className={styles.quoteicon}>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className={styles.author}>Shukurov Farxod Alisherovich</h4>
      <p className={styles.job}>Maktab direktori</p>
      <p className={styles.info}>“Mening eng katta ishonchim va umidim-bugun zamonoviy bilim va tarbiya olayotgan, endigina kuchga kirayotgan yoshlarimiz, farzandlarimizdir!</p>
    </article>       

                       </div>   
                       <div>
                       <article className='review' data-aos="zoom-in-up">
      <div className={styles.imgcontainer}>
        <img src={school3} className={styles.personimg} />
        <span className={styles.quoteicon}>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className={styles.author}>Alimova Shahodat Shuhratovna</h4>
      <p className={styles.job}>Maktab tarbiyaviy ishlar direktor o'rinbosari</p>
      <p className={styles.info}>Siz nimadan qo'rqasiz? Bu ishni albatta qiling va shundagina siz o'sha qo'rquvni yenga olasiz. Agar bajarmasangiz bu qo'rquv sizni hayotingiz oxirigacha ta'qib qiladi.</p>
    </article>       
         
                       </div>                       
                       <div>
                       <article className='review' data-aos="zoom-in-up">
      <div className={styles.imgcontainer}>
        <img src={school4} className={styles.personimg} />
        <span className={styles.quoteicon}>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className={styles.author}>Qudratova Malika Ravshanovna</h4>
      <p className={styles.job}>Maktab ma'naviy-ma'rifiy ishlar bo'yicha direktor o'rinbosari</p>
      <p className={styles.info}>Tasavvur qila olish eng muhim narsadir. U hayotimizga nimalarni tortib olayotganimizni aks ettirib beradi.</p>
    </article>       
         
                       </div>   
                    </Carousel>
                        </Col>

                    </Row>
                </Container>
            </div>
        )
    }
}
