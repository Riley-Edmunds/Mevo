import { Card } from "antd";
import LayOut from "../../../components/Base/LayOut";


const Blockchains = ()=> {
    return(
        <LayOut style={{textAlign:"left"}}>
            <Card title="Mevo Documentation" style={{marginTop:"-15%",textAlign:"left"}}>
                <Card
                style={{ marginTop: 16 }}
                type="inner"
                title="Why Blockchains?"
                >
                    Blockchains have recently become a buzz word with the rise of cryptocurrencies. 
                    However, blockchains are not limited to cryptocurrencies they are simply a way of 
                    storing data. We use blockchains as a way maintaining mutual power between all users.
                    We found this a necessity to eliminate the possibility of rouge administrators, third
                    party tampering, and other power hierarchies. Blockchain does this by being immutable,
                    meaning that data once on the blockchain cannot be altered or deleted. Therefore, if 
                    a user is to do any action that needs to be added to the blockchain such as making
                    a post it cannot be erased.
                </Card>
            </Card>
        </LayOut>
    )
};

export default Blockchains;