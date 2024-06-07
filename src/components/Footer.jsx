import logo from "../images/logo-white.svg";
import fb from "../images/fb.svg";
import fbHover from "../images/fbHover.svg";
import li from "../images/li.svg";
import liHover from "../images/liHover.svg";

const Footer = () => {
  return (
    <div className="h-5/6 border rounded-[5rem] mx-20 my-8 p-8 flex justify-between items-end relative">
      <div className="text-lg font-medium leading-5 ml-8">
        <a href="#">
          <img src={logo} alt="Logo" />
        </a>
        <div className="mt-4 mb-12">
          <h4 className="text-2xl leading-6">HQ Amsterdam</h4>
          <p>PonsPontis</p>
          <p>WG Plein 180,</p>
          <p>1054SC Amsterdam,</p>
          <p>The Netherlands</p>
        </div>
        <div className="leading-6 text-xl font-light">
          <p>
            <a href="tel:+31202210186" className="hover:underline">
              +31 20 2210186
            </a>
          </p>
          <p>
            <a
              href="mailto:contact@pons-pontis.com"
              className="hover:underline"
            >
              contact@pons-pontis.com
            </a>
          </p>
        </div>
      </div>
      <div className="flex items-end">
        <div className="text-4xl">
          <h3>Be a winner!</h3>
          <h3 className="font-bold">Contact us for more info.</h3>
        </div>
        <button className="bg-main-yellow hover:bg-gradient-to-r from-pale-yellow to-main-yellow text-main-black text-2xl ml-28 px-16 py-4 rounded-full translate-x-16">
          Let's work!
        </button>
      </div>
      <div className="absolute right-0 translate-x-1/2 mb-32">
        <a href="#">
          <img src={fb} alt="facebook icon" className="mb-4" />
        </a>
        <a href="#">
          <img src={li} alt="linkedin icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
