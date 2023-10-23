import { GlobalPropType } from "@/App";
import { memo } from "react";

const DetailScreen = ({useLocation,useNavigate}:GlobalPropType)=>{
    const location = useLocation();    
    const {name} = location.state;
    const navigate = useNavigate();

    return <div className="mt-5 mb-5 text-center">
        DetailScreen {name}
        <button onClick={()=>navigate(-1)}>Go To Home Back</button>
    </div>
}
export default memo(DetailScreen);