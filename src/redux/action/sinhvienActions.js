import {
  CHI_TIET_SINH_VIEN,
  EDIT_SINH_VIEN,
  LAY_SINH_VIEN,
} from "../constant/sinhvienconstant";
import { QLSVAXIOS } from "../../Services/SinhVienService";

export const laysinhvienAction = () => {
  return (dispatch) => {
    QLSVAXIOS.laythongtinsinhvien()
      .then((res) => {
        dispatch({
          type: LAY_SINH_VIEN,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const themsinhvienAction = (_data) => {
  return (dispatch) => {
    QLSVAXIOS.themsinhvien(_data)
      .then((res) => {
        dispatch(laysinhvienAction());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const xoasinhvienAction = (_id) => {
  return (dispatch) => {
    QLSVAXIOS.xoasinhvien(_id)
      .then((res) => {
        dispatch(laysinhvienAction());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const editsinhvienAction = (sv) => {
  return {
    type: EDIT_SINH_VIEN,
    payload: sv,
  };
};
export const capnhatsinhvienAction = (_id, _data) => {
  return (dispatch) => {
    QLSVAXIOS.capnhatsinhvien(_id, _data)
      .then((res) => {
        dispatch(laysinhvienAction());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const laychitietsinhvienAction = (_id) => {
  return (dispatch) => {
    QLSVAXIOS.layChiTietSinhVien(_id)
      .then((res) => {
        dispatch({
          type: CHI_TIET_SINH_VIEN,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
