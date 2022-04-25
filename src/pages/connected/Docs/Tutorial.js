import { Card } from "antd";
import LayOut from "../../../components/Base/LayOut";

const Tutorial = () => {
  return (
    <LayOut style={{textAlign:"left"}}>
        <Card title="Mevo Documentation" style={{marginTop:"-15%",textAlign:"left"}}>
        <video width="600" height="300" controls>
            <source src="images/fullvideo1.mov"/>
            Your browser does not support the video tag.
        </video>
        </Card>
    </LayOut>
    )
}
export default Tutorial;