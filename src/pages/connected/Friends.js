import { Card, Avatar } from "antd";
import LayOut from "../../components/Base/LayOut";
import { Button } from "@mui/material";
import { UserOutlined } from "@ant-design/icons";
import Friend from "./Friend";
import { useSelector } from "react-redux";
const Friends = () => {
  const friends = useSelector((state) => state.hashSlice.friends);
  console.log(friends);
  const friendsList = friends.map((friend) => {
    return <Friend added={true} username={friend.username} color={friend.color} id={friend.id} />;
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

export default Friends;
