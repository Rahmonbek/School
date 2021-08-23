import React, { Component } from "react";
import HeaderTeacher from "./cabinetTeacher/HeaderTeacher";
import { Col, Row } from "react-bootstrap";
import Box from "./cabinetTeacher/BoxTeacher";
import Yutuqlar from "./cabinetTeacher/Yutuqlar";
import Chat from "./cabinetTeacher/Chat";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
// import Davomad from "./cabinetTeacher/Davomad";
import Sinfdoshlar from "./cabinetTeacher/Students";
import Plan from "./cabinetTeacher/Plan";
import Teachers from "./cabinetTeacher/Teachers";
// import Main from "./Rahbar/Main";
import News from "./News";
import Global from "../host/Global";

export default class ParentCabinet extends Component {
  render() {
    return Global.teacherId !== null ? (
      <div>
        <BrowserRouter>
          <HeaderTeacher />
          <Row>
            <Col lg={9} md={12}>
              <Switch>
                <Route exact path="/cabinet/teacher/bolim/chat">
                  <Chat />
                </Route>
                <Route exact path="/cabinet/teacher/bolim/yutuqlar">
                  <Yutuqlar />
                </Route>

                <Route exact path="/cabinet/teacher/bolim/dars_reja">
                  <Plan />
                </Route>
                <Route exact path="/cabinet/teacher/bolim/students">
                  <Sinfdoshlar />
                </Route>
                <Route exact path="/cabinet/teacher/bolim/oqituvchilar">
                  <Teachers />
                </Route>

                <Route exact path="/cabinet/teacher/bolim">
                  <Box />
                </Route>
              </Switch>
            </Col>

            <Col lg={3} md={12} style={{ transform: "translate(-10px, 0px)" }}>
              <News />
            </Col>
          </Row>
          <div class="container py-5">
            <div class="row">
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-6 mx-auto">
                    <div class="card rounded-0">
                      <div class="card-header">
                        <h3 class="mb-0">Login</h3>
                      </div>
                      <div class="card-body">
                        <form class="form" role="form" autocomplete="off" id="formLogin" novalidate="" method="POST">
                          <div class="form-group">
                            <label for="uname1">Username</label>
                            <input type="text" class="form-control form-control-lg rounded-0" name="uname1" id="uname1" required="" />
                            <div class="invalid-feedback">Oops, you missed this one.</div>
                          </div>
                          <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control form-control-lg rounded-0" id="pwd1" required="" autocomplete="new-password" />
                            <div class="invalid-feedback">Enter your password too!</div>
                          </div>
                          <div>
                            <label class="custom-control custom-checkbox">
                              <input type="checkbox" class="custom-control-input" />
                              <span class="custom-control-indicator"></span>
                              <span class="custom-control-description small text-dark">Remember me on this computer</span>
                            </label>
                          </div>
                          <button type="submit" class="btn btn-success btn-lg float-right" id="btnLogin">
                            Login
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    ) : (
      <Redirect to="/login/uz" />
    );
  }
}
