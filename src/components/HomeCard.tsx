import { Button } from "./Button/Button";
import { Heading } from "./heading/Heading";
import { SubHeading } from "./heading/Subheading";
import HeroImage from "./image/HeroImage";


export const Homecard = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto text-center mb-12">
        <Heading
          label="Grow Your Fashion Brand With
AI-Powered Fashion Models"
          style="font-bold text-center text-4xl md:text-5xl text-indigo-600 mb-8"
        />
        <SubHeading
          label="Cut Photoshoot Costs & Launch Campaigns In Minutes"
          style="text-center text-xl mb-8 text-gray-600"
        />
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
          <Button
            label="Start Creating"
            color="bg-indigo-600 text-white"
            dimensions="w-full py-3  md:px-6"
          />
          <Button
            label="Try For Free"
            color="border border-indigo-600 text-indigo-600 hover:bg-indigo-100"
            dimensions="w-full py-3 md:px-6"
          />
        </div>
      </div>
      <div className="md:px-16">
        <HeroImage/>
      </div>
    </div>
  );
};
