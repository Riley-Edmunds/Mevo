import { Card } from "antd";
import LayOut from "../../../components/Base/LayOut";


const Future = ()=> {
    return(
        <LayOut style={{textAlign:"left"}}>
            <Card title="Mevo Documentation" style={{marginTop:"-15%",textAlign:"left"}}>
                <Card
                style={{ marginTop: 16 }}
                type="inner"
                title="Future Functions"
                >
                    This application is currently very similar to other social medias. However, there is 
                    plenty of room for new functions that will allow our users to further connect with
                    one another and enjoy themselves while using Mevo. A future quality of life function
                    our team would enjoy adding is a voting system so posts can be regulated by the community 
                    itself. This voting functionality would likely have to overwrite the data already on the 
                    blockchain as blockchains are immutable (the data can't be deleted). Another function we 
                    could eventually provide is private communities or group messaging. This would allow for 
                    users to communicate within groups like how Discord provides messaging within channels.
                </Card>
            </Card>
        </LayOut>
    )
};

export default Future;