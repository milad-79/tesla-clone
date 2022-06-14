import React, { useContext } from "react";
import { MyProvider } from "../../context";

function Sidebar() {
  const context = useContext(MyProvider);

  return (
    <>
      <div
        className={`w-64 sidebar overflow-y-auto fixed bg-white ${
          context.open ? "active" : "notActive"
        }`}
      >
        <header className="w-full relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5  absolute right-1 top-1 cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={context.menuFun}
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </header>

        <div className="mt-12 px-3">
          <div className="px-2 text-sm rounded-md font-semibold hover:bg-hover py-2 transition-all mt-2 cursor-pointer">
            Model S
          </div>
          <div className="px-2 text-sm rounded-md font-semibold hover:bg-hover py-2 transition-all mt-2 cursor-pointer">
            Model 3
          </div>
          <div className="px-2 text-sm rounded-md font-semibold hover:bg-hover py-2 transition-all mt-2 cursor-pointer">
            Model X
          </div>
          <div className="px-2 text-sm rounded-md font-semibold hover:bg-hover py-2 transition-all mt-2 cursor-pointer">
            Model Y
          </div>
          <div className="px-2 text-sm rounded-md font-semibold hover:bg-hover py-2 transition-all mt-2 cursor-pointer">
            Solar Roof
          </div>
          <div className="px-2 text-sm rounded-md font-semibold hover:bg-hover py-2 transition-all mt-2 cursor-pointer">
            Solar Panels
          </div>
          <div className="px-2 text-sm rounded-md font-semibold hover:bg-hover py-2 transition-all mt-2 cursor-pointer">
            Existing Inventory
          </div>
          <div className="px-2 text-sm rounded-md font-semibold hover:bg-hover py-2 transition-all mt-2 cursor-pointer">
            Used Inventory
          </div>
          <div className="px-2 text-sm rounded-md font-semibold hover:bg-hover py-2 transition-all mt-2 cursor-pointer">
            Trade-in
          </div>
          <div className="px-2 text-sm rounded-md font-semibold hover:bg-hover py-2 transition-all mt-2 cursor-pointer">
            Test Drive
          </div>
          <div className="px-2 text-sm rounded-md font-semibold hover:bg-hover py-2 transition-all mt-2 cursor-pointer">
            Powerwall
          </div>
          <div className="px-2 text-sm rounded-md font-semibold hover:bg-hover py-2 transition-all mt-2 cursor-pointer">
            Commercial Energy
          </div>
          <div className="px-2 text-sm rounded-md font-semibold hover:bg-hover py-2 transition-all mt-2 cursor-pointer">
            Utilities
          </div>
          <div className="px-2 text-sm rounded-md font-semibold hover:bg-hover py-2 transition-all mt-2 cursor-pointer">
            Charging
          </div>
          <div className="px-2 text-sm rounded-md font-semibold hover:bg-hover py-2 transition-all mt-2 cursor-pointer">
            Find Us
          </div>
          <div className="px-2 text-sm rounded-md font-semibold hover:bg-hover py-2 transition-all mt-2 cursor-pointer">
            Support
          </div>
          <div className="px-2 text-sm rounded-md font-semibold hover:bg-hover py-2 transition-all mt-2 cursor-pointer">
            investor Relations
          </div>
          <div className="px-2 text-sm rounded-md font-semibold hover:bg-hover py-2 transition-all mt-2 cursor-pointer">
            shop
          </div>
          <div className="px-2 text-sm rounded-md font-semibold hover:bg-hover py-2 transition-all mt-2 cursor-pointer">
            Accound
          </div>
          <div className="px-2 text-sm rounded-md font-semibold hover:bg-hover py-2 transition-all mt-2 cursor-pointer flex items-center justify-between">
            <p>More</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
          <div className="px-2 mb-8 text-sm rounded-md font-semibold hover:bg-hover py-2 transition-all mt-2 cursor-pointer flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
            <div className="block">
                <p>United States</p>
                <p className="text-gray-500 text-sm font-light">English</p>
            </div>
          </div>
        </div>
      </div>
      {context.open ? (
        <div className="fixed pointer-events-none top-0 left-0 w-full h-full bg-backdrop z-40"></div>
      ) : null}
    </>
  );
}

export default React.memo(Sidebar);
