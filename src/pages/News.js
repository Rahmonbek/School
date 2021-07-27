import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '../css/News.module.css'

import new1 from '../img/new1.jpg'
import new2 from '../img/new2.jpg'
import new3 from '../img/new3.jpg'
import new4 from '../img/new4.jpg'
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default class News extends Component {
  state={
    news:[]
}


  render() {
        return (
            <div style={{position:'sticky', top:'0px', right:'0px', paddingRight:'5px', borderLeft:'solid 1px #02024E', paddingLeft:'3px'}}>
    
                    <div className={styles.recentnews}>

                            <div className={styles.title}>
                                <h5>So'nggi yangiliklar</h5>
                            </div>
                            <div className={styles.body}>
                            <Row>
                             <Col md={4} sm={4} lg={4} className={styles.new}>
                               <div className={styles.img}>
                                 <img src={new1} />
                               </div>
                              </Col>
                              <Col md={8} sm={8} lg={8} className={styles.new}>
                              <div className={styles.text}>
                              <p><i class="far fa-calendar-alt"></i> 04.06.2021   </p>
                              <h6>"Al-Xorazmiy avlodlari" festivali tashkil etildi.</h6>
                                </div> 
                              </Col>
                              <hr/><Col md={4} sm={4} lg={4} className={styles.new}>
                               <div className={styles.img}>
                                 <img src={new2} />
                               </div>
                              </Col>
                              <Col md={8} sm={8} lg={8} className={styles.new}>
                              <div className={styles.text}>
                              <p><i class="far fa-calendar-alt"></i> 04.06.2021   </p>
                              <h6>"Al-Xorazmiy avlodlari" festivali tashkil etildi.</h6>
                                </div> 
                              </Col>
                              <hr/><Col md={4} sm={4} lg={4}className={styles.new}>
                               <div className={styles.img}>
                                 <img src={new1} />
                               </div>
                              </Col>
                              <Col md={8} sm={8} lg={8} className={styles.new}>
                              <div className={styles.text}>
                              <p><i class="far fa-calendar-alt"></i> 04.06.2021   </p>
                              <h6>"Al-Xorazmiy avlodlari" festivali tashkil etildi.</h6>
                                </div> 
                              </Col>
                              <hr/><Col md={4} sm={4} lg={4} className={styles.new}>
                               <div className={styles.img}>
                                 <img src={new3} />
                               </div>
                              </Col>
                              <Col md={8} sm={8} lg={8} className={styles.new}>
                              <div className={styles.text}>
                              <p><i class="far fa-calendar-alt"></i> 04.06.2021   </p>
                              <h6>"Al-Xorazmiy avlodlari" festivali tashkil etildi.</h6>
                                </div> 
                              </Col>
                              <hr/><Col md={4} sm={4} lg={4} className={styles.new}>
                               <div className={styles.img}>
                                 <img src={new4} />
                               </div>
                              </Col>
                              <Col md={8} sm={8} lg={8} className={styles.new}>
                              <div className={styles.text}>
                              <p><i class="far fa-calendar-alt"></i> 04.06.2021   </p>
                              <h6>"Al-Xorazmiy avlodlari" festivali tashkil etildi.</h6>
                                </div> 
                              </Col>
                              <hr/><Col md={4} sm={4} lg={4} className={styles.new}> 
                               <div className={styles.img}>
                                 <img src={new1} />
                               </div>
                              </Col>
                              <Col md={8} sm={8} lg={8} className={styles.new}>
                              <div className={styles.text}>
                              <p><i class="far fa-calendar-alt"></i> 04.06.2021   </p>
                              <h6>"Al-Xorazmiy avlodlari" festivali tashkil etildi.</h6>
                                </div> 
                              </Col>
                            </Row>
                            </div></div>
                    
           
            </div>
        )
    }
}
