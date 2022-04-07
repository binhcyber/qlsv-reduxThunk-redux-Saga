import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { laychitietsinhvienAction } from "../../redux/action/sinhvienActions";
import { DETAIL_SINH_VIEN } from "../../redux/action/qlsvConstSaga";

export default function Detail(props) {
  console.log(props.match.params.id);
  const dispatch = useDispatch();
  const chitietsvSage = useSelector(
    (state) => state.sinhvienReducer.chitietsvSage
  );
  console.log(chitietsvSage);

  let sinhvienDetail = props.match.params.id;
  useEffect(() => {
    dispatch({
      type: DETAIL_SINH_VIEN,
      sinhvienDetail,
    });
  }, [sinhvienDetail]);
  return (
    <div>
      <p>NAME: {chitietsvSage?.name}</p>
      <p>EMAIL: {chitietsvSage?.email}</p>
      <p>PHONE: {chitietsvSage?.phone}</p>
    </div>
  );
}
