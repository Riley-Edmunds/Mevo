import React from "react";
import { Result } from "antd";
const Inactive = () => {
  return (
    <div
      className="site-layout-background"
      style={{ marginBottom: "25%", paddingTop: "5%" }}
    >
      <Result
        title="Your Node is Currently Not Connected."
        subTitle={
          <div>
            "Lets change that, Login or Sign Up to Connect Node."
            <br />
            <br />
            <a href="images/limboMAC.zip"> DOWNLOAD LIMBO MINER FOR MAC OS.</a>
            <br />
            <a href="images/limbo-win32-ia32.zip">
              DOWNLOAD LIMBO MINER FOR WINDOWS.
            </a>
          </div>
        }
      />
    </div>
  );
};
export default Inactive;
