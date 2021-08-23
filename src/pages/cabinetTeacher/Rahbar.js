import { Input, message, Modal, Table } from "antd";
import React, { Component } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { createPupil, deletePupils, editPupils, getPupil, getPupils } from "../../host/Config";
import Global from "../../host/Global";
import ImageDemo from "../ImageDemo";

export default class Rahbar extends Component {
  state = {
    pupils: [],
    pupil: [],
    date: "",
    show: false,
    edit: null,
    image: "",
    imageUrl: "",
  };
  columns = [
    {
      title: "T/r",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Rasm",
      dataIndex: "image",
      key: "image",
      render(image) {
        return ImageDemo(image);
      },
    },
    {
      title: "F.I.Sh.",
      dataIndex: "full_name",
      key: "full_name",
    },
    {
      title: "Tug'ilgan kun",
      dataIndex: "birth_day",
      key: "birth_day",
    },
    {
      title: "O'zgartirish",
      dataIndex: "key",
      key: "key",
      render: (key) => {
        return (
          <Button variant="primary" onClick={() => this.editPupil(key - 1)}>
            O'zgartirish
          </Button>
        );
      },
    },
    {
      title: "O'chirish",
      dataIndex: "id",
      key: "id",
      render: (id) => {
        return (
          <Button variant="danger" onClick={() => this.deletePupil(id)}>
            O'chirish
          </Button>
        );
      },
    },
  ];
  getPupils = () => {
    getPupils(Global.classId).then((res) => {
      var pupils = res.data.sort((a, b) => {
        let x = a.full_name.toLowerCase();
        let y = b.full_name.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
      for (let i = 0; i < pupils.length; i++) {
        pupils[i].key = i + 1;
      }
      this.setState({ pupils: pupils });
    });
  };
  editPupil = (id) => {
    this.setState({ edit: this.state.pupils[id].id, pupil: this.state.pupils[id], imageUrl: this.state.pupils[id].image });
    this.openModal();
  };
  deletePupil = (id) => {
    deletePupils(id)
      .then((res) => {
        this.getPupils();
        message.success("Ma'lumot o'chirildi!");
      })
      .catch((err) => message.error("Ma'lumot o'chirilmadi!"));
  };
  savePupil = () => {
    var data = {
      full_name: document.getElementById("fullname").value,
      birth_day: document.getElementById("birthday").value,
      clas: Global.classId,
    };
    let formData = new FormData();
    formData.append("full_name", data.full_name ?? "");
    formData.append("birth_day", data.birth_day ?? null);
    formData.append("clas", data.clas ?? null);
    formData.append("parent", null);
    if (this.state.edit !== null) {
      if (this.state.image !== "") {
        formData.append("image", this.state.image ?? null);
        editPupils(formData, this.state.edit)
          .then((res) => {
            this.getPupils();
            message.success("Ma'lumot o'zgartirildi!");
          })
          .catch((err) => message.error("Ma'lumot o'zgartirilmadi!"));
      }
      editPupils(data, this.state.edit)
        .then((res) => {
          this.getPupils();
          message.success("Ma'lumot o'zgartirildi!");
        })
        .catch((err) => message.error("Ma'lumot o'zgartirilmadi!"));
    } else {
      formData.append("image", this.state.image ?? null);
      createPupil(formData)
        .then((res) => {
          this.getPupils();
          message.success("Ma'lumot qo'shildi!");
        })
        .catch((err) => message.error("Ma'lumot qo'shilmadi!"));
    }
    this.handleCancel();
  };
  openModal = () => {
    this.setState({ show: true });
  };
  handleCancel = () => {
    this.setState({ show: false, edit: null, imageUrl: "", image: "", pupil: [] });
  };
  customRequest = (e) => {
    this.setState({ image: e.target.files[0] });
  };
  componentDidMount() {
    this.getPupils();
  }
  render() {
    return (
      <div>
        <Container>
          <Button variant="primary" style={{ margin: "20px 0" }} onClick={this.openModal}>
            O'quvchi qo'shish
          </Button>
          {this.state.pupils !== [] ? <Table columns={this.columns} dataSource={this.state.pupils} style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", padding: "5px" }} /> : ""}
          <Modal title="Sinf yaratish" visible={this.state.show} onCancel={this.handleCancel} footer={false}>
            <Form>
              <Form.Group className="mb-3" controlId="fullname">
                <Form.Label>F.I.Sh.</Form.Label>
                <Form.Control placeholder="F.I.Sh." defaultValue={this.state.pupil !== [] ? this.state.pupil.full_name : ""} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="birthday">
                <Form.Label>Tug'ilgan kun</Form.Label>
                <Form.Control type="date" defaultValue={this.state.pupil !== [] ? this.state.pupil.birth_day : ""} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Rasm</Form.Label>
                <Input type="file" id="rasmlar" required={this.state.edit === null ? true : false} style={{ marginBottom: "20px" }} onChange={this.customRequest} />
                {this.state.image === "" && this.state.imageUrl !== "" ? ImageDemo(this.state.imageUrl) : ""}
              </Form.Group>
              <br />

              <Button variant="danger" style={{ marginRight: "10px" }} onClick={this.handleCancel}>
                Bekor qilish
              </Button>
              <Button variant="primary" onClick={this.savePupil}>
                Saqlash
              </Button>
            </Form>
          </Modal>
        </Container>
      </div>
    );
  }
}
