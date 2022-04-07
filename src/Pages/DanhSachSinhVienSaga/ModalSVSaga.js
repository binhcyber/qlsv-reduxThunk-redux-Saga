import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ADD_SINH_VIEN,
  UPDATE_SINH_VIEN,
} from "../../redux/action/qlsvConstSaga";
import {
  capnhatsinhvienAction,
  themsinhvienAction,
} from "../../redux/action/sinhvienActions";

export default function ModalSVSaga() {
  const [sinhvien, setSinvien] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  const editSinhVien = useSelector(
    (state) => state.sinhvienReducer.editSinhVien
  );
  const disabled = useSelector((state) => state.sinhvienReducer.disabled);
  useEffect(() => {
    let newSinhVien = { ...editSinhVien };
    setSinvien(newSinhVien);
  }, [editSinhVien]);
  console.log(sinhvien);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    let { value, name } = e.target;
    setSinvien({
      ...sinhvien,
      [name]: value,
    });
  };
  const handleClick = (sv) => {
    // dispatch(themsinhvienAction(sinhvien));
    dispatch({
      type: ADD_SINH_VIEN,
      sv,
    });
  };
  const handleUpdate = () => {
    console.log("yes");
    dispatch({
      type: UPDATE_SINH_VIEN,
      sinhvien,
    });
  };
  return (
    <div>
      <div>
        {/* Button trigger modal */}
        <button
          type="button"
          className="btn btn-primary btn-lg"
          data-toggle="modal"
          data-target="#modelId"
          onClick={() => {
            let newSinhVien = { id: "", name: "", email: "", phone: "" };
            setSinvien(newSinhVien);
            console.log(sinhvien);
          }}
        >
          Thêm Sinh Viên
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {disabled ? "THEM SINH VIEN" : "EDIT SINH VIEN"}
                </h5>
                {/* <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button> */}
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="id">ID</label>
                  {disabled ? (
                    <input
                      value={sinhvien.id}
                      type="text"
                      name="id"
                      id="id"
                      className="form-control"
                      placeholder
                      aria-describedby="helpId"
                      onChange={handleChange}
                    />
                  ) : (
                    <input
                      disabled
                      value={sinhvien.id}
                      type="text"
                      name="id"
                      id="id"
                      className="form-control"
                      placeholder
                      aria-describedby="helpId"
                      onChange={handleChange}
                    />
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="id">NAME</label>
                  <input
                    value={sinhvien.name}
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder
                    aria-describedby="helpId"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">EMAIL</label>
                  <input
                    value={sinhvien.email}
                    type="text"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder
                    aria-describedby="helpId"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">PHONE</label>
                  <input
                    value={sinhvien.phone}
                    type="text"
                    name="phone"
                    id="phone"
                    className="form-control"
                    placeholder
                    aria-describedby="helpId"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="modal-footer">
                {disabled ? (
                  <button
                    disabled
                    onClick={handleUpdate}
                    type="button"
                    className="btn btn-warning"
                    data-dismiss="modal"
                  >
                    Update
                  </button>
                ) : (
                  <button
                    onClick={handleUpdate}
                    type="button"
                    className="btn btn-warning"
                    data-dismiss="modal"
                  >
                    Update
                  </button>
                )}
                {disabled ? (
                  <button
                    data-dismiss="modal"
                    onClick={() => {
                      handleClick(sinhvien);
                    }}
                    type="button"
                    className="btn btn-primary"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    disabled
                    data-dismiss="modal"
                    onClick={() => {
                      handleClick(sinhvien);
                    }}
                    type="button"
                    className="btn btn-primary"
                  >
                    Save
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
