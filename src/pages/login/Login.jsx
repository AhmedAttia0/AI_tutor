import LoginBody from "../../components/loginBody/LoginBody";
import LoginFooter from "../../components/LoginFooter/LoginFooter";
import NavbarLogin from "../../components/navbarLogin/NavbarLogin";

const Login = () => {
  return (
    <div className="h-[100vh] bg-gradient-to-br from-[#1E3A8A] via-[#1E3A8A] to-[#3B82F6]">
      <NavbarLogin />
      <LoginBody/>
      <LoginFooter/>

    </div>
  );
};

export default Login;
