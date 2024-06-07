import Marquee from "react-fast-marquee";
import bracket from "../images/purpleBrackets.webp";
import clientLogos from "../data/clientLogos";

const AutoSlides = () => {
  return (
    <div className="w-3/4 mx-auto mb-28">
      <div className="flex items-center justify-between mb-4">
        <div className="pr-12 basis-1/2">
          <p className="flex">
            <img src={bracket} alt="purple bracket" />
            <span className="text-2xl px-2">CLIENTS</span>
            <img className="rotate-180" src={bracket} alt="purple bracket" />
          </p>
          <h2 className="text-5xl font-bold">Proud to work with...</h2>
        </div>
        <div>
          <button className="bg-main-purple hover:bg-gradient-to-r from-pale-purple to-main-purple text-2xl rounded-full px-20 py-4">
            See all clients
          </button>
        </div>
      </div>
      <Marquee gradient gradientColor="#1F1F1F">
        {clientLogos.map((logo) => {
          return (
            <div key={logo.img} className="max-w-60 mx-4">
              <a href="#">
                <img
                  onMouseEnter={(e) => {
                    e.target.src = logo.hoverImg;
                  }}
                  onMouseLeave={(e) => {
                    e.target.src = logo.img;
                  }}
                  src={logo.img}
                  alt="logo image"
                />
              </a>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default AutoSlides;
