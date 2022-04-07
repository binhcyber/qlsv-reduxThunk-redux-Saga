import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import {
  DELETE_SINH_VIEN,
  SET_SINH_VIEN,
} from "../../redux/action/qlsvConstSaga";
import { EDIT_SINH_VIEN } from "../../redux/constant/sinhvienconstant";

export default function SinhVienSaga() {
  const dispatch = useDispatch();
  const dssv = useSelector((state) => state.sinhvienReducer.dssv);
  const getsinhvien = () => {
    dispatch({
      type: SET_SINH_VIEN,
    });
  };
  useEffect(() => {
    getsinhvien();
  }, []);

  const handleDelete = (id) => {
    dispatch({
      type: DELETE_SINH_VIEN,
      id,
    });
  };
  const handleEdit = (sv) => {
    dispatch({
      type: EDIT_SINH_VIEN,
      payload: sv,
    });
  };
  const renderTable = () => {
    return dssv?.map((sv) => {
      return (
        <tr>
          <td>{sv.id}</td>
          <td>{sv.name}</td>
          <td>{sv.email}</td>
          <td>{sv.phone}</td>
          <th>
            <button
              onClick={() => {
                handleDelete(sv.id);
              }}
              className="btn btn-danger"
            >
              DELETE
            </button>
            <button
              data-toggle="modal"
              data-target="#modelId"
              onClick={() => {
                handleEdit(sv);
              }}
              className="btn btn-warning mx-2"
            >
              EDIT
            </button>
            <button className="btn btn-success">
              <NavLink to={`/detail/${sv.id}`}>DETAIL</NavLink>
            </button>
          </th>
        </tr>
      );
    });
  };
  return (
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>PHONE</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{renderTable()}</tbody>
    </table>
  );
}
