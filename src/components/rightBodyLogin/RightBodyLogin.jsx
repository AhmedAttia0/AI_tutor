import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { MdEmail } from "react-icons/md";
import { FaEyeSlash, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";

const RightBodyLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    //send data to backend
  };

  const handleSocialLogin = (provider) => {
    console.log(`${provider} login clicked`);

    alert(`${provider} login is coming soon`);

    // later:
    // window.location.href = `/auth/${provider.toLowerCase()}`
  };
  return (
    <div className="w-full min-w-full">
      <Card className="">
        <div>
          <h1 className="font-bold text-[#1E3A8A] text-2xl">Welcome Back</h1>
          <p className="font-normal text-base">
            Sign in to continue your learning journey with CogniBot
          </p>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block ">
              <Label className="text-[#1E3A8A] font-semibold" htmlFor="email1">
                Email Address
              </Label>
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="your.email@example.com"
              required
              icon={MdEmail}
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2 block ">
            <Label className="text-[#1E3A8A] font-semibold" htmlFor="password1">
              password
            </Label>
          </div>
          <div className="relative">
            <TextInput
              id="password1"
              type={showPassword ? "text" : "password"}
              icon={FaLock}
              required
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-[#1E3A8A] transition-colors"
            >
              {" "}
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="flex flex-row justify-between gap-2">
            <div>
              {" "}
              <Checkbox
                id="remember"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <div>
              <Link to="#" className="font-semibold text-[#3B82F6] text-sm">
                Forgot Password?
              </Link>
            </div>
          </div>
          <Button
            className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-lg font-semibold"
            type="submit"
          >
            Sign in
          </Button>
          <div className="flex items-center my-2">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-sm text-gray-500">Or continue with</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <div className="flex flex-row justify-between gap-2">
            <div className="w-[30%]">
              <Button
                className="w-full text-xl text-[#4B5563]"
                color="alternative"
                onClick={() => handleSocialLogin("Google")}
              >
                <FaGoogle />
              </Button>
            </div>
            <div className="w-[30%] ">
              <Button
                className="w-full text-xl text-[#4B5563]"
                color="alternative"
                onClick={() => handleSocialLogin("Microsoft")}
              >
                <FaMicrosoft />
              </Button>
            </div>
            <div className="w-[30%]">
              <Button
                className="w-full text-xl text-[#4B5563]"
                color="alternative"
                onClick={() => handleSocialLogin("Apple")}
              >
                <FaApple />
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <p className="text-base">
              Don't have an account?{" "}
              <Link to="#" className="text-[#3B82F6] font-normal text-base">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </Card>
      <div className="my-3 flex flex-row items-center justify-center gap-1 bg-[#FFFFFF1A] rounded-2xl text-sm font-normal w-fit px-3 py-1 mx-auto">
        <div className="text-[#60A5FA] ">
          <FaShieldAlt />
        </div>

        <p className="text-white">Your data is encrypted and secure</p>
      </div>
    </div>
  );
};

export default RightBodyLogin;
