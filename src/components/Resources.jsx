import bracket from "../images/peachBrackets.webp";
import circle from "../images/circle.gif";
import ResourcesSwiper from "./ResourcesSwiper";

const Resources = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="w-3/4 h-screen mx-auto mb-28">
        <div className="flex items-center justify-between mb-4">
          <div className="pr-12 basis-2/3">
            <p className="flex">
              <img src={bracket} alt="peach bracket" />
              <span className="text-2xl px-2">AVAILABLE RESOURCES</span>
              <img className="rotate-180" src={bracket} alt="peach bracket" />
            </p>
            <h2 className="text-5xl font-bold">People that solve problems</h2>
          </div>
          <div>
            <button className="bg-main-peach hover:bg-gradient-to-r from-main-peach to-[#b83e2e] text-2xl rounded-full px-20 py-4">
              See all resources
            </button>
          </div>
        </div>
        <ResourcesSwiper />
        <div className="absolute right-0 translate-x-1/2 -translate-y-[150%] rounded-full">
          <img src={circle} alt="Circle" className="w-72" />
          <div
            className="absolute top-4 left-6 w-60 h-60 opacity-70 rounded-full bg-main-peach"
            style={{ boxShadow: "0px 0px 20px 15px #E66B5B" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
