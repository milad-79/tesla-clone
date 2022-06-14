import {
  Animator,
  batch,
  Fade,
  ScrollContainer,
  ScrollPage,
} from "react-scroll-motion";

function ModelYCom() {
  return (
    <ScrollContainer>
      <ScrollPage page={1}>
        <div className="w-full h-screen  relative" id="modely">
          <img
            className="hidden w-full h-full object-cover sm:block"
            src="./images/Desktop-ModelY.jpg"
            alt="model3"
          />
          <img
            src="./images/Mobile-ModelY.jpg"
            alt="model3"
            className="w-full h-full object-cover sm:hidden"
          />

          <Animator animation={batch(Fade())}>
            <div className="absolute text-center top-36 left-1/2 -translate-x-1/2 -translate-y-1/2  text-4xl font-semibold">
              Model Y
              <p className="text-xs mt-1 ">
                Order Online for Touchless Delivery
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

export default ModelYCom;
