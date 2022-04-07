import axios from "axios";
const BASE_URL = "https://623c6da67efb5abea680b636.mockapi.io/Quanlysinhvien";
export const STATUS = {
  SUCCESS: 200,
  ADD_SUCCESS: 201,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};
export const QLSVAXIOS = {
  laythongtinsinhvien: () => {
    return axios({
      method: "GET",
      url: BASE_URL,
    });
  },
  themsinhvien: (_data) => {
    return axios({
      method: "POST",
      url: BASE_URL,
      data: _data,
    });
  },
  xoasinhvien: (_id) => {
    return axios({
      method: "DELETE",
      url: `${BASE_URL}/${_id}`,
    });
  },
  layChiTietSinhVien: (id) => {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: "GET",
    });
  },
  capnhatsinhvien: (id, _data) => {
    return axios({
      method: "PUT",
      url: `${BASE_URL}/${id}`,
      data: _data,
    });
  },
};
