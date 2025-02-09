import { Heading } from "./heading/Heading";
import Image from "./image/Image";
import StepCard from "./StepCard";
import model1 from "../assets/model1.jpeg";
import model2 from "../assets/model2.jpeg";
import model3 from "../assets/model3.jpeg";
import background1 from "../assets/background1.jpeg";
import background2 from "../assets/background2.jpeg";
import result1 from "../assets/result1.png"
import result2 from "../assets/result2.png"
import result3 from "../assets/result3.png"
import uploadImg from "../assets/upload.webp"



export const HowWorkSection = () => {
  return (
    <div className="py-16 sm:py-24 px-4 md:px-16">
      <div>
        <Heading
          label="How it Works"
          style=" font-bold text-3xl text-center sm:text-4xl mb-16"
        />
      </div>
      <div className="grid grid-cols-1 gap-8 sm:gap-16">
        <div className="sm:flex sm:justify-between">
          <StepCard
            stepNo="1"
            heading="Upload Image"
            subheading="Take a picture of yourself wearing the garment and upload."
          />
          <div className="flex justify-center items-center sm:grow">
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl aspect-square shadow-lg h-60 sm:h-[400px]">
              <Image url={uploadImg} />
            </div>
          </div>
        </div>
        <div className="sm:grid grid-cols-2 gap-4">
          <div className="sm:hidden">
            <StepCard
              stepNo="2"
              heading="Select Model and Background"
              subheading="Select the model and background of your choice."
            />
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
            <div className="flex items-center justify-center gap-3 sm:flex-col">
              <div className="aspect-square sm:aspect-video h-52 shadow-lg rounded-2xl">
                <Image
                  url={background1}
                  style="rounded-2xl h-full w-full object-cover"
                />
              </div>
              <div className="aspect-square sm:aspect-video h-52 shadow-lg rounded-2xl">
                <Image
                  url={background2}
                  style="rounded-2xl h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="flex sm:flex-col justify-center items-center gap-3 md:gap-5">
              {/* Square cards */}
              <div className="aspect-square shadow-lg rounded-2xl  sm:h-44">
                <Image url={model1} style="rounded-2xl" />
              </div>
              <div className="aspect-square shadow-lg rounded-2xl  sm:h-44">
                <Image url={model2} style="rounded-2xl" />
              </div>
              <div className="aspect-square shadow-lg rounded-2xl  sm:h-44">
                <Image url={model3} style="rounded-2xl" />
              </div>
            </div>
          </div>
          <div className=" hidden sm:flex">
            <StepCard
              stepNo="2"
              heading="Select Model and Background"
              subheading="Select the model and background of your choice."
            />
          </div>
        </div>
        <div className="sm:grid grid-cols-2">
          <StepCard
            stepNo="3"
            heading="Generate and Download"
            subheading="Yes, its that easy."
          />
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl aspect-[3/4] shadow-lg">
              <Image url={result1}
              style="rounded-2xl" 
              />
            </div>
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl aspect-[3/4] shadow-lg">
              <Image url={result2}
              style="rounded-2xl" 
              />
            </div>
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl aspect-[3/4] shadow-lg">
              <Image url={result3}
              style="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
