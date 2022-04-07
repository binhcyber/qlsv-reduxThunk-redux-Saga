import {
  CAP_NHAT_SINH_VIEN,
  CHI_TIET_SINH_VIEN,
  EDIT_SINH_VIEN,
  LAY_SINH_VIEN,
  THEM_SINH_VIEN,
} from "../constant/sinhvienconstant";

const initialState = {
  dssv: [],
  editSinhVien: null,
  chitietsv: null,
  chitietsvSage: null,
  // isLoading: true,
  disabled: false,
};

export const sinhvienReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAY_SINH_VIEN: {
      state.dssv = action.payload;
      // state.isLoading = false;
      state.disabled = true;
      return { ...state };
    }
    case EDIT_SINH_VIEN: {
      console.log(action.payload);
      state.editSinhVien = action.payload;
      state.disabled = false;
      return { ...state };
    }
    case CHI_TIET_SINH_VIEN: {
      state.chitietsvSage = action.payload;
      // state.isLoading = false;
      return { ...state };
    }
    case CAP_NHAT_SINH_VIEN: {
      state.disabled = true;
      return { ...state };
    }
    case THEM_SINH_VIEN: {
      state.disabled = true;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
