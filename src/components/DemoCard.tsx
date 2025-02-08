import SquareBox from "./box/SquareBox";
import { Heading } from "./heading/Heading";
import { SubHeading } from "./heading/Subheading";

export default function DemoCard() {
  return (
    <div className="bg-gray-50">
      <div className="px-4 sm:px-16 py-16 md:py-24">
        <div className="mb-16 flex flex-col gap-4">
          <Heading
            label="On Model Photography"
            style="font-bold text-center text-3xl sm:text-4xl"
          />
          <SubHeading
            label="Swap Models - Explore our extensive collection of unique, license-free AI models perfect for showcasing your fashion products"
            style="text-center sm:text-lg text-gray-600"
          />
        </div>

        <div className="grid grid-cols-1 gap-y-4 md:grid md:grid-cols-2 ">
          <div className="flex justify-center">
            <div className="bg-yellow-200 aspect-[3/4] rounded-xl flex-shrink-0 w-full sm:w-[400px]">
              {/* Add any content here */}
            </div>
          </div>
          <div className="sm:flex justify-center">
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <SquareBox justify="justify-end"/>
              <SquareBox 
              justify="justify-end"/>
              <SquareBox 
              justify="justify-end"/>
              <SquareBox 
              justify=""/>
              <SquareBox 
              justify=""/>
              <SquareBox 
              justify=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
