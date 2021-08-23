import React, { Component } from "react";
import HeaderParent from "./cabinetTeacher/HeaderParent";
import { Col, Row } from "react-bootstrap";
import Box from "./cabinetTeacher/BoxTeacher";
import Yutuqlar from "./cabinetTeacher/Yutuqlar";
import Chat from "./cabinetTeacher/Chat";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Davomad from "./cabinetTeacher/Davomad";
import Sinfdoshlar from "./cabinetTeacher/Students";
import Plan from "./cabinetTeacher/Plan";
import Teachers from "./cabinetTeacher/Teachers";
import Main from "./Rahbar/Main";
import News from "./News";

export default class ParentCabinet extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <HeaderParent />
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
        </BrowserRouter>
      </div>
    );
  }
}
