const NavLink = ({ title, children }) => {
  return (
    <a href="#" className="mx-4 hover:text-main-yellow duration-300 flex">
      {title}
      {children}
    </a>
  );
};

export default NavLink;
