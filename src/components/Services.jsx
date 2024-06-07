import ServicesCard from "./ServicesCard";

import servicesCardData from "../data/servicesCardData";

import bracket from "../images/tealBrackets.webp";
import circle from "../images/circle.gif";

const Services = () => {
  return (
    <section className="h-screen flex max-w-7xl mx-auto">
      <div className="pr-12 basis-1/2">
        <p className="flex">
          <img src={bracket} alt="teal bracket" />
          <span className="text-2xl px-2">SERVICES</span>
          <img className="rotate-180" src={bracket} alt="teal bracket" />
        </p>
        <h2 className="text-5xl font-bold">Providing awesome services</h2>
      </div>
      <div className="basis-1/2">
        {servicesCardData.map((card) => {
          return (
            <ServicesCard
              key={card.title}
              img={card.img}
              title={card.title}
              description={card.description}
            />
          );
        })}
      </div>
      <div className="absolute -left-0 -translate-x-1/2 translate-y-1/2 rounded-full">
        <img src={circle} alt="Circle" className="w-72" />
        <div
          className="absolute top-4 left-6 w-60 h-60 opacity-70 rounded-full bg-main-teal"
          style={{ boxShadow: "0px 0px 20px 15px #00A79D" }}
        ></div>
      </div>
    </section>
  );
};

export default Services;
