import Navibar from "../Navbar/Navibar";
import Login from "../../pages/disconnected/Login";
import SignOut from "../../pages/connected/SignOut";
import HomePage from "../../pages/disconnected/HomePage";
import Mevo from "../../pages/connected/Docs/Mevo";
import Account from "../../pages/connected/Account";
import Connected from "../../pages/connected/Connected";
import Working from "../../pages/connected/Working";
import Feed from "../../pages/connected/Feed";
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
        <Route path="/working" element={<Working />} />
        <Route path="/account" element={<Account />} />
        <Route path="/connected" element={<Connected />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/docsMevo" element={<Mevo />} />
        <Route path="/docsApplication" element={<Application />} />
        <Route path="/docsBlockchains" element={<Blockchains />} />
        <Route path="/docsFuture" element={<Future />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
      </Navibar>
    </Fragment>
  );
};
export default Limbo;
