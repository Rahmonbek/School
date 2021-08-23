import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import style from './MaktabTadbirlari.module.css'
import rasm1 from '../img/11.jpg'
import rasm2 from '../img/12.jpg'
import rasm3 from '../img/13.jpg'
import { faClock, faMapMarkerAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import {getEvents} from '../host/Config'
export default class MaktabTadbirlari extends Component {
    state={
        events:[],
        id:0,
        number:[1,2,3]
      }  
      
      getEvents=()=>{
        getEvents().then(res=>{
       
          console.log(res.data)
          if(window.location.href.indexOf('id=')===-1){
            
           
            
            this.setState({
              events:res.data,
              
            })
           
            }
              
          
          else{
           
            this.setState({
              events:res.data,
              id:window.location.href.slice(window.location.href.indexOf('=')+1),
            
            })
            
          }
          
        }).catch(err=>{
          console.log(err)
        })
      }
        componentDidMount(){
           
         this.getEvents();
        }
    render() {
        return (
            <div>
                <div className={style.container}>
                    <h2>Maktab tadbirlari</h2>
                    <Row style={{textAlign: 'center'}}>
                        {
                            this.state.events.map((item, key)=>{
                                return(
                                key<3?(
                                        <Col xs={12} sm={12} md={4} lg={4} style={{marginTop: '15px'}}>
                            <div className={style.flipBox}>
                                <div class={style.flipBoxInner}>
                                    <div class={style.flipBoxFront}>
                                        <img src={item.image} alt="Paris" />
                                    </div>
                                    <div className={style.flipBoxBack}>
                                        <p>{item.title}</p>
                                    </div>
                                </div>
                            </div>
                            <Row className={style.map}>
                             
                                <Col xs={10} sm={10} md={10} lg={10}>
                                    <h3>{item.title}</h3>
                                    <div className={style.innerMap}>
                                        <FontAwesomeIcon className={style.redIcon1} icon={faCalendarAlt} />
                                        <span>{item.date}</span>
                                    </div>
                                    <div className={style.innerMap}>
                                        <FontAwesomeIcon className={style.redIcon1} icon={faClock} />
                                        <span>{item.time}</span>
                                    </div>
                                    <div className={style.innerMap}>
                                        <FontAwesomeIcon className={style.redIcon2} icon={faMapMarkerAlt} />
                                        <span>{item.address}</span>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                                    ):""
                                )
                            })
                        }
                        
                    </Row>
                    <Link to='/tadbirlar/uz' className={style.barchasiniKurish}>Hamma tadbirlarni ko'rish -&gt;</Link>
                    
                </div>
            </div>
        )
    }
}
