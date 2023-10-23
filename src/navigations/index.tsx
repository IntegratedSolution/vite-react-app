import { GlobalPropType } from "@/App";
import RoutesName from "@/navigations/RouteNames";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailScreen from "../screens/DetailScreen";
import HomeScreen from "../screens/HomeScreen";

const RouterView = ({ globalProps }: { globalProps: GlobalPropType})=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path={RoutesName.HOME} element={<HomeScreen {...globalProps}/>} />
                <Route path={RoutesName.DETAIL} element={<DetailScreen  {...globalProps}/>} />
            </Routes>
        </BrowserRouter>
    );
}
export default RouterView;