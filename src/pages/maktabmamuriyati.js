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
import axios from 'axios';
import { url } from '../host/Host';
import {Carousel as Car} from 'react-bootstrap'
import Global from '../host/Global';
import { FadeLoader } from 'react-spinners';

export default class Maktabmamuriyati extends Component {
state={
  direktor:null,
  orin1:null,
  orin2:null,
  orin3:null,
  loader:true,
  
}
getStaff=()=>{
  axios.get(`${url}/staff-by-school/${Global.schoolId}/`).then(res=>{
    var direktor=null
  var orin1=null
  var orin2=null
  var orin3=null
    res.data.map(item=>{
      if(item.speciality.length!==0){
        item.speciality.map(item1=>{
          if(item1===3){
            direktor=item
          }
          if(item1===4){
            orin1=item
          }
          if(item1===5){
            orin2=item
          }
          if(item1===6){
            orin3=item
          }
        })
      }

    })
    this.setState({
      direktor:direktor,
  orin1:orin1,
  orin2:orin2,
  orin3:orin3,
loader:false,    
})

  }).catch(err=>{
    
    this.setState({
  loader:false,    
})
  })
}

  componentDidMount(){
    Aos.init({
        duration:2000
    })
    this.getStaff()
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
              {this.state.loader === true ? 
          <div className="loaderT">
            <FadeLoader color="blue" loading={this.state.loader} size={120} />
          </div>
         : 
            <>  <br/><br/><br/>
            <Car style={{position:'relative', top:'-20px'}}>
            <Car.Item>
    <img
      className="d-block w-100"
      style={{height:'90vh'}}
      src={this.state.direktor!==null?this.state.direktor.image!==null?this.state.direktor.image:school1:''}
      alt="First slide"
    />
    <Car.Caption>
      
      <p style={{backgroundColor:'#00000091', padding:'10px', position:'relative', width:'100%', fontSize:'24px',  color:'white'}}>Maktab direktori</p>
    </Car.Caption>
  </Car.Item>
  <Car.Item>
    <img
      className="d-block w-100"
      style={{height:'90vh'}}
      src={this.state.orin1!==null?this.state.orin1.image!==null?this.state.orin1.image:'':''}
      alt="First slide"
    />
    <Car.Caption>
      
      <p style={{backgroundColor:'#00000091', padding:'10px', position:'relative', width:'100%', fontSize:'24px',  color:'white'}}>O'quv va tarbiyaviy ishlar bo'yicha direktor o'rinbosari</p>
    </Car.Caption>
  </Car.Item>
  <Car.Item>
    <img
      className="d-block w-100"
      style={{height:'90vh'}}
      src={this.state.orin2!==null?this.state.orin2.image!==null?this.state.orin2.image:'':''}
      alt="Second slide"
    />

    <Car.Caption>
      
      <p style={{backgroundColor:'#00000091', padding:'10px', position:'relative', width:'100%', fontSize:'24px',  color:'white'}}>Ma'naviy-ma'rifiy ishlar bo'yicha direktor o'rinbosari</p>
    </Car.Caption>
  </Car.Item>
  <Car.Item>
    <img
      className="d-block w-100"
      style={{height:'90vh'}}
      src={this.state.orin3!==null?this.state.orin3.image!==null?this.state.orin3.image:'':''}
      alt="Third slide"
    />

    <Car.Caption>
      
      <p style={{backgroundColor:'#00000091', padding:'10px', position:'relative', width:'100%', fontSize:'24px',  color:'white'}}>Ma'muriy-xo’jalik ishlar bo'yicha direktor o'rinbosari</p>
    </Car.Caption>
  </Car.Item>
</Car>
                <Container>
                    <Row>
                    <Col lg={12}>
                            <div className={styles.carddirektor} data-aos="zoom-in-up">
                                <Row>
                                    <Col lg={4} style={{border:'1px solid #0F4C81',backgroundColor:'#0F4C81',height:'400px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                        <img src={this.state.direktor!==null?this.state.direktor.image!==null?this.state.direktor.image:school1:''}/>
                                        <p style={{textAlign:'center'}}>Maktab direktori</p>
                                    </Col>
                                    <Col className={styles.cardwrap} lg={8} style={{border:'1px solid #0F4C81',backgroundColor:'#FCFCFC',paddingTop:'60px', height:'400px', overflowY:'auto'}}>
                                      <Row>  
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>F.I.O:</span>
                                      <span className={styles.direktor}>  {this.state.orin1!==null?this.state.direktor.full_name:''}</span>
                                        </Col>
                                        {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Tug'ilgan sanasi:</span>
                                      <span className={styles.direktor}> 1974-yil</span>
                                        </Col> */}
                                      
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Mutaxasisligi:</span>
                                      <span className={styles.direktor}>{this.state.orin1!==null?this.state.direktor.position:''}</span>
                                        </Col>
                                        {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Bitirgan oliygohi:</span>
                                      <span className={styles.direktor}>O'zbekiston Miliiy Universiteti</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>E-mail pochta:</span>
                                      <span className={styles.direktor}>alisherovich@gmail.com</span>
                                        </Col> */}
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Telefon raqami:</span>
                                      <span className={styles.direktor}>{this.state.orin1!==null?this.state.direktor.phone:''}</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Qo'shimcha:</span>
                                      <span className={styles.direktor}>{this.state.orin1!==null?this.state.direktor.description:''}</span>
                                        </Col>
                                     </Row>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className={styles.carddirektor} data-aos="zoom-in-up">
                                <Row>
                                    <Col className={styles.cardwrap} lg={8} style={{border:'1px solid #0F4C81',backgroundColor:'#FCFCFC',paddingTop:'60px'}}>
                                      <Row>  
                                      <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>F.I.O:</span>
                                      <span className={styles.direktor}>  {this.state.orin1!==null?this.state.orin1.full_name:''}</span>
                                        </Col>
                                        {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Tug'ilgan sanasi:</span>
                                      <span className={styles.direktor}> 1974-yil</span>
                                        </Col> */}
                                      
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Mutaxasisligi:</span>
                                      <span className={styles.direktor}>{this.state.orin1!==null?this.state.orin1.position:''}</span>
                                        </Col>
                                        {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Bitirgan oliygohi:</span>
                                      <span className={styles.direktor}>O'zbekiston Miliiy Universiteti</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>E-mail pochta:</span>
                                      <span className={styles.direktor}>alisherovich@gmail.com</span>
                                        </Col> */}
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Telefon raqami:</span>
                                      <span className={styles.direktor}>{this.state.orin1!==null?this.state.orin1.phone:''}</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Qo'shimcha:</span>
                                      <span className={styles.direktor}>{this.state.orin1!==null?this.state.orin1.description:''}</span>
                                        </Col>
                                     </Row>
                                    </Col>
                                    <Col lg={4} style={{border:'1px solid #0F4C81',backgroundColor:'#0F4C81',height:'400px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                        <img src={this.state.orin1!==null?this.state.orin1.image!==null?this.state.orin1.image:'':''}/>
                                        <p style={{textAlign:'center'}}>O'quv va tarbiyaviy ishlar bo'yicha direktor o'rinbosari</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className={styles.carddirektor} data-aos="zoom-in-up">
                                <Row>
                                    <Col lg={4} style={{border:'1px solid #0F4C81',backgroundColor:'#0F4C81',height:'400px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                        <img src={this.state.orin2!==null?this.state.orin2.image!==null?this.state.orin2.image:'':''}/>
                                        <p style={{textAlign:'center'}}>Ma'naviy-ma'rifiy ishlar bo'yicha direktor o'rinbosari</p>
                                    </Col>
                                    <Col className={styles.cardwrap} lg={8} style={{border:'1px solid #0F4C81',backgroundColor:'#FCFCFC',paddingTop:'60px', height:'400px', overflowY:'auto'}}>
                                      <Row>  
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>F.I.O:</span>
                                      <span className={styles.direktor}>  {this.state.orin1!==null?this.state.orin2.full_name:''}</span>
                                        </Col>
                                        {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Tug'ilgan sanasi:</span>
                                      <span className={styles.direktor}> 1974-yil</span>
                                        </Col> */}
                                      
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Mutaxasisligi:</span>
                                      <span className={styles.direktor}>{this.state.orin1!==null?this.state.orin2.position:''}</span>
                                        </Col>
                                        {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Bitirgan oliygohi:</span>
                                      <span className={styles.direktor}>O'zbekiston Miliiy Universiteti</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>E-mail pochta:</span>
                                      <span className={styles.direktor}>alisherovich@gmail.com</span>
                                        </Col> */}
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Telefon raqami:</span>
                                      <span className={styles.direktor}>{this.state.orin1!==null?this.state.orin2.phone:''}</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Qo'shimcha:</span>
                                      <span className={styles.direktor}>{this.state.orin1!==null?this.state.orin2.description:''}</span>
                                        </Col>
                                     </Row>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className={styles.carddirektor} data-aos="zoom-in-up">
                                <Row>
                                    <Col className={styles.cardwrap} lg={8} style={{border:'1px solid #0F4C81',backgroundColor:'#FCFCFC',paddingTop:'60px'}}>
                                      <Row>  
                                      <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>F.I.O:</span>
                                      <span className={styles.direktor}>  {this.state.orin3!==null?this.state.orin3.full_name:''}</span>
                                        </Col>
                                        {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Tug'ilgan sanasi:</span>
                                      <span className={styles.direktor}> 1974-yil</span>
                                        </Col> */}
                                      
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Mutaxasisligi:</span>
                                      <span className={styles.direktor}>{this.state.orin3!==null?this.state.orin3.position:''}</span>
                                        </Col>
                                        {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Bitirgan oliygohi:</span>
                                      <span className={styles.direktor}>O'zbekiston Miliiy Universiteti</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>E-mail pochta:</span>
                                      <span className={styles.direktor}>alisherovich@gmail.com</span>
                                        </Col> */}
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Telefon raqami:</span>
                                      <span className={styles.direktor}>{this.state.orin3!==null?this.state.orin3.phone:''}</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Qo'shimcha:</span>
                                      <span className={styles.direktor}>{this.state.orin3!==null?this.state.orin3.description:''}</span>
                                        </Col>
                                     </Row>
                                    </Col>
                                    <Col lg={4} style={{border:'1px solid #0F4C81',backgroundColor:'#0F4C81',height:'400px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                        <img src={this.state.orin3!==null?this.state.orin3.image!==null?this.state.orin3.image:'':''}/>
                                        <p style={{textAlign:'center'}}>Ma'muriy-xo’jalik ishlar bo'yicha direktor o'rinbosari</p>
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
      <div className={styles.imgcontainer} style={{marginTop:'10px'}}>
        <img src={this.state.direktor!==null?this.state.direktor.image!==null?this.state.direktor.image:school1:''} className={styles.personimg} />
        <span className={styles.quoteicon}>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className={styles.author}>{this.state.orin1!==null?this.state.direktor.full_name:''}</h4>
      <p className={styles.job}>Maktab direktori</p>
      <br/>
      
    </article>
                       </div>
                       <div>
                       <article className='review' data-aos="zoom-in-up">
      <div className={styles.imgcontainer} style={{marginTop:'10px'}}>
        <img src={this.state.orin1!==null?this.state.orin1.image!==null?this.state.orin1.image:'':''} className={styles.personimg} />
        <span className={styles.quoteicon}>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className={styles.author}>{this.state.orin1!==null?this.state.orin1.full_name:''}</h4>
      <p className={styles.job}>O'quv va tarbiyaviy ishlar bo'yicha direktor o'rinbosari</p>
      <br/>
      
    </article>
                       </div>   
                       <div>
                       <article className='review' data-aos="zoom-in-up">
      <div className={styles.imgcontainer} style={{marginTop:'10px'}}>
        <img src={this.state.orin2!==null?this.state.orin2.image!==null?this.state.orin2.image:'':''} className={styles.personimg} />
        <span className={styles.quoteicon}>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className={styles.author}>{this.state.orin1!==null?this.state.orin2.full_name:''}</h4>
      <p className={styles.job}>Ma'naviy-ma'rifiy ishlar bo'yicha direktor o'rinbosari</p>
      <br/>
      
    </article>
                       </div>
                       <div>
                       <article className='review' data-aos="zoom-in-up">
      <div className={styles.imgcontainer} style={{marginTop:'10px'}}>
        <img src={this.state.orin3!==null?this.state.orin3.image!==null?this.state.orin3.image:'':''} className={styles.personimg} />
        <span className={styles.quoteicon}>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className={styles.author}>{this.state.orin3!==null?this.state.orin3.full_name:''}</h4>
      <p className={styles.job}>Ma'muriy-xo’jalik ishlar bo'yicha direktor o'rinbosari</p>
      <br/>
      
    </article>
                       </div>
                    </Carousel>
                        </Col>

                    </Row>
                </Container></>
      }  </div>
        )
    }
}
