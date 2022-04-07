import React, { Component } from "react";
import ModalSV from "./ModalSV";
import SinhVien from "./SinhVien";
import { QLSVAXIOS } from "../../Services/SinhVienService";

export default class DanhSachSV extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Danh Sách Sinh Viên</h1>
        <ModalSV />
        <SinhVien />
      </div>
    );
  }
}
