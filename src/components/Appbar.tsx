import { Button } from "./Button/Button";
import { Navbar } from "./navbar/Navbar";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export const Appbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate=useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="">
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md"
            : "bg-indigo-50 bg-opacity-90 backdrop-blur-md bg-blue-500"
        }`}
      >
        <div className="mx-auto px-4 py-4 flex items-center justify-between md:px-16">
          <div className="flex gap-2">
            <div className="h-8 w-8 rounded-full  overflow-hidden">
              <img
                src={logo}
                alt="ADstronaut AI Logo"
                className="h-full w-full object-cover"
              />
            </div>

            <span
              className={`font-semibold text-lg md:text-2xl ${
                isScrolled ? "text-indigo-600" : "text-indigo-600"
              }`}
            >
              ADstronaut AI
            </span>
          </div>
          <Navbar />
          <div className="flex gap-2">
            <Button
              label="Login"
              color="hover:bg-slate-600 hover:text-white bg-slate-200"
              padding="px-2 md:px-4 py-1 md:py-2"
              onclick={() => navigate("/login")}
            />
            <Button
              label="Get Started"
              color="bg-indigo-600 text-white hover:bg-indigo-700"
              padding="px-2 md:px-4 py-1 md:py-2"
              onclick={() => navigate("/login")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
