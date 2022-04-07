import { Card } from "antd";
import LayOut from "../../../components/Base/LayOut";


const Application = ()=> {
    return(
        <LayOut style={{textAlign:"left"}}>
            <Card title="Mevo Documentation" style={{marginTop:"-15%",textAlign:"left"}}>
                <Card
                style={{ marginTop: 16 }}
                type="inner"
                title="How our Application Works"
                >
                    Our application is based on using a blockchain to store data. To store new data on a blockchain
                    we need to go through a process called mining. To make this process happen we need to verify 
                    data prior to adding or minting to the blockchain. In order to ensure this gets done quickly 
                    we enlist help form the users via the node desktop application. This is the application needed
                    for users to create their accounts and add to their list of post credits. These two things are 
                    simply an incentive for users to help us provide decentralization and security.
                </Card>
            </Card>
        </LayOut>
    )
};

export default Application;