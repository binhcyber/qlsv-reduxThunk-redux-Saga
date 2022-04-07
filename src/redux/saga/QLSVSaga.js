import {
  CAP_NHAT_SINH_VIEN,
  CHI_TIET_SINH_VIEN,
  EDIT_SINH_VIEN,
  LAY_SINH_VIEN,
  THEM_SINH_VIEN,
} from "../constant/sinhvienconstant";
import { takeLatest, call, put, delay } from "@redux-saga/core/effects";
import { QLSVAXIOS, STATUS } from "../../Services/SinhVienService";
import {
  ADD_SINH_VIEN,
  DELETE_SINH_VIEN,
  DETAIL_SINH_VIEN,
  SET_SINH_VIEN,
  UPDATE_SINH_VIEN,
} from "../action/qlsvConstSaga";
import {
  DISPLAY_LOADING,
  DISPLAY_LOADING_SAGA,
  HIDE_LOADING,
  HIDE_LOADING_SAGA,
} from "../constant/loadingConstant";
// import { LAY_SINH_VIEN } from "../constant/sinhvienconstant";

function* laysinhvienapi(action) {
  yield put({
    type: DISPLAY_LOADING_SAGA,
  });
  try {
    const { data, status } = yield call(QLSVAXIOS.laythongtinsinhvien);
    if (status === STATUS.SUCCESS) {
      yield put({
        type: LAY_SINH_VIEN,
        payload: data,
      });
    } else {
      console.log("err");
    }
  } catch (err) {
    console.log(err);
  }
  yield put({
    type: HIDE_LOADING_SAGA,
  });
  yield put({
    type: THEM_SINH_VIEN,
  });
}
function* xoasinhvienapi(action) {
  const { id } = action;
  console.log(id);
  try {
    const { data, status } = yield call(() => {
      return QLSVAXIOS.xoasinhvien(id);
    });
    if (status === STATUS.SUCCESS) {
      yield put({
        type: SET_SINH_VIEN,
      });
    }
  } catch (err) {
    console.log("err");
  }
}
function* themsinhvienapi(action) {
  const { sv } = action;
  console.log(sv);
  try {
    const { data, status } = yield call(() => {
      return QLSVAXIOS.themsinhvien(sv);
    });
    console.log(data, status);
    if (status === STATUS.ADD_SUCCESS) {
      yield put({
        type: SET_SINH_VIEN,
      });
    }
  } catch (err) {
    console.log("err");
  }
}
function* capnhatsinhvienapi(action) {
  const { sinhvien } = action;
  console.log(sinhvien);

  try {
    const { data, status } = yield call(() => {
      return QLSVAXIOS.capnhatsinhvien(sinhvien.id, sinhvien);
    });
    if (status === STATUS.SUCCESS) {
      yield put({
        type: SET_SINH_VIEN,
      });
    } else {
      console.log("res");
    }
  } catch (err) {
    console.log(err);
  }
  yield put({
    type: CAP_NHAT_SINH_VIEN,
  });
}
function* chitietsinhvienapi(action) {
  const { sinhvienDetail } = action;
  console.log(sinhvienDetail);
  yield put({
    type: DISPLAY_LOADING_SAGA,
  });
  yield delay(1000);
  try {
    const { data, status } = yield call(() => {
      return QLSVAXIOS.layChiTietSinhVien(sinhvienDetail);
    });
    if (status === STATUS.SUCCESS) {
      yield put({
        type: CHI_TIET_SINH_VIEN,
        payload: data,
      });
    } else {
      console.log("res");
    }
  } catch (err) {
    console.log(err);
  }
  yield put({
    type: HIDE_LOADING_SAGA,
  });
}
export function* followsinhvienapi() {
  yield takeLatest(SET_SINH_VIEN, laysinhvienapi);
}
export function* followDeleteSinhVien() {
  yield takeLatest(DELETE_SINH_VIEN, xoasinhvienapi);
}
export function* followAddSinVien() {
  yield takeLatest(ADD_SINH_VIEN, themsinhvienapi);
}
export function* followUpadateSinhVien() {
  yield takeLatest(UPDATE_SINH_VIEN, capnhatsinhvienapi);
}
export function* followDetailSinhVien() {
  yield takeLatest(DETAIL_SINH_VIEN, chitietsinhvienapi);
}
