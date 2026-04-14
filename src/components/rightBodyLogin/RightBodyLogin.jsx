import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const RightBodyLogin = () => {
  return (
    <div>
      <Card className="max-w-sm">
        <div>
          <h1 className="font-bold text-[#1E3A8A] text-2xl">Welcome Back</h1>
          <p className="font-normal text-base">
            Sign in to continue your learning journey with CogniBot
          </p>
        </div>
        <form className="flex flex-col gap-4">
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
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                className="text-[#1E3A8A] font-semibold"
                htmlFor="password1"
              >
                password
              </Label>
            </div>
            <TextInput
              id="password1"
              type="password"
              icon={FaLock}
              required
              placeholder="Enter your password"
            />
          </div>
          <div className="flex flex-row justify-between gap-2">
            <div>
              {" "}
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
           <div>
            <Link to='#' className="font-semibold text-[#3B82F6] text-sm">Forgot Password?</Link>
           </div>
          </div>
          <Button className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-lg font-semibold" type="submit">Sign in</Button>
        </form>
      </Card>
    </div>
  );
};

export default RightBodyLogin;
