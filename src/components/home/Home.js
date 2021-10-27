import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Chart2 from "./chart/Chart2";
import Nav from "./Nav";
import PeopleData from "./peopledata/PeopleData";
import Homepage from "./homepage/Homepage";
import DKTiemChung from "./dktiemchung/DKTiemChung";
import Chart1 from "./chart/Chart1";

export default function Home() {
  return (
    <>
      <Router>
        <Nav />
        <Route path="/" exact component={Homepage} />
        <Route path="/dktiemchung" exact component={DKTiemChung} />
        <Route path="/chart1" exact component={Chart1} />
        <Route path="/chart2" exact component={Chart2} />
        <Route path="/peopledata" exact component={PeopleData} />
      </Router>
    </>
  );
}
