import { Input, message, Modal, Space, Table } from "antd";
import React, { Component } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Highlighter from "react-highlight-words";
import { createPupil, deletePupils, editPupils, getPupil, getPupils } from "../../host/Config";
import Global from "../../host/Global";
import ImageDemo from "../ImageDemo";
import { SearchOutlined } from "@ant-design/icons";

export default class Rahbar extends Component {
  state = {
    pupils: [],
    show: false,
    edit: null,
    image: "",
    imageUrl: "",
  };

  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button type="primary" onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)} icon={<SearchOutlined />} size="small" style={{ width: 90 }}>
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />,
    onFilter: (value, record) => (record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : ""),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: (text) => (this.state.searchedColumn === dataIndex ? <Highlighter highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }} searchWords={[this.state.searchText]} autoEscape textToHighlight={text ? text.toString() : ""} /> : text),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: "" });
  };

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
      this.setState({ edit: pupils[id].id, imageUrl: pupils[id].image });
      document.getElementById("fullname").value = pupils[id].full_name;
      document.getElementById("birthday").value = pupils[id].birth_day;
      document.getElementById("fathername").value = pupils[id].father_name;
      document.getElementById("fathertel").value = pupils[id].father_tel;
      document.getElementById("mothername").value = pupils[id].mother_name;
      document.getElementById("mothertel").value = pupils[id].mother_tel;
    });
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
      father_name: document.getElementById("fathername").value,
      father_tel: document.getElementById("fathertel").value,
      mother_name: document.getElementById("mothername").value,
      mother_tel: document.getElementById("mothertel").value,
    };
    let formData = new FormData();
    formData.append("full_name", data.full_name ?? "");
    formData.append("birth_day", data.birth_day ?? null);
    formData.append("clas", data.clas ?? null);
    formData.append("father_name", data.father_name ?? null);
    formData.append("father_tel", data.father_tel ?? null);
    formData.append("mother_name", data.mother_name ?? null);
    formData.append("mother_tel", data.mother_tel ?? null);
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
    this.setState({ show: false, edit: null, imageUrl: "", image: "" });
    document.getElementById("fullname").value = "";
    document.getElementById("birthday").value = "";
    document.getElementById("fathername").value = "";
    document.getElementById("fathertel").value = "";
    document.getElementById("mothername").value = "";
    document.getElementById("mothertel").value = "";
  };
  customRequest = (e) => {
    this.setState({ image: e.target.files[0] });
  };
  componentDidMount() {
    this.getPupils();
  }
  render() {
    const columns = [
      {
        title: "T/r",
        dataIndex: "key",
        key: "key",
        fixed: "left",
        width: 50,
      },
      {
        title: "Rasm",
        dataIndex: "image",
        key: "image",
        render: (image) => {
          return ImageDemo(image);
        },
      },
      {
        title: "F.I.Sh.",
        dataIndex: "full_name",
        key: "full_name",
        ...this.getColumnSearchProps("full_name"),
      },
      {
        title: "Tug'ilgan kun",
        dataIndex: "birth_day",
        key: "birth_day",
      },
      {
        title: "Otasi",
        dataIndex: "father_name",
        key: "father_name",
        ...this.getColumnSearchProps("father_name"),
      },
      {
        title: "Otasining telefon raqami",
        dataIndex: "father_tel",
        key: "father_tel",
        ...this.getColumnSearchProps("father_tel"),
      },
      {
        title: "Onasi",
        dataIndex: "mother_name",
        key: "mother_name",
        ...this.getColumnSearchProps("mother_name"),
      },
      {
        title: "Onasining telefon raqami",
        dataIndex: "mother_tel",
        key: "mother_tel",
        ...this.getColumnSearchProps("mother_tel"),
      },
      {
        title: "O'zgartirish",
        dataIndex: "key",
        key: "key",
        fixed: "right",
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
        fixed: "right",
        render: (id) => {
          return (
            <Button variant="danger" onClick={() => this.deletePupil(id)}>
              O'chirish
            </Button>
          );
        },
      },
    ];
    return (
      <div>
        <Container>
          <Button variant="primary" style={{ margin: "20px 0" }} onClick={this.openModal}>
            O'quvchi qo'shish
          </Button>
          {this.state.pupils !== [] ? <Table columns={columns} dataSource={this.state.pupils} size="small" scroll={{ x: 1366 }} bordered="true" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", padding: "5px", width: "100%" }} /> : ""}
          <Modal title="O'quvchi yaratish" visible={this.state.show} onCancel={this.handleCancel} footer={false}>
            <Form>
              <Form.Group className="mb-3" controlId="fullname">
                <Form.Label>O'quvchining f.i.sh.</Form.Label>
                <Form.Control placeholder="O'quvchining f.i.sh." />
              </Form.Group>

              <Form.Group className="mb-3" controlId="birthday">
                <Form.Label>Tug'ilgan kun</Form.Label>
                <Form.Control type="date" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Rasm</Form.Label>
                <Input type="file" id="rasmlar" required={this.state.edit === null ? true : false} style={{ marginBottom: "20px" }} onChange={this.customRequest} />
                {this.state.image === "" && this.state.imageUrl !== "" ? ImageDemo(this.state.imageUrl) : ""}
              </Form.Group>
              <br />

              <Form.Group className="mb-3" controlId="fathername">
                <Form.Label>Otasining f.i.sh.</Form.Label>
                <Form.Control placeholder="Otasining f.i.sh." />
              </Form.Group>

              <Form.Group className="mb-3" controlId="fathertel">
                <Form.Label>Otasining telefon raqami</Form.Label>
                <Form.Control placeholder="Otasining telefon raqami" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="mothername">
                <Form.Label>Onasining f.i.sh.</Form.Label>
                <Form.Control placeholder="Onasining f.i.sh." />
              </Form.Group>

              <Form.Group className="mb-3" controlId="mothertel">
                <Form.Label>Onasining telefon raqami</Form.Label>
                <Form.Control placeholder="Onasining telefon raqami" />
              </Form.Group>

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
