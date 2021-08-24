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
export default class NavBar extends Component {
  state={
    school:null,
  }
// getSchool=()=>{
//     axios.get(`${url}/school-by-admin/${user}`).then(res=>{
//         this.setState({
//             school:res.data,
//         })
//     })
// }
  render() {
    return (
      <div>
        <div>
        <NavbarContainer>
                    <Navbar collapseOnSelect expand="lg">
                        <Container>
                            <Navbar.Brand><p className={style.maktabLogo} style={{color:'white', cursor:'pointer', marginTop:'8px', }}><Link to='/uz' style={{color:'white'}}>{this.state.school!==null?this.state.school.school_number+' - maktab':"Maktab raqami"}</Link></p></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{marginTop:'0px',padding:'0',width:'50px',backgroundColor: 'white'}} />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto" >
                                    <NavLink style={{marginLeft:'20px'}} to="/uz"><p className='navLink'>Bosh sahifa</p></NavLink>
                                    <NavLink style={{marginLeft:'20px'}} to="/hayot/uz"><p className='navLink'>Maktab hayoti</p></NavLink>
                                    <NavLink style={{marginLeft:'20px'}} to="/qabul/uz"><p className='navLink'>Qabul</p></NavLink>
                                    <NavLink style={{marginLeft:'20px'}} to="/yangiliklar/uz"><p className='navLink'>Yangiliklar</p></NavLink>
                                    <NavLink style={{marginLeft:'20px'}} to="/rahbariyat/uz"><p className='navLink'>Maktab ma'muriyati</p></NavLink>
                                    <NavLink style={{marginLeft:'20px'}} to="/alochilar/uz"><p className='navLink'>Maktab alochilari</p></NavLink>
                                    <div className={style.bayroqlar}>
                              {/* <Link to='/uz'><img style={{marginLeft:'15px'}} src={flagUZ} /></Link>
                              <Link to='/ru'><img src={flagRU} /></Link> */}
                          </div>
                                <Link to='/login/uz' className='kirish'><FontAwesomeIcon style={{display:'inline-block',marginTop:'30px'}} icon={faUserCircle} className='userIcon' />  Kirish</Link>
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
                    <Link to="/uz">Maktab logosi</Link>
                  </p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ marginTop: "-10px", padding: "0", width: "50px", backgroundColor: "white" }} />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mx-auto">
                    <NavLink style={{ marginLeft: "20px" }} to="/uz">
                      <p className="navLink">Bosh sahifa</p>
                    </NavLink>
                    <NavLink style={{ marginLeft: "20px" }} to="/hayot/uz">
                      <p className="navLink">Maktab haqida</p>
                    </NavLink>
                    <NavLink style={{ marginLeft: "20px" }} to="/qabul/uz">
                      <p className="navLink">Qabul</p>
                    </NavLink>
                    <NavLink style={{ marginLeft: "20px" }} to="/yangiliklar/uz">
                      <p className="navLink">Yangiliklar</p>
                    </NavLink>
                    <NavLink style={{ marginLeft: "20px" }} to="/rahbariyat/uz">
                      <p className="navLink">Maktab ma'muriyati</p>
                    </NavLink>
                    <NavLink style={{ marginLeft: "20px" }} to="/alochilar/uz">
                      <p className="navLink">Maktab alochilari</p>
                    </NavLink>
                    {/* <div className={style.bayroqlar}>
                      <Link to="/uz">
                        <img alt="" style={{ marginLeft: "15px" }} src={flagUZ} />
                      </Link>
                      <Link to="/ru">
                        <img alt="" src={flagRU} />
                      </Link>
                    </div> */}
                    {/* <Link to="/login/uz" className="kirish">
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
