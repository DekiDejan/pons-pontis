import heroImg from "../images/PP-Hero-Mask-video-dark.svg";
import videoBackground from "../images/video.mp4";
import HeroSwiper from "./HeroSwiper";

const Hero = () => {
  return (
    <section className="h-screen pt-28">
      <div className="h-5/6 border rounded-[5rem] mx-8 flex items-center">
        <div className="basis-3/4">
          <HeroSwiper />
        </div>
        <div className="bg-transparent w-1/2 m-4 relative">
          <img src={heroImg} alt="Hero Image" />
          <video
            src={videoBackground}
            className="w-full h-full absolute inset-0 -z-10 object-cover p-1"
            autoPlay
            muted
            loop
          ></video>
        </div>
      </div>
      <button className="bg-main-yellow hover:bg-gradient-to-r from-main-yellow to-pale-yellow text-main-black font-medium text-2xl px-16 py-4 rounded-full -translate-y-1/2 ml-24 mr-4">
        Get to know us
      </button>
      <button className="bg-main-black hover:bg-gradient-to-r from-main-black to-[#3f3f3f] text-main-yellow font-medium text-2xl px-16 py-4 rounded-full border border-main-yellow -translate-y-1/2 ">
        Find professionals
      </button>
    </section>
  );
};

export default Hero;
