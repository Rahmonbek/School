import React, { Component } from "react";
import HeaderTeacher from "./cabinetTeacher/HeaderTeacher";
import { Button, Col, Form, Row } from "react-bootstrap";
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
import ImageDemo from "./ImageDemo";
import { editStaff, getSpec, getStaff, getStaffBySchool } from "../host/Config";
import { Input, message, Select } from "antd";
import { Option } from "antd/lib/mentions";

export default class ParentCabinet extends Component {
  state = {
    teacher: [],
    options: [],
    speciality: [],
    image: null,
  };
  getTeacher = () => {
    getStaffBySchool().then((res) =>
      res.data.map((item) => {
        return item.user === Global.teacherId ? (Global.staffId = item.id) : "";
      })
    );
    getStaff().then((res) => this.setState({ teacher: res.data, speciality: res.data.speciality }));
    getSpec()
      .then((res) => {
        this.setState({ options: res.data });
      })
      .catch((err) => console.log(err));
  };
  handleChange = (selectedOption) => {
    this.setState({ speciality: selectedOption });
  };
  editStaff = () => {
    let formData = new FormData();
    formData.append("position", document.getElementById("position") ?? "");
    formData.append("full_name", document.getElementById("full_name") ?? "");
    formData.append("phone", document.getElementById("phone") ?? "");
    formData.append("school", Global.schoolId ?? "");
    formData.append("description", document.getElementById("description") ?? "");
    if (this.state.image !== null) {
      formData.append("image", this.state.image ?? "");
    }
    editStaff(formData, Global.staffId)
      .then((res) => {
        editStaff({ speciality: this.state.speciality }, Global.staffId).then((res2) => {
          message.success("Xodim o'zgartildi");
          this.getTeacher();
        });
      })
      .catch((err) => message.error("Xodim o'zgartilmadi"));
  };
  customRequest = (e) => {
    this.setState({ image: e.target.files[0] });
  };
  componentDidMount() {
    this.getTeacher();
  }
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
              <div className="container py-4">
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-10 mx-auto">
                        <div className="card" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" }}>
                          <div className="card-header">
                            <h3 className="mb-0">Xodim ma'lumotlari</h3>
                          </div>
                          <div className="card-body">
                            <Form>
                              <div className="row">
                                <div className="col-xl-3">
                                  <Form.Group className="mb-3" controlId="image">
                                    <Form.Label>Rasm</Form.Label>
                                    <Input onChange={this.customRequest} type="file" required={false} style={{ marginBottom: "20px" }} accept="image/jpg, image/jpeg, image/png" />
                                  </Form.Group>
                                  <div className="w-100" style={{ position: "relative" }}>
                                    {ImageDemo(this.state.teacher.image)}
                                  </div>
                                  <Form.Group className="mb-3" controlId="fullname">
                                    <Form.Label>F.I.Sh.</Form.Label>
                                    <Form.Control placeholder="F.I.Sh." defaultValue={this.state.teacher.full_name} />
                                  </Form.Group>
                                  <Form.Group className="mb-3" controlId="phone">
                                    <Form.Label>Telefon raqam</Form.Label>
                                    <Form.Control placeholder="Telefon raqam" maxLength="20" defaultValue={this.state.teacher.phone} />
                                  </Form.Group>
                                </div>
                                <div className="col-xl-9">
                                  <Form.Group className="mb-3" controlId="position">
                                    <Form.Label>Soha</Form.Label>
                                    <Form.Control placeholder="Soha" defaultValue={this.state.teacher.position} />
                                  </Form.Group>
                                  <Form.Group className="mb-3" controlId="speciality">
                                    <Form.Label>Mutaxassislik</Form.Label>
                                    <Select placeholder="Mutaxassislik" value={this.state.speciality !== [] ? this.state.speciality : ""} mode="multiple" style={{ width: "100%" }} onChange={this.handleChange} optionLabelProp="label">
                                      {this.state.options !== null
                                        ? this.state.options.map((item) => {
                                            return (
                                              <Option value={item.id} label={item.name}>
                                                {item.name}
                                              </Option>
                                            );
                                          })
                                        : ""}
                                    </Select>
                                  </Form.Group>
                                  <Form.Group className="mb-3" controlId="phone">
                                    <Form.Label>Parol yangilash</Form.Label>
                                    <Form.Control type="password" placeholder="Agar parolingizni almashtirmoqchi bo'lsangiz yangi parolni kiriting!" />
                                  </Form.Group>
                                  <Form.Group className="mb-3" controlId="description">
                                    <Form.Label>Qo'shimcha ma'lumot</Form.Label>
                                    <Form.Control as="textarea" placeholder="Soha" style={{ height: 150 }} defaultValue={this.state.teacher.position} />
                                  </Form.Group>
                                </div>
                              </div>
                              <Button variant="danger" as="input" type="reset" value="Bekor qilish" />
                              <Button variant="success" onClick={this.editStaff} style={{ marginLeft: "15px" }}>
                                Saqlash
                              </Button>
                            </Form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={3} md={12} style={{ transform: "translate(-10px, 0px)" }}>
              <News />
            </Col>
          </Row>
        </BrowserRouter>
      </div>
    ) : (
      <Redirect to="/login/uz" />
    );
  }
}
