import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Chart2 from "./chart/Chart2";
import Nav from "./Nav";
import PeopleData from "./peopledata/PeopleData";
import Homepage from "./homepage/Homepage";
import DKTiemChung from "./dktiemchung/DKTiemChung";
import Chart1 from "./chart/Chart1";
import DangNhap from "./DangNhap";
<<<<<<< HEAD
import Test from "./chart/Test";
=======
import BangSp from "./chart/BangSp";
>>>>>>> 1c1783917473d9bf241fb697d1e47010ad26e93c

export default function Home() {
  return (
    <>
      <Router>
        <Route path="/" exact component={DangNhap} />
        <Route path="/nav" component={Nav} />
        <Route path="/nav/home" exact component={Homepage} />
        <Route path="/nav/bangsp" exact component={BangSp} />
        <Route path="/nav/dktiemchung" exact component={DKTiemChung} />
        <Route path="/nav/chart1" exact component={Chart1} />
        <Route path="/nav/test" exact component={Test} />
        <Route path="/nav/chart2" exact component={Chart2} />
        <Route path="/nav/peopledata" exact component={PeopleData} />
      </Router>
    </>
  );
}
