import {
  Animator,
  batch,
  Fade,
  ScrollContainer,
  ScrollPage,
} from "react-scroll-motion";

function SolarPanelCom() {
  return (
    <ScrollContainer>
      <ScrollPage page={4}>
        <div className="w-full h-screen  relative" id="solarpanel">
          <img
            className="hidden w-full h-full object-cover sm:block"
            src="./images/_25-HP-SolarPanels-D.jpg"
            alt="model3"
          />
          <img
            src="./images/_25-HP-SolarPanels-M.jpg"
            alt="model3"
            className="w-full h-full object-cover sm:hidden"
          />
          <Animator animation={batch(Fade())}>
            <div className="absolute text-center top-36 left-1/2 -translate-x-1/2 -translate-y-1/2  text-4xl font-semibold">
              Solar Panel
              <p className="text-xs mt-1 ">
                Lowest Cost Solar Panels in America
              </p>
            </div>
          </Animator>

          <Animator animation={batch(Fade())}>
            <div className="absolute flex flex-col md:flex-row gap-3 bottom-20 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <button className="w-72 py-2 text-xs font-medium sm:w-80 bg-btn-back-balck text-white rounded-2xl">
                ORDERS NOW
              </button>
              <button className="w-72 py-2 text-xs font-medium sm:w-80 bg-btn-back-withe text-btn-color rounded-2xl">
                LEARN MORE
              </button>
            </div>
          </Animator>
        </div>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default SolarPanelCom;
