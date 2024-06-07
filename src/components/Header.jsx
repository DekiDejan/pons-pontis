import NavLink from "./NavLink";
import logo from "../images/logo-white.svg";
import servicesDark from "../images/servicesDark.svg";

const Header = () => {
  return (
    <header className="flex items-center justify-between fixed w-full my-4 px-16 py-4 bg-main-black z-20 border-[#CCCDE0] border-opacity-50 border-2 rounded-3xl">
      <a href="#">
        <img src={logo} alt="Logo" className="w-48" />
      </a>
      <nav className="flex items-center font-light text-xl">
        <NavLink title="About us" />
        <NavLink title="Clents" />
        <NavLink title="Services" className="flex">
          <img className="pl-4" src={servicesDark} alt="White down arrow" />
        </NavLink>
        <NavLink title="Available resources" />
        <button className="bg-main-yellow hover:bg-gradient-to-r from-main-yellow to-pale-yellow duration-300 text-main-black font-medium px-8 py-2 rounded-full">
          Contact us
        </button>
      </nav>
    </header>
  );
};

export default Header;
