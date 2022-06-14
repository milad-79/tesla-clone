import React ,{useContext} from "react";
import { MyProvider } from "../../context";

function Header() {
    const context = useContext(MyProvider)
  return (
    <header className="sticky -mb-11 h-11 top-0 px-5 py-4 flex items-center justify-between lg:px-8 z-50">
      <div className="w-32 cursor-pointer">
        <svg
          className="tds-icon tds-icon-logo-wordmark tds-site-logo-icon w-full h-full"
          viewBox="0 0 342 35"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 .1a9.7 9.7 0 007 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 007-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 006-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 00-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 13.8h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 14.1h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zM308.5 7h26a9.6 9.6 0 007-7h-40a9.6 9.6 0 007 7z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div className="flex gap-3 xl:gap-5">
          <a href="#models" className="text-sm font-semibold cursor-pointer px-2 py-1 hover:bg-btns transition-opacity rounded-xl hidden lg:block">Model s</a>
          <a href="#model3" className="text-sm font-semibold cursor-pointer px-2 py-1 hover:bg-btns transition-opacity rounded-xl hidden lg:block">Model 3</a>
          <a href="#modelx" className="text-sm font-semibold cursor-pointer px-2 py-1 hover:bg-btns transition-opacity rounded-xl hidden lg:block">Model X</a>
          <a href="#modely" className="text-sm font-semibold cursor-pointer px-2 py-1 hover:bg-btns transition-opacity rounded-xl hidden lg:block">Model Y</a>
          <a href="#solarrof" className="text-sm font-semibold cursor-pointer px-2 py-1 hover:bg-btns transition-opacity rounded-xl hidden lg:block">Solar Roof</a>
          <a href="#solarpanel" className="text-sm font-semibold cursor-pointer px-2 py-1 hover:bg-btns transition-opacity rounded-xl hidden lg:block">Solar Panels</a>
      </div>
      <div className="flex gap-3 xl:gap-5">
          <span className="text-sm font-semibold cursor-pointer px-2 py-1 hover:bg-btns transition-opacity rounded-xl hidden lg:block">Shop</span>
          <span className="text-sm font-semibold cursor-pointer px-2 py-1 hover:bg-btns transition-opacity rounded-xl hidden lg:block">Accound</span>
          <span className="text-sm font-semibold cursor-pointer px-2 py-1 hover:bg-btns transition-opacity rounded-xl"
          onClick={context.menuFun}>Menu</span>
      </div>
    </header>
  );
}

export default React.memo(Header);
