import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import logo from "../../assets/image.png";
const NavbarLogin = () => {
  return (
    <div className="">
      <Navbar fluid={false} className="bg-[#FFFFFF0D]">
        <NavbarBrand href="https://flowbite-react.com">
          <img
            src={logo}
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-sans font-bold text-white ">
            Congnixel.AI{" "}
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink className="text-[#E5E7EB] text-sm font-normal" href="#">
            About
          </NavbarLink>
          <NavbarLink className="text-[#E5E7EB] text-sm font-normal" href="#">
            Features
          </NavbarLink>
          <NavbarLink className="text-[#E5E7EB] text-sm font-normal" href="#">
            Pricing
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
};

export default NavbarLogin;
