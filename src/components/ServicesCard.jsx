import { useState } from "react";

const ServicesCard = ({ img, title, description }) => {
  const [cardIsOpen, setCardIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setCardIsOpen(true);
  };

  const handleMouseLeave = () => {
    setCardIsOpen(false);
  };

  const dropDownContent = (
    <div className="bg-main-gray pl-20 pt-4 animate-dropdown">
      <p className="text-xl font-light">{description}</p>
      <div className="flex justify-end">
        <button className="bg-main-teal mt-12 mb-4 mr-8 px-12 py-4 font-bold text-lg">
          See more
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="bg-main-gray p-8 mb-8"
      >
        <div className="bg-main-gray flex items-center relative z-10">
          <img src={img} alt={title} />
          <h3 className="text-2xl ml-4">{title}</h3>
        </div>
        {cardIsOpen && dropDownContent}
      </div>
    </>
  );
};

export default ServicesCard;
