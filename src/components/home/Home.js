import React from "react";
import Chart1 from "../chart/Chart1";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Chart2 from "../chart/Chart2";
import Nav from "./Nav";
import Search from "../search/Search";
import Homepage from "../homepage/Homepage";

export default function Home() {
  return (
    <>
      <Router>
        <Nav />
        <Route path="/" exact component={Homepage} />
        <Route path="/chart1" component={Chart1} />
        <Route path="/chart2" component={Chart2} />
        <Route path="/search" component={Search} />
      </Router>
    </>
  );
}
