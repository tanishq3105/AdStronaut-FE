import { Heading } from "./heading/Heading";
import Image from "./image/Image";
import StepCard from "./StepCard";

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
            <Image url="" />
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
          <div className="flex flex-col gap-3">
            <div className="flex justify-center items-center gap-3 md:gap-5">
              {/* Square cards */}
              <div className="aspect-square shadow-lg rounded-2xl  sm:h-52">
                <Image url="src\assets\model1.jpeg" style="rounded-2xl"/>
              </div>
              <div className="aspect-square shadow-lg rounded-2xl  sm:h-52">
              <Image url="src\assets\model2.jpeg" style="rounded-2xl"/>
              </div>
              <div className="aspect-square shadow-lg rounded-2xl  sm:h-52">
              <Image url="src\assets\model3.jpeg" style="rounded-2xl"/>
              </div>
            </div>

            <div className=" flex gap-3 items-center justify-center">
              <div className="aspect-video shadow-lg rounded-2xl sm:h-44">
              <Image url="src\assets\background1.jpeg" style="rounded-2xl"/>
              </div>
              <div className="aspect-video shadow-lg rounded-2xl sm:h-44">
              <Image url="src\assets\background2.jpeg" style="rounded-2xl"/>
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
          <Image url="" />
        </div>
        <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl aspect-[3/4] shadow-lg">
          <Image url="" />
        </div>
        <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl aspect-[3/4] shadow-lg">
          <Image url="" />
        </div>
        </div>
        
      </div>
      </div>
      
    </div>
  );
};
