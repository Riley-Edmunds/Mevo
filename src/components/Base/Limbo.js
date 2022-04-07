import Navibar from "../Navbar/Navibar";
import Login from "../../pages/disconnected/Login";
import HomePage from "../../pages/disconnected/HomePage";
import Mevo from "../../pages/connected/Docs/Mevo";
import Blockchains from "../../pages/connected/Docs/Blockchains";
import Application from "../../pages/connected/Docs/Application";
import Future from "../../pages/connected/Docs/Future";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Fragment } from "react";

const Limbo = () => {
  return (
    <Fragment>
      <Navibar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/docsMevo" element={<Mevo />} />
        <Route path="/docsApplication" element={<Application />} />
        <Route path="/docsBlockchains" element={<Blockchains />} />
        <Route path="/docsFuture" element={<Future />} />
      </Routes>
      </Navibar>
    </Fragment>
  );
};
export default Limbo;
