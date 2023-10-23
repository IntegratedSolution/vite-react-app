import "@/App.css";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from "react-router-dom";
import RouterView from "./navigations";

export interface GlobalPropType { 
  useNavigate: typeof useNavigate; 
  useLocation: typeof useLocation;
  useSelector:typeof useSelector ; useDispatch:typeof useDispatch;
  hello:()=>void;
}
const App=()=> {
  const hello = ()=>{
    console.log("Say Hello");
  }
  const globalProps : GlobalPropType= {
    // router
    useNavigate,useLocation,hello, 
    //  store
    useSelector, useDispatch
  }
  return (
    <RouterView globalProps={globalProps}/>
  )
}

export default App
