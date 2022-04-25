import Navibar from "../Navbar/Navibar";
import Login from "../../pages/disconnected/Login";
import SignOut from "../../pages/connected/SignOut";
import HomePage from "../../pages/disconnected/HomePage";
import Mevo from "../../pages/connected/Docs/Mevo";
import Tutorial from "../../pages/connected/Docs/Tutorial";
import Account from "../../pages/connected/Account";
import Connected from "../../pages/connected/Connected";
import Working from "../../pages/connected/Working";
import Feed from "../../pages/connected/Feed";
import Friends from "../../pages/connected/Friends";
import FindFriends from "../../pages/connected/FindFriends";
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
        <Route path="/docsTutorial" element={<Tutorial />} />
        <Route path="/docsBlockchains" element={<Blockchains />} />
        <Route path="/docsFuture" element={<Future />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/feed/*" element={<Feed />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/findFriends" element={<FindFriends />} />
      </Routes>
      </Navibar>
    </Fragment>
  );
};
export default Limbo;
