import React, { Component } from 'react'
import {FaDownload, FaFolder} from 'react-icons/fa'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import './darslik.css'
import { Rate } from 'antd';
import { sinf11,sinf10,sinf9,sinf8,sinf7,sinf1,sinf2,sinf3,sinf4,sinf5,sinf6 } from './darslarjson'

const desc = ['juda yomon', 'yomon', 'yaxshi', 'ajoyib', 'juda ajoyib'];

export default class Darsliklar extends Component {
  state = {
    value: 3,
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <div >
   <section style={{padding:'30px'}} ><h1>Darsliklar</h1>
  <details >
    <summary style={{fontSize:'30px',margin:'20px'}}><FaFolder style={{marginRight:'20px',position:'relative',top:'-4px'}}/>11-sinf</summary>  
<Row>
  {sinf11.map(item=>{
    return(
  <Col md={12} lg={12} xl={6}>
  <div className="cart">
    <div className="kitob">
    <img src={item.img}/>
   </div>
    <div className="sharh">
      <h3 >{item.title}</h3>
      <p>{item.text}</p> 
      <span >
        <Rate tooltips={desc} onChange={this.handleChange} value={value} />
        {value ? <span class="ant-rate-text">{desc[value - 1]}</span> : ''}
      </span>
      <a   href={item.url}> <Button variant="primary"><FaDownload style={{marginRight:'20px',position:'relative',top:'-2px'}}/>Yuklab olish</Button></a>
    </div>
    </div>
  </Col>)}
  )}
  </Row>
  </details>

  <details>

    <summary style={{fontSize:'30px',margin:'20px'}}><FaFolder style={{marginRight:'20px',position:'relative',top:'-4px'}}/>10-sinf</summary>
    
    <Row>
  {sinf10.map(item=>{
    return(
  <Col md={12} lg={12} xl={6}>
  <div className="cart">
    <div className="kitob">
    <img src={item.img}/>
   </div>
    <div className="sharh">
      <h3 >{item.title}</h3>
      <p>{item.text}</p> 
      <span >
        <Rate tooltips={desc} onChange={this.handleChange} value={value} />
        {value ? <span class="ant-rate-text">{desc[value - 1]}</span> : ''}
      </span>
      <a   href={item.url}> <Button variant="primary"><FaDownload style={{marginRight:'20px',position:'relative',top:'-2px'}}/>Yuklab olish</Button></a>
    </div>
    </div>
  </Col>)}
  )}
  </Row> 

  </details>

  <details>
    <summary style={{fontSize:'30px',margin:'20px'}}><FaFolder style={{marginRight:'20px',position:'relative',top:'-4px'}}/>9-sinf</summary>
    <Row>
  {sinf9.map(item=>{
    return(
  <Col md={12} lg={12} xl={6}>
  <div className="cart">
    <div className="kitob">
    <img src={item.img}/>
   </div>
    <div className="sharh">
      <h3 >{item.title}</h3>
      <p>{item.text}</p> 
      <span >
        <Rate tooltips={desc} onChange={this.handleChange} value={value} />
        {value ? <span class="ant-rate-text">{desc[value - 1]}</span> : ''}
      </span>
      <a   href={item.url}> <Button variant="primary"><FaDownload style={{marginRight:'20px',position:'relative',top:'-2px'}}/>Yuklab olish</Button></a>
    </div>
    </div>
  </Col>)}
  )}
  </Row>
  </details>
  <details>
    <summary style={{fontSize:'30px',margin:'20px'}}><FaFolder style={{marginRight:'20px',position:'relative',top:'-4px'}}/>8-sinf</summary>
    
    <Row>
  {sinf8.map(item=>{
    return(
  <Col md={12} lg={12} xl={6}>
  <div className="cart">
    <div className="kitob">
    <img src={item.img}/>
   </div>
    <div className="sharh">
      <h3 >{item.title}</h3>
      <p>{item.text}</p> 
      <span >
        <Rate tooltips={desc} onChange={this.handleChange} value={value} />
        {value ? <span class="ant-rate-text">{desc[value - 1]}</span> : ''}
      </span>
      <a   href={item.url}> <Button variant="primary"><FaDownload style={{marginRight:'20px',position:'relative',top:'-2px'}}/>Yuklab olish</Button></a>
    </div>
    </div>
  </Col>)}
  )}
  </Row>
   

  </details>
  <details >
  <summary style={{fontSize:'30px',margin:'20px'}}><FaFolder style={{marginRight:'20px',position:'relative',top:'-4px'}}/>7-sinf</summary>
  <Row>
  {sinf7.map(item=>{
    return(
  <Col md={12} lg={12} xl={6}>
  <div className="cart">
    <div className="kitob">
    <img src={item.img}/>
   </div>
    <div className="sharh">
      <h3 >{item.title}</h3>
      <p>{item.text}</p> 
      <span >
        <Rate tooltips={desc} onChange={this.handleChange} value={value} />
        {value ? <span class="ant-rate-text">{desc[value - 1]}</span> : ''}
      </span>
      <a   href={item.url}> <Button variant="primary"><FaDownload style={{marginRight:'20px',position:'relative',top:'-2px'}}/>Yuklab olish</Button></a>
    </div>
    </div>
  </Col>)}
  )}
  </Row>
  </details>
  <details >
  <summary style={{fontSize:'30px',margin:'20px'}}><FaFolder style={{marginRight:'20px',position:'relative',top:'-4px'}}/>6-sinf</summary>
  <Row>
  {sinf6.map(item=>{
    return(
  <Col md={12} lg={12} xl={6}>
  <div className="cart">
    <div className="kitob">
    <img src={item.img}/>
   </div>
    <div className="sharh">
      <h3 >{item.title}</h3>
      <p>{item.text}</p> 
      <span >
        <Rate tooltips={desc} onChange={this.handleChange} value={value} />
        {value ? <span class="ant-rate-text">{desc[value - 1]}</span> : ''}
      </span>
      <a   href={item.url}> <Button variant="primary"><FaDownload style={{marginRight:'20px',position:'relative',top:'-2px'}}/>Yuklab olish</Button></a>
    </div>
    </div>
  </Col>)}
  )}
  </Row>
  </details>
  <details >
  <summary style={{fontSize:'30px',margin:'20px'}}><FaFolder style={{marginRight:'20px',position:'relative',top:'-4px'}}/>5-sinf</summary>
  <Row>
  {sinf5.map(item=>{
    return(
  <Col md={12} lg={12} xl={6}>
  <div className="cart">
    <div className="kitob">
    <img src={item.img}/>
   </div>
    <div className="sharh">
      <h3 >{item.title}</h3>
      <p>{item.text}</p> 
      <span >
        <Rate tooltips={desc} onChange={this.handleChange} value={value} />
        {value ? <span class="ant-rate-text">{desc[value - 1]}</span> : ''}
      </span>
      <a   href={item.url}> <Button variant="primary"><FaDownload style={{marginRight:'20px',position:'relative',top:'-2px'}}/>Yuklab olish</Button></a>
    </div>
    </div>
  </Col>)}
  )}
  </Row>
  </details>
  <details >
  <summary style={{fontSize:'30px',margin:'20px'}}><FaFolder style={{marginRight:'20px',position:'relative',top:'-4px'}}/>4-sinf</summary>
  <Row>
  {sinf4.map(item=>{
    return(
  <Col md={12} lg={12} xl={6}>
  <div className="cart">
    <div className="kitob">
    <img src={item.img}/>
   </div>
    <div className="sharh">
      <h3 >{item.title}</h3>
      <p>{item.text}</p> 
      <span >
        <Rate tooltips={desc} onChange={this.handleChange} value={value} />
        {value ? <span class="ant-rate-text">{desc[value - 1]}</span> : ''}
      </span>
      <a   href={item.url}> <Button variant="primary"><FaDownload style={{marginRight:'20px',position:'relative',top:'-2px'}}/>Yuklab olish</Button></a>
    </div>
    </div>
  </Col>)}
  )}
  </Row>
  </details>
  <details >
  <summary style={{fontSize:'30px',margin:'20px'}}><FaFolder style={{marginRight:'20px',position:'relative',top:'-4px'}}/>3-sinf</summary>
  <Row>
  {sinf3.map(item=>{
    return(
  <Col md={12} lg={12} xl={6}>
  <div className="cart">
    <div className="kitob">
    <img src={item.img}/>
   </div>
    <div className="sharh">
      <h3 >{item.title}</h3>
      <p>{item.text}</p> 
      <span >
        <Rate tooltips={desc} onChange={this.handleChange} value={value} />
        {value ? <span class="ant-rate-text">{desc[value - 1]}</span> : ''}
      </span>
      <a   href={item.url}> <Button variant="primary"><FaDownload style={{marginRight:'20px',position:'relative',top:'-2px'}}/>Yuklab olish</Button></a>
    </div>
    </div>
  </Col>)}
  )}
  </Row>
  </details>
  <details >
  <summary style={{fontSize:'30px',margin:'20px'}}><FaFolder style={{marginRight:'20px',position:'relative',top:'-4px'}}/>2-sinf</summary>
  <Row>
  {sinf2.map(item=>{
    return(
  <Col md={12} lg={12} xl={6}>
  <div className="cart">
    <div className="kitob">
    <img src={item.img}/>
   </div>
    <div className="sharh">
      <h3 >{item.title}</h3>
      <p>{item.text}</p> 
      <span >
        <Rate tooltips={desc} onChange={this.handleChange} value={value} />
        {value ? <span class="ant-rate-text">{desc[value - 1]}</span> : ''}
      </span>
      <a   href={item.url}> <Button variant="primary"><FaDownload style={{marginRight:'20px',position:'relative',top:'-2px'}}/>Yuklab olish</Button></a>
    </div>
    </div>
  </Col>)}
  )}
  </Row>
  </details>
  <details open>
  <summary style={{fontSize:'30px',margin:'20px'}}><FaFolder style={{marginRight:'20px',position:'relative',top:'-4px'}}/>1-sinf</summary>
  <Row>
  {sinf1.map(item=>{
    return(
  <Col md={12} lg={12} xl={6}>
  <div className="cart">
    <div className="kitob">
    <img src={item.img}/>
   </div>
    <div className="sharh">
      <h3 >{item.title}</h3>
      <p>{item.text}</p> 
      <span >
        <Rate tooltips={desc} onChange={this.handleChange} value={value} />
        {value ? <span class="ant-rate-text">{desc[value - 1]}</span> : ''}
      </span>
      <a   href={item.url}> <Button variant="primary"><FaDownload style={{marginRight:'20px',position:'relative',top:'-2px'}}/>Yuklab olish</Button></a>
    </div>
    </div>
  </Col>)}
  )}
  </Row>
  </details>
</section>
      </div>
    )
  }
}
