import React, { Component } from "react";
import "aos";
import style from "./Navbar.module.css";
import flagUZ from "../img/flagUZ.png";
import flagRU from "../img/flagRU.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavbarContainer } from "./StyleNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { AOS } from "aos";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import axios from "axios";
import { url, user } from "../host/Host";
import Global from "../host/Global";
export default class NavBar extends Component {
  state={
    school:null,
    id:null,
  }
getSchool=()=>{
  var a=window.location.href.split('/')
  var v=a[a.length-1]
            axios.get(`${url}/school-by-admin/${v}`).then(res=>{
        this.setState({
            school:res.data,
            id:v
        })
    }).catch(err=>{window.location.href=window.location.href+'/error';
  }
    )
}
componentDidMount(){
  this.getSchool()
}
  render() {
    return (
      <div>
        <div>
        <NavbarContainer>
                    <Navbar collapseOnSelect expand="lg">
                        <Container>
                            <Navbar.Brand><p className={style.maktabLogo} style={{ cursor:'pointer', marginTop:'8px', }}><Link to={`/${this.state.id}`} style={{color:'gold', fontSize:"24px",fontWeight:'bold', letterSpacing:'5px' }} >{this.state.school!==null?this.state.school.school_number+' - maktab':"Maktab raqami"}</Link></p></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{marginTop:'0px',padding:'0',width:'50px',backgroundColor: 'white'}} />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto" >
                                    <NavLink style={{marginLeft:'20px', marginTop:'4px'}} to={`/${this.state.id}`}><p className='navLink'>Bosh sahifa</p></NavLink>
                                    <NavLink style={{marginLeft:'20px', marginTop:'4px'}} to={`/hayot/${this.state.id}`}><p className='navLink'>Maktab hayoti</p></NavLink>
                                    <NavLink style={{marginLeft:'20px', marginTop:'4px'}} to={`/qabul/${this.state.id}`}><p className='navLink'>Qabul</p></NavLink>
                                    <NavLink style={{marginLeft:'20px', marginTop:'4px'}} to={`/yangiliklar/${this.state.id}`}><p className='navLink'>Yangiliklar</p></NavLink>
                                    <NavLink style={{marginLeft:'20px', marginTop:'4px'}} to={`/rahbariyat/${this.state.id}`}><p className='navLink'>Maktab ma'muriyati</p></NavLink>
                                    <NavLink style={{marginLeft:'20px', marginTop:'4px'}} to={`/alochilar/${this.state.id}`}><p className='navLink'>Maktab alochilari</p></NavLink>
                                    {/* <div className={style.bayroqlar}>
                               <Link to=''><img style={{marginLeft:'15px'}} src={flagUZ} /></Link>
                              <Link to='/ru'><img src={flagRU} /></Link>
                          </div> */}
                                <Link  style={{marginLeft:'100px'}}  to='/login' className='kirish'><FontAwesomeIcon style={{display:'inline-block',marginTop:'30px'}} icon={faUserCircle} className='userIcon' />  Kirish</Link>
</Nav>
                                
                            </Navbar.Collapse>
                            </Container>
                            </Navbar>
                            </NavbarContainer>
          {/* <NavbarContainer>
            <Navbar collapseOnSelect expand="lg">
              <Container>
                <Navbar.Brand>
                  <p className={"maktabLogo"} style={{ cursor: "pointer", marginTop: "8px" }}>
                    <Link to="">Maktab logosi</Link>
                  </p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ marginTop: "-10px", padding: "0", width: "50px", backgroundColor: "white" }} />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mx-auto">
                    <NavLink style={{ marginLeft: "20px" }} to="">
                      <p className="navLink">Bosh sahifa</p>
                    </NavLink>
                    <NavLink style={{ marginLeft: "20px" }} to="/hayot">
                      <p className="navLink">Maktab haqida</p>
                    </NavLink>
                    <NavLink style={{ marginLeft: "20px" }} to="/qabul">
                      <p className="navLink">Qabul</p>
                    </NavLink>
                    <NavLink style={{ marginLeft: "20px" }} to="/yangiliklar">
                      <p className="navLink">Yangiliklar</p>
                    </NavLink>
                    <NavLink style={{ marginLeft: "20px" }} to="/rahbariyat">
                      <p className="navLink">Maktab ma'muriyati</p>
                    </NavLink>
                    <NavLink style={{ marginLeft: "20px" }} to="/alochilar">
                      <p className="navLink">Maktab alochilari</p>
                    </NavLink>
                    {/* <div className={style.bayroqlar}>
                      <Link to="">
                        <img alt="" style={{ marginLeft: "15px" }} src={flagUZ} />
                      </Link>
                      <Link to="/ru">
                        <img alt="" src={flagRU} />
                      </Link>
                    </div> */}
                    {/* <Link to="/login" className="kirish">
                      <FontAwesomeIcon style={{ display: "inline-block" }} icon={faUserCircle} className="userIcon" /> Kirish
                    </Link>
                  </Nav>
                </Navbar.Collapse> */}
              {/* </Container>
            </Navbar> */}
          {/* </NavbarContainer> */} */
        </div>
      </div>
    );
  }
}
