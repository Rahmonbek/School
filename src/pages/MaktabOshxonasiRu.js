import React, { Component } from 'react'
import styles from  '../css/maktaboshxonasi.module.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import school1 from '../img/school14.jpg'
import school2 from '../img/school15.jpg'
import school3 from '../img/school16.jpg'
import school4 from '../img/school17.jpg'
import school5 from '../img/school18.jpg'
import school6 from '../img/school7.jpg'
import {Container,Row,Col} from 'react-bootstrap'
import Aos from 'aos'
import {BiStop} from "react-icons/bi";

export default class MaktabOshxonasiRu extends Component {
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
              items: 4
            },
            desktop: {
              breakpoint: { max: 992, min: 769 },
              items: 3
            },
            tablet: {
              breakpoint: { max: 768, min: 567 },
              items: 2
            },
            mobile: {
              breakpoint: { max: 566, min: 0 },
              items: 1
            }
          }
        return (
            <div>
                <div className={styles.top}>
                    <h1>Школьная Кухня</h1>
                     <Carousel
                     responsive={responsive} infinite={true}
                     autoPlay={this.props.deviceType !== "mobile" ? true : false}
                     autoPlaySpeed={3000}
                     keyBoardControl={true}
                        showDots={false}
                        >
                       <div>
                           <img src={school1}/>
                       </div>
                       <div>
                           <img src={school2}/>
                       </div>
                       <div>
                           <img src={school3}/>
                       </div>
                       <div>
                           <img src={school4}/>
                       </div>
                       <div>
                           <img src={school5}/>
                       </div>
                       <div>
                           <img src={school6}/>
                       </div>
                    </Carousel>
                    
                </div>
                <Container fluid style={{marginTop:'50px'}}>
                    <Row>
                    <Col lg={1} className={styles.iconPath}>
                            <div data-aos="fade-down" aos-duration="2000" style={{position:'absolute', top:'200px',left:'35px'}}><BiStop style={{fontSize:'40px',color:'#0F4C81'}}/></div>
                            <div data-aos="fade-down" aos-duration="2000"  style={{position:'absolute', top: '450px',left:'35px'}}><BiStop style={{fontSize:'40px',color:'#0F4C81'}}/></div>
                            <div data-aos="fade-down" aos-duration="2000" style={{position:'absolute', top:'700px',left:'35px'}}><BiStop style={{fontSize:'40px',color:'#0F4C81'}}/></div>
                            <div data-aos="fade-down" aos-duration="2000" style={{position:'absolute', top:'950px',left:'35px'}}><BiStop style={{fontSize:'40px',color:'#0F4C81'}}/></div>
                            <div data-aos="fade-down" aos-duration="2000" style={{position:'absolute', top:'1200px',left:'35px'}}><BiStop style={{fontSize:'40px',color:'#0F4C81'}}/></div>
                            
                           
                        </Col>
                        <Col lg={11}>
                        <Row>
                        <Col lg={4} md={12} sm={12} className={styles.Tushlik}>
                            <img src={school5} className={styles.secondImage} data-aos="zoom-in-up"/>
                            </Col>
                            <Col lg={8} md={12} sm={12} className={styles.maktabTushlik} data-aos="zoom-in-up" >
                                <h1>Школьное питание</h1>
                                <p>Школьные обеды имеют решающее значение для здоровья и благополучия учащихся, особенно для учащихся с низкими доходами, и учащимся предоставляется питание, необходимое для обучения в течение дня. Исследования показывают, что бесплатные или скидки на школьные обеды снижают уровень продовольственной безопасности, ожирения и ухудшения здоровья. Кроме того, новые стандарты школьного питания положительно влияют на выбор и потребление учащимися продуктов питания, особенно фруктов и овощей.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12} style={{textAlign:'center',marginTop:'100px'}}>
                                <h1 style={{fontSize:'70px',fontFamily:'Lobster'}} className={styles.cardText} data-aos="zoom-in-up">
                                Факты
                                </h1>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                            <div className={styles.card} data-aos="zoom-in-up">
                                <p>Возобновляемые источники питания должны соответствовать федеральным стандартам питания. Обед в национальной программе школьных обедов обеспечивает одну треть или более рекомендуемых уровней основных питательных веществ.</p>
                            </div>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                            <div className={styles.card1} data-aos="zoom-in-up">
                            <p>Возобновляемые продукты должны обеспечивать не более 30 процентов жира и менее 10 процентов калорий из насыщенных жиров.</p>                               
                            </div>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                            <div className={styles.card2} data-aos="zoom-in-up">
                             <p>Начиная с 2012-2013 учебного года новые стандарты поэтапного питания потребовали от школ увеличить количество цельнозерновых, фруктов и овощей, предоставляемых в рамках Национальной программы школьных обедов.</p>
                             
                                
                            </div>
                            </Col>
                        </Row>
                        
                        </Col>
                    </Row>
                </Container>
                <Container fluid className={styles.ContainerMenyu}>
                <Row>
                            <Col lg={2} md={4} sm={6}>
                                <Row>
                                    <Col lg={12}>
                                        <div className={styles.cardMenyu1}>
                                            <h1>Понедельник</h1>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <div className={styles.cardMenyu}>
                                           
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={2} md={4} sm={6}>
                                <Row>
                                    <Col lg={12}>
                                        <div className={styles.cardMenyu1}>
                                            <h1>Вторник</h1>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={2} md={4} sm={6}>
                                <Row>
                                    <Col lg={12}>
                                        <div className={styles.cardMenyu1}>
                                            <h1>Cреда</h1>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={2} md={4} sm={6}>
                                <Row>
                                    <Col lg={12}>
                                        <div className={styles.cardMenyu1}>
                                            <h1>Четверг</h1>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                           
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={2} md={4} sm={6}>
                                <Row>
                                    <Col lg={12}>
                                        <div className={styles.cardMenyu1}>
                                            <h1>Пятница</h1>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                           
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={2} md={4} sm={6}>
                                <Row>
                                    <Col lg={12}>
                                        <div className={styles.cardMenyu1}>
                                            <h1>Суббота</h1>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                </Container>
                <Container  className={styles.galereya}>
                    <Row>
                        <Col lg={12}>
                            <h1 className={styles.galereyaText}>Галерея</h1>
                        </Col>
                        <Col lg={4}>
                            <img src={school1}/>
                        </Col>
                        <Col lg={4}>
                            <img src={school2}/>
                        </Col><Col lg={4}>
                            <img src={school3}/>
                        </Col>
                        <Col lg={4}>
                            <img src={school4}/>
                        </Col><Col lg={4}>
                            <img src={school5}/>
                        </Col><Col lg={4}>
                            <img src={school6}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
