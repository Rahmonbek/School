import React, { Component } from 'react'
import styles from '../css/maktabHayoti.module.css'
import {Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import school1 from '../img/school1.jpg'
import school2 from '../img/school2.jpg'
import school3 from '../img/school3.jpg'
import school4 from '../img/school4.jpg'
import school5 from '../img/school5.jpg'
import school7 from '../img/school7.jpg'
import school8 from '../img/school8.jpg'
import school9 from '../img/school9.jpg'
import school10 from '../img/school10.jpg'
import school11 from '../img/school11.jpg'
import school12 from '../img/school12.jpg'
import school13 from '../img/school13.jpg'
import {Link} from 'react-router-dom'
import {DownCircleOutlined} from '@ant-design/icons'
import {BiStop,BiRightArrowAlt} from "react-icons/bi";
import Aos from 'aos'
import 'aos/dist/aos.css';
import PannellumReactRu  from '../pages/panolleumRu'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export default class MaktabHayotiRu extends Component {
    componentDidMount(){
        Aos.init({
            duration:2000
        })
    }
    
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
                <div className={styles.header}>
                <div className={styles.headerSliderText}>
                        <h3 style={{fontFamily: 'font',fontWeight:'900'}}>Школьная жизнь</h3>
                        <div className={styles.headerIcons}>
                        <a href="#1"><DownCircleOutlined style={{fontSize:'40px',color:'white'}} className={styles.headerIcon}/></a>
                        </div>
                        </div>
                <Carousel
                       className={styles.sliderHeader}
                       responsive={responsive} infinite={true}
                       autoPlay={this.props.deviceType !== "mobile" ? true : false}
                       autoPlaySpeed={3000}
                       keyBoardControl={true}
                          showDots={false}
                        >
                       <div>
                       <img src={school1} className={styles.headerImage}/>                   
                       </div>
                       <div>
                           <img src={school2} className={styles.headerImage}/>                         
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
                    </Carousel>
                </div>
                
                <Container fluid className={styles.secondContainer} id="1">
                    <Row>
                        <Col lg={1} className={styles.iconPath}>
                            <div data-aos="fade-down" aos-duration="2000" style={{position:'absolute', top:'200px',left:'35px'}}><BiStop style={{fontSize:'40px',color:'#0F4C81'}}/></div>
                            <div data-aos="fade-down" aos-duration="2000"  style={{position:'absolute', top: '450px',left:'35px'}}><BiStop style={{fontSize:'40px',color:'#0F4C81'}}/></div>
                            <div data-aos="fade-down" aos-duration="2000" style={{position:'absolute', top:'700px',left:'35px'}}><BiStop style={{fontSize:'40px',color:'#0F4C81'}}/></div>
                            <div data-aos="fade-down" aos-duration="2000" style={{position:'absolute', top:'950px',left:'35px'}}><BiStop style={{fontSize:'40px',color:'#0F4C81'}}/></div>
                            <div data-aos="fade-down" aos-duration="2000" style={{position:'absolute', top:'1200px',left:'35px'}}><BiStop style={{fontSize:'40px',color:'#0F4C81'}}/></div>
                            <div data-aos="fade-down" aos-duration="2000" style={{position:'absolute', top:'1450px',left:'35px'}}><BiStop style={{fontSize:'40px',color:'#0F4C81'}}/></div>
                            <div data-aos="fade-down" aos-duration="2000" style={{position:'absolute', top:'1700px',left:'35px'}}><BiStop style={{fontSize:'40px',color:'#0F4C81'}}/></div>
                        </Col>
                        <Col lg={11}>
                        <div className={styles.secondMain}>
                
                <h1 className={styles.secondHeading} data-aos="zoom-in">Мероприятия и ценности</h1>
            
            </div>
            <Container fluid>
                <Row>
                    
                    <Col lg={12}>
                        <p className={styles.secondText} data-aos="zoom-in-up">Вдали, за словесными горами, вдали от земель Вокала и Консонантии, живут слепые тексты. Они живут отдельно

По отдельности они живут в Bookmarksgroveda, большом языковом океане на Семантическом побережье. По их местам протекает небольшая речка Дуден, которая снабжает их необходимыми регелиалами. Это райская страна, где жареные части предложения летят вам в рот. Даже мощный жест не может слепо контролировать тексты, а это почти ностографическая жизнь.

</p>
                    </Col>
                    <Col lg={12}>
                      <div className={styles.container}>
                      <div className={styles.box}>
                       <img src={school1} className={styles.secondImage} data-aos="zoom-in-up"/>
                       <span>Праздник "Навруз"</span>
                       </div>
                       <div className={styles.box}>
                       <img src={school2} className={styles.secondImage} data-aos="zoom-in-up"/>
                       <span>День независимости</span>
                       </div>
                       <div className={styles.box}>
                       <img src={school4} className={styles.secondImage} data-aos="zoom-in-up"/>
                       <span>Выпускной</span>
                       </div>
                      </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className={styles.transport}>
            <img src={school5} className={styles.secondImage} data-aos="zoom-in-up"/>
            </Col>
            <Col lg={8} md={12} sm={12} className={styles.transporttext} data-aos="zoom-in-up" >
                  <h1>Транспортные услуги</h1>
                  <p>Есть много вариантов путешествий по кампусу.
Там живут слепые тексты. По отдельности они живут в Bookmarksgroveda, большом языковом океане на Семантическом побережье. По их местам протекает небольшая речка Дуден, которая снабжает их необходимыми регелиалами. Это парадизматично. Это страна небесной математики, где летают жареные части предложения.</p>
                  <h1>Паркинг</h1>
                  <p>Западная часть компаса имеет более 1000 парковочных мест и работает круглосуточно. Мы следим за тем, чтобы все было под контролем.</p>
            </Col>
                </Row>
            </Container>
                        </Col>
                        <Col lg={12} style={{marginTop:'100px',padding:'0', height:'450px'}}>
             <PannellumReactRu/>
            </Col>
            <Col lg={1} className={styles.iconPath}>
                            <div data-aos="fade-down" aos-duration="2000" style={{position:'absolute', top:'200px',left:'35px'}}><BiStop style={{fontSize:'40px',color:'black'}}/></div>
                            <div data-aos="fade-down" aos-duration="2000"  style={{position:'absolute', top: '450px',left:'35px'}}><BiStop style={{fontSize:'40px',color:'black'}}/></div>
                            <div data-aos="fade-down" aos-duration="2000" style={{position:'absolute', top:'700px',left:'35px'}}><BiStop style={{fontSize:'40px',color:'black'}}/></div>
                            <div data-aos="fade-down" aos-duration="2000" style={{position:'absolute', top:'950px',left:'35px'}}><BiStop style={{fontSize:'40px',color:'black'}}/></div>
                            <div data-aos="fade-down" aos-duration="2000" style={{position:'absolute', top:'1200px',left:'35px'}}><BiStop style={{fontSize:'40px',color:'black'}}/></div>
                            <div data-aos="fade-down" aos-duration="2000" style={{position:'absolute', top:'1450px',left:'35px'}}><BiStop style={{fontSize:'40px',color:'black'}}/></div>
                            
                            
            </Col>
            <Col lg={11} md={12} sm={12}>
                <Row>
              
                    <Col lg={4} md={6} sm={12} className={styles.cardBolimlar}  data-aos="zoom-in-up">
                        <img src={school7}/>
                        <div style={{backgroundColor:'#0F4C81',marginTop:'30px',padding:'10%',height:'380px'}}>
                        <h1>Школьная кухня...</h1>
                        <p>По отдельности они живут в Bookmarksgroveda, большом языковом океане на Семантическом побережье. Небольшая река называется Дуденмут.</p>
                        <h3 style={{ marginBottom:'20px'}} ><Link to="/maktaboshxonasi/ru" style={{color:'rgba(255,255,255,0.7)',textDecoration:'none'}}>Batafsil <BiRightArrowAlt style={{fontSize:'30px',color:'rgba(255,255,255,0.7)'}}/></Link></h3>
                       
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className={styles.cardBolimlar}  data-aos="zoom-in-up">
                        <img src={school8}/>
                        <div style={{backgroundColor:'#0F4C81',marginTop:'30px',padding:'10%',height:'380px'}}>
                        <h1>Спортивная подготовка</h1>
                        <p>По отдельности они живут в Bookmarksgroveda, большом языковом океане на Семантическом побережье. Небольшая река называется Дуденмут.</p>
                        <h3 style={{ marginBottom:'20px'}} ><Link to="/sportmashgulotlari/ru" style={{color:'rgba(255,255,255,0.7)',textDecoration:'none'}}>Batafsil <BiRightArrowAlt style={{fontSize:'30px',color:'rgba(255,255,255,0.7)'}}/></Link></h3>
                        
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className={styles.cardBolimlar} style={{marginRight:'0%'}}  data-aos="zoom-in-up">
                        <img src={school9}/>
                        <div style={{backgroundColor:'#0F4C81',marginTop:'30px',padding:'10%',height:'380px'}}>
                        <h1>Искусство и культура</h1>
                        <p>По отдельности они живут в Bookmarksgroveda, большом языковом океане на Семантическом побережье. Небольшая река называется Дуденмут.</p>
                        <h3 style={{ marginBottom:'20px'}} ><Link to="/sanatvamadaniyat/ru" style={{color:'rgba(255,255,255,0.7)',textDecoration:'none'}}>Batafsil <BiRightArrowAlt style={{fontSize:'30px',color:'rgba(255,255,255,0.7)'}}/></Link></h3>

                       
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className={styles.cardBolimlar}  data-aos="zoom-in-up">
                        <img src={school10} />
                        <div style={{backgroundColor:'#0F4C81',marginTop:'30px',padding:'10%',height:'380px'}}>
                        <h1>Информационные технологии</h1>
                       <p>По отдельности они живут в Bookmarksgroveda, большом языковом океане на Семантическом побережье. Небольшая река называется Дуденмут.</p>
                        <h3 style={{ marginBottom:'20px'}} ><Link to="/axborottexnologiyalari/ru" style={{color:'rgba(255,255,255,0.7)',textDecoration:'none'}}>Batafsil <BiRightArrowAlt style={{fontSize:'30px',color:'rgba(255,255,255,0.7)'}}/></Link></h3>

                       
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className={styles.cardBolimlar}  data-aos="zoom-in-up">
                        <img src={school11}/>
                        <div style={{backgroundColor:'#0F4C81',marginTop:'30px',padding:'10%',height:'380px'}}>
                        <h1>Безопасность и защита</h1>
                        <p>По отдельности они живут в Bookmarksgroveda, большом языковом океане на Семантическом побережье. Небольшая река называется Дуденмут.</p>
                        <h3 style={{ marginBottom:'20px'}} ><Link to="/xavfsizlikvaqoriqlash/ru" style={{color:'rgba(255,255,255,0.7)',textDecoration:'none'}}>Batafsil <BiRightArrowAlt style={{fontSize:'30px',color:'rgba(255,255,255,0.7)'}}/></Link></h3>

                        
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className={styles.cardBolimlar} style={{marginRight:'0%'}}  data-aos="zoom-in-up"> 
                        <img src={school12}/>
                        <div style={{backgroundColor:'#0F4C81',marginTop:'30px',padding:'10%',height:'380px'}}>
                        <h1>Здоровье и добра</h1>
                        <p>По отдельности они живут в Bookmarksgroveda, большом языковом океане на Семантическом побережье. Небольшая река называется Дуденмут.</p>
                        <h3 style={{ marginBottom:'20px'}} ><Link to="/soglikvayaxshilik/ru" style={{color:'rgba(255,255,255,0.7)',textDecoration:'none'}}>Batafsil <BiRightArrowAlt style={{fontSize:'30px',color:'rgba(255,255,255,0.7)'}}/></Link></h3>

                        </div>
                    </Col>
                </Row>
            </Col>
            <Col lg={12}>
                <Row>
                    <Col lg={6} md={6} sm={12} className={styles.director}>
                        <img src={school13}/>
                    </Col>
                    <Col lg={6} md={6} sm={12} className={styles.director} style={{backgroundColor:'#0F4C81',padding:'10%'}}>
                        <p>Наша цель - быть в центре индустрии финансовых услуг по мере расширения бизнеса.</p>
                        <h1>John Smith / CEO Of Financity</h1>
                    </Col>
                </Row>
            </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
