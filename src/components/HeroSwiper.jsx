import "./HeroSwiperStyles.css";

import heroSwiperData from "../data/heroSwiperData";

const HeroSwiper = () => {
  return (
    <>
      <main>
        <swiper-container
          space-between="20"
          panigation
          pagination-clickable
          direction="vertical"
          autoplay-delay="5000"
        >
          {heroSwiperData.map((slide) => {
            return (
              <swiper-slide key={slide.title}>
                <div className="flex flex-col justify-center h-full ml-20 mr-4">
                  <h1 className="font-bold text-7xl mb-8">{slide.title}</h1>
                  <p className="text-2xl">{slide.description}</p>
                </div>
              </swiper-slide>
            );
          })}
        </swiper-container>
      </main>
    </>
  );
};

export default HeroSwiper;
