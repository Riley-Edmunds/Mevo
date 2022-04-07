import { Card } from "antd";
import LayOut from "../../../components/Base/LayOut";


const Mevo = ()=> {
    return(
        <LayOut style={{textAlign:"left"}}>
            <Card title="Mevo Documentation" style={{marginTop:"-15%",textAlign:"left"}}>
                <Card
                style={{ marginTop: 16 }}
                type="inner"
                title="What is Mevo?"
                >
                    Mevo is just like the most popular social media applications with a bit of a twist.
                    The main motivation behind Mevo is to provide a place where people can meet and communicate 
                    without being held to any societal standards by the moderators of the application.
                    In doing this our application will not store data in a central location but, will use Google 
                    Firebase to give all users with accounts their own personal blockchain with application data.
                    On top of that all data will be encrypted using the popular sha-256 to ensure users sensitive
                    data remains safe. Now you might be thinking what does blockchain have to do with this?
                    That will be discussed in the documentation below.
                </Card>
            </Card>
        </LayOut>
    )
};

export default Mevo;