import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

const LoginFooter = () => {
  return (
    <Footer container className="rounded-none bg-[#FFFFFF0D] ">
      <FooterCopyright className="text-[#DBEAFE]" href="#" by="Cognixel.AI. All rights reserved." year={2024} />
      <FooterLinkGroup>
        <FooterLink className="text-[#DBEAFE]" href="#">Privacy Policy</FooterLink>
        <FooterLink className="text-[#DBEAFE]" href="#">Terms of use</FooterLink>
        <FooterLink className="text-[#DBEAFE]" href="#">Support</FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
};

export default LoginFooter;
