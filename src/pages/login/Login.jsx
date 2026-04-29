import LoginBody from "../../components/loginBody/LoginBody";
import LoginFooter from "../../components/LoginFooter/LoginFooter";
import NavbarLogin from "../../components/navbarLogin/NavbarLogin";

const Login = () => {
  return (
    <div className=" bg-gradient-to-br from-[#1E3A8A] via-[#1E3A8A] to-[#3B82F6] ">
      <NavbarLogin />
      <div className="container mx-auto">
        <LoginBody />
        <LoginFooter />
      </div>
    </div>
  );
};

export default Login;
