import {
  Animator,
  batch,
  Fade,
  ScrollContainer,
  ScrollPage,
} from "react-scroll-motion";

function ChargerCom() {
  return (
    <ScrollContainer>
      <ScrollPage page={6}>
        <div className="w-full h-screen relative">
          <img
            className="hidden w-full h-full object-cover sm:block"
            src="./images/Desktop-Accessories.jpg"
            alt="model3"
          />
          <img
            src="./images/Mobile-Accessories.jpg"
            alt="model3"
            className="w-full h-full object-cover sm:hidden"
          />

          <Animator animation={batch(Fade())}>
            <div className="absolute text-center top-36 left-1/2 -translate-x-1/2 -translate-y-1/2  text-4xl font-semibold">
              Accessories
              <p className="text-xs mt-1 ">
                Produce Clean Energy From Your Roof
              </p>
            </div>
          </Animator>

          <Animator animation={batch(Fade())}>
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <button className="w-72 py-2 text-xs font-medium sm:w-80 bg-btn-back-balck text-white rounded-2xl">
                SHOP NOW
              </button>
            </div>
          </Animator>
        </div>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default ChargerCom;
