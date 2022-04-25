import { Card, Avatar,Modal } from "antd";
import LayOut from "../../components/Base/LayOut";
import { Button } from "@mui/material";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { hashSliceActions } from "../../store/hashSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
const Friend = (props) => {
  const [requested, setRequested] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const dispatch = useDispatch();
  return (
    <Card style={{ width: 700 }}>
      <div style={{ float: "left", clear: "none", marginRight: "1vw" }}>
        <Avatar
          style={{ backgroundColor: `${props.color}` }}
          icon={<UserOutlined />}
          size="medium"
        ></Avatar>
      </div>
      <div style={{ marginTop: "1vh" }}>
        <h6>@{props.username}</h6>
      </div>
      <br />
      <div style={{ float: "left", clear: "none", marginRight: "1vw" }}>
        <p>Joined 2022</p>
        {props.added ? (
          <div>
            <Button
              size="small"
              variant="outlined"
              onClick={() => dispatch(hashSliceActions.deleteFriend(props.id))}
            >
              Delete
            </Button>
            <Button size="small" variant="outlined">
              <Link to={`/feed/?name=@${props.username}`}>Message</Link>
            </Button>
          </div>
        ) : (
          <Button
            size="small"
            variant="outlined"
            onClick={() => {
              showModal();
              setRequested(true);
            }}
            disabled={requested}
          >
            request
          </Button>
        )}
        <Modal
          title="Friend Request"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >          <h5>Request sent to @<b>{props.username}</b> successfully</h5>

        </Modal>
      </div>
    </Card>
  );
};
export default Friend;
