import React from "react";
import ReactLoading from "react-loading";
import { useDispatch, useSelector } from "react-redux";
export default function LoadingPages() {
  const isLoadingSaga = useSelector(
    (state) => state.LoadingSagaReducer.isLoadingSaga
  );
  console.log(isLoadingSaga);
  if (isLoadingSaga) {
    return (
      <div
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: 0,
          right: 0,
          left: 0,
          right: 0,
          zIndex: 5,
        }}
      >
        <ReactLoading type="spin" color="blue" height={"100px"} width="100px" />
      </div>
    );
  } else {
    return <></>;
  }
}
