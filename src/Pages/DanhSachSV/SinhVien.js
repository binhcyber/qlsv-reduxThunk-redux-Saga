import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  editsinhvienAction,
  laysinhvienAction,
  xoasinhvienAction,
} from "../../redux/action/sinhvienActions";
export default function SinhVien() {
  const dssv = useSelector((state) => state.sinhvienReducer.dssv);
  const dispatch = useDispatch();
  const renderSV = () => {
    dispatch(laysinhvienAction());
  };
  useEffect(() => {
    renderSV();
  }, []);
  const handleDelete = (id) => {
    dispatch(xoasinhvienAction(id));
  };
  const handleEdit = (sv) => {
    dispatch(editsinhvienAction(sv));
  };
  console.log(dssv);
  const renderTable = () => {
    return dssv?.map((sv) => {
      return (
        <tr>
          <td>{sv.id}</td>
          <td>{sv.name}</td>
          <td>{sv.email}</td>
          <td>{sv.phone}</td>
          <td>
            <button
              data-toggle="modal"
              data-target="#modelId"
              className="btn btn-warning"
              onClick={() => {
                handleEdit(sv);
              }}
            >
              EDIT
            </button>
            <button
              onClick={() => {
                handleDelete(sv.id);
              }}
              className="btn btn-danger mx-2"
            >
              DELETE
            </button>
            <button className="btn btn-success">
              <NavLink to={`/detail/${sv.id}`}>DETAIL</NavLink>
            </button>
          </td>
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
        </tr>
      </thead>
      <tbody>{renderTable()}</tbody>
    </table>
  );
}
