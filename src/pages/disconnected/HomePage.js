import Inactive from "../../components/Results/Inactive";
const { default: LayOut } = require("../../components/Base/LayOut")

const HomePage = () => {
    return(
        <LayOut>
            <Inactive/>
        </LayOut>
    );
}

export default HomePage;