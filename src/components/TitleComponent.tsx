import { memo } from "react";
// import reactLogo from './assets/react.svg';
import reactLogo from "@/assets/react.svg";
import viteLogo from '/vite.svg';

const TitleComponent = ()=>{
    return <div>
      <div className="text-center text-danger">Aar Kar Mann Aung</div>
    <a href="https://vitejs.dev" target="_blank">
      <img src={viteLogo} className="logo" alt="Vite logo" />
    </a>
    <a href="https://react.dev" target="_blank">
      <img src={reactLogo} className="logo react" alt="React logo" />
    </a>
  </div>
}

export default memo(TitleComponent);