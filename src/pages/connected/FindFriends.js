import { Card, Avatar } from "antd";
import LayOut from "../../components/Base/LayOut";
import { Button } from "@mui/material";
import { UserOutlined } from "@ant-design/icons";
import Friend from "./Friend"
import { useSelector } from "react-redux";
const FindFriends = () => {
  const friends = useSelector((state) => state.hashSlice.users);
  const friendsList = friends.map((friend) => {
    return <Friend username={friend.username} color={friend.color} id={friend.id} />;
  });
  return (
    <LayOut style={{ textAlign: "left" }}>
      <Card
        title="Friends List"
        style={{ marginTop: "-15%", textAlign: "left" }}
      >
        {friendsList}
      </Card>
    </LayOut>
  );
};

export default FindFriends;
