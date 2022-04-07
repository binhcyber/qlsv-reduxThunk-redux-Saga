import React from "react";
import ModalSVSaga from "./ModalSVSaga";
import SinhVienSaga from "./SinhVienSaga";

export default function DSSVSaga() {
  return (
    <div className="container">
      <h1>Danh sách sinh viên</h1>
      <ModalSVSaga />
      <SinhVienSaga />
    </div>
  );
}
