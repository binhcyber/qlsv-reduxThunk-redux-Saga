import { all } from "@redux-saga/core/effects";
import * as QLSVAPI from "./QLSVSaga";
export function* rootSaga() {
  yield all([
    QLSVAPI.followsinhvienapi(),
    QLSVAPI.followDeleteSinhVien(),
    QLSVAPI.followAddSinVien(),
    QLSVAPI.followUpadateSinhVien(),
    QLSVAPI.followDetailSinhVien(),
  ]);
}
