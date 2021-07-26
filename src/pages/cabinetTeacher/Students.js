import React, { Component } from 'react'
import { Col, Container, FormControl, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import style from '../../css/TeacherCss/Students.module.css'
import yuksak from '../../img/alish.png'
import gimnastika from '../../img/rayhon.jpeg'
import { Layout, Menu, Button, Form, Tooltip, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons';

export default class Students extends Component {
    render() {
        const { Header } = Layout;
        return (
            <div className={style.yutuq}>
                <Container>
                    <Layout>
                <Header className="header">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">9-A sinf</Menu.Item>
        <Menu.Item key="2">6-B sinf</Menu.Item>
        <Menu.Item key="3">8-A sinf</Menu.Item>
        <Menu.Item ><Form className="d-flex mt-2" style={{marginBottom:0}}>
        <Form.Item
        name="search">
        <Input placeholder="Search"/>
      </Form.Item>
          <Tooltip title="search">
      <Button type="primary" shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
    </Form>
    </Menu.Item>
      </Menu>
    </Header></Layout>
<Row>
<Col style={{marginTop:'20px'}} lg={4} md={6} sm={12}>
  
  <div className="card">
  <Link to='chat'>
      <img src={yuksak} className={style.image}/></Link>
      <div className={style.cardBody}>
          <h3>Davronov Alisher Diyor o'g'li</h3>
          <div style={{display:'flex', alignItems:'center', flexWrap:'wrap', height:'100%'}}><p><b>Tug'ilgan sana: </b>12.08.2004</p>
          <p style={{marginTop:'-10px'}}><b>Millati: </b>o'zbek</p>

<p style={{marginTop:'-10px'}}><b>Otasi: </b>Muhammadaliyev G'olib Davronovich</p>
<p style={{marginTop:'-10px'}}><b>Telefon raqam: </b><a href="tel:+998930830372">+998930820372</a></p>
<p style={{marginTop:'-10px'}}><b>Onasi: </b>Muhammadaliyeva Nargiza Rahimovna</p>
<p style={{marginTop:'-10px'}}><b>Telefon raqam: </b><a href="tel:+998930830371">+998930820371</a></p>
</div>
      </div>
  </div>
  
       </Col>
       
<Col style={{marginTop:'20px'}} lg={4} md={6} sm={12}>
  <div className="card">
  <Link to='chat'><img src={gimnastika} className={style.image}/></Link>
      <div className={style.cardBody}>
          <h3>Tohirova Rayhon G'olib qizi</h3>
         <div style={{display:'flex', alignItems:'center', flexWrap:'wrap', height:'100%'}}><p><b>Tug'ilgan sana: </b>12.08.2004</p>
          <p style={{marginTop:'-10px'}}><b>Millati: </b>o'zbek</p>

<p style={{marginTop:'-10px'}}><b>Otasi: </b>Farhodov G'olib Davronovich</p>
<p style={{marginTop:'-10px'}}><b>Telefon raqam: </b><a href="tel:+998930830372">+998930820372</a></p>
<p style={{marginTop:'-10px'}}><b>Onasi: </b>Farhodova Nargiza Rahimovna</p>
<p style={{marginTop:'-10px'}}><b>Telefon raqam: </b><a href="tel:+998930830371">+998930820371</a></p>
</div>
      </div>
  </div>
  
       </Col>
       <Col style={{marginTop:'20px'}} lg={4} md={6} sm={12}>
  <div className="card">
  <Link to='chat'><img src={yuksak} className={style.image}/></Link>
      <div className={style.cardBody}>
          <h3>Davronov Alisher Diyor o'g'li</h3>
         <div style={{display:'flex', alignItems:'center', flexWrap:'wrap', height:'100%'}}><p><b>Tug'ilgan sana: </b>12.08.2004</p>
          <p style={{marginTop:'-10px'}}><b>Millati: </b>o'zbek</p>

<p style={{marginTop:'-10px'}}><b>Otasi: </b>Muhammadaliyev G'olib Davronovich</p>
<p style={{marginTop:'-10px'}}><b>Telefon raqam: </b><a href="tel:+998930830372">+998930820372</a></p>
<p style={{marginTop:'-10px'}}><b>Onasi: </b>Muhammadaliyeva Nargiza Rahimovna</p>
<p style={{marginTop:'-10px'}}><b>Telefon raqam: </b><a href="tel:+998930830371">+998930820371</a></p>
</div>
      </div>
  </div>
  
       </Col>
       
<Col style={{marginTop:'20px'}} lg={4} md={6} sm={12}>
  <div className="card">
  <Link to='chat'><img src={gimnastika} className={style.image}/></Link>
      <div className={style.cardBody}>
          <h3>Tohirova Rayhon G'olib qizi</h3>
         <div style={{display:'flex', alignItems:'center', flexWrap:'wrap', height:'100%'}}><p><b>Tug'ilgan sana: </b>12.08.2004</p>
          <p style={{marginTop:'-10px'}}><b>Millati: </b>o'zbek</p>

<p style={{marginTop:'-10px'}}><b>Otasi: </b>Muhammadaliyev G'olib Davronovich</p>
<p style={{marginTop:'-10px'}}><b>Telefon raqam: </b><a href="tel:+998930830372">+998930820372</a></p>
<p style={{marginTop:'-10px'}}><b>Onasi: </b>Muhammadaliyeva Nargiza Rahimovna</p>
<p style={{marginTop:'-10px'}}><b>Telefon raqam: </b><a href="tel:+998930830371">+998930820371</a></p>
</div>
      </div>
  </div>
  
       </Col>
       
       
       <Col style={{marginTop:'20px'}} lg={4} md={6} sm={12}>
  <div className="card">
  <Link to='chat'><img src={yuksak} className={style.image}/></Link>
      <div className={style.cardBody}>
          <h3>Davronov Alisher Diyor o'g'li</h3>
         <div style={{display:'flex', alignItems:'center', flexWrap:'wrap', height:'100%'}}><p><b>Tug'ilgan sana: </b>12.08.2004</p>
          <p style={{marginTop:'-10px'}}><b>Millati: </b>o'zbek</p>

<p style={{marginTop:'-10px'}}><b>Otasi: </b>Muhammadaliyev G'olib Davronovich</p>
<p style={{marginTop:'-10px'}}><b>Telefon raqam: </b><a href="tel:+998930830372">+998930820372</a></p>
<p style={{marginTop:'-10px'}}><b>Onasi: </b>Muhammadaliyeva Nargiza Rahimovna</p>
<p style={{marginTop:'-10px'}}><b>Telefon raqam: </b><a href="tel:+998930830371">+998930820371</a></p>
</div>
      </div>
  </div>
  
       </Col>
       
<Col style={{marginTop:'20px'}} lg={4} md={6} sm={12}>
  <div className="card">
  <Link to='chat'><img src={gimnastika} className={style.image}/></Link>
      <div className={style.cardBody}>
          <h3>Tohirova Rayhon G'olib qizi</h3>
         <div style={{display:'flex', alignItems:'center', flexWrap:'wrap', height:'100%'}}><p><b>Tug'ilgan sana: </b>12.08.2004</p>
          <p style={{marginTop:'-10px'}}><b>Millati: </b>o'zbek</p>

<p style={{marginTop:'-10px'}}><b>Otasi: </b>Muhammadaliyev G'olib Davronovich</p>
<p style={{marginTop:'-10px'}}><b>Telefon raqam: </b><a href="tel:+998930830372">+998930820372</a></p>
<p style={{marginTop:'-10px'}}><b>Onasi: </b>Muhammadaliyeva Nargiza Rahimovna</p>
<p style={{marginTop:'-10px'}}><b>Telefon raqam: </b><a href="tel:+998930830371">+998930820371</a></p>
</div>
      </div>
  </div>
  
       </Col>
       

       <Col style={{marginTop:'20px'}} lg={4} md={6} sm={12}>
  <div className="card">
  <Link to='chat'><img src={yuksak} className={style.image}/></Link>
      <div className={style.cardBody}>
          <h3>Davronov Alisher Diyor o'g'li</h3>
         <div style={{display:'flex', alignItems:'center', flexWrap:'wrap', height:'100%'}}><p><b>Tug'ilgan sana: </b>12.08.2004</p>
          <p style={{marginTop:'-10px'}}><b>Millati: </b>o'zbek</p>

<p style={{marginTop:'-10px'}}><b>Otasi: </b>Muhammadaliyev G'olib Davronovich</p>
<p style={{marginTop:'-10px'}}><b>Telefon raqam: </b><a href="tel:+998930830372">+998930820372</a></p>
<p style={{marginTop:'-10px'}}><b>Onasi: </b>Muhammadaliyeva Nargiza Rahimovna</p>
<p style={{marginTop:'-10px'}}><b>Telefon raqam: </b><a href="tel:+998930830371">+998930820371</a></p>
</div>
      </div>
  </div>
  
       </Col>
       
<Col style={{marginTop:'20px'}} lg={4} md={6} sm={12}>
  <div className="card">
  <Link to='chat'><img src={gimnastika} className={style.image}/></Link>
      <div className={style.cardBody}>
          <h3>Tohirova Rayhon G'olib qizi</h3>
         <div style={{display:'flex', alignItems:'center', flexWrap:'wrap', height:'100%'}}><p><b>Tug'ilgan sana: </b>12.08.2004</p>
          <p style={{marginTop:'-10px'}}><b>Millati: </b>o'zbek</p>

<p style={{marginTop:'-10px'}}><b>Otasi: </b>Muhammadaliyev G'olib Davronovich</p>
<p style={{marginTop:'-10px'}}><b>Telefon raqam: </b><a href="tel:+998930830372">+998930820372</a></p>
<p style={{marginTop:'-10px'}}><b>Onasi: </b>Muhammadaliyeva Nargiza Rahimovna</p>
<p style={{marginTop:'-10px'}}><b>Telefon raqam: </b><a href="tel:+998930830371">+998930820371</a></p>
</div>
      </div>
  </div>
  
       </Col>
       

</Row>

                </Container>
                
            </div>
        )
    }
}
