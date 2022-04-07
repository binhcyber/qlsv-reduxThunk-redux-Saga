import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import DanhSachSV from "./Pages/DanhSachSV/DanhSachSV";
import { Switch } from "react-router-dom";
import Header from "./Component/Home/Header";
import Detail from "./Pages/Detail/Detail";
import LoadingPages from "./Component/LoadingPages/LoadingPages";
import DSSVSaga from "./Pages/DanhSachSinhVienSaga/DSSVSaga";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <LoadingPages />
        <Switch>
          <Route path={"/home"} component={Home} />
          <Route path={"/dssv"} component={DanhSachSV} />
          <Route path={"/detail/:id"} component={Detail} />
          <Route path={"/dssvsaga"} component={DSSVSaga} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
