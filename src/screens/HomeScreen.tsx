import { GlobalPropType } from "@/App";
import RoutesName from "@/navigations/RouteNames";
import { decrement, increment } from "@/store/reducer/counterSlice";
import { memo } from "react";
const HomeScreen = ({useNavigate,useSelector,useDispatch}:GlobalPropType)=>{
    const navigate = useNavigate();
    const count = useSelector((state:any) => state.counter.value);
    const dispatch = useDispatch();
    const add = ()=>{
        navigate( RoutesName.DETAIL, { 
              state: {  
                      name:  'arkar mann aung'
                }
        });
    }
    return <div className="mt-5 mb-5 text-center">
        HomeScreen
        <div className="my-4"><button onClick={add}>Go to Detail</button></div>        
       <div className="my-5">
        <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
            >
            _
            </button>
            <span className="mx-5">{count}</span>
            <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
            >
            +
            </button>
       </div>
       
    </div>
}
export default memo(HomeScreen);