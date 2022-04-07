import {
  DISPLAY_LOADING_SAGA,
  HIDE_LOADING_SAGA,
} from "../constant/loadingConstant";

const initialState = {
  isLoadingSaga: false,
};

export const LoadingSagaReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_LOADING_SAGA: {
      state.isLoadingSaga = true;
      return { ...state };
    }
    case HIDE_LOADING_SAGA: {
      state.isLoadingSaga = false;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
