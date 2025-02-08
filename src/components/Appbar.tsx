import { Button } from "./Button/Button"
import { Navbar } from "./navbar/Navbar"
// import { useNavigate } from "react-router-dom";


export const Appbar=()=>{
    // const navigate = useNavigate();
    return (
      <div className="">
        <div className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md border-b border-gray-200 bg-blue-500 ">
          <div className=" mx-auto px-4 py-4 flex items-center justify-between md:px-16">
            <div className="flex gap-2">
              <div className="h-8 w-8 rounded-full bg-slate-500">
                <img src="" alt="" />
              </div>
              <span className="font-semibold text-lg md:text-2xl text-indigo-600">
                ADstronaut AI
              </span>
            </div>
            <Navbar />
            <div className="flex gap-2">
              <Button
                label="Login"
                color="hover:bg-slate-600 hover:text-white bg-slate-200"
                padding="px-2 md:px-4 py-1 md:py-2"
                // onClick={() => navigate("/login")}
              />
              <Button
                label="Get Started"
                color="bg-indigo-600 text-white hover:bg-indigo-700"
                padding="px-2 md:px-4 py-1 md:py-2"
              />
            </div>
          </div>
        </div>
      </div>
    );
}