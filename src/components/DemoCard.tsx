import SquareBox from "./box/SquareBox";
import { Heading } from "./heading/Heading";
import { SubHeading } from "./heading/Subheading";
import headshot1 from "../assets/modelHeadshots/1.webp";
import headshot2 from "../assets/modelHeadshots/2.webp";
import headshot3 from "../assets/modelHeadshots/3.webp";
import headshot4 from "../assets/modelHeadshots/4.webp";
import headshot5 from "../assets/modelHeadshots/5.webp";
import headshot6 from "../assets/modelHeadshots/6.webp";
import modelImage1 from "../assets/models/1.webp";
import modelImage2 from "../assets/models/2.webp";
import modelImage3 from "../assets/models/3.webp";
import modelImage4 from "../assets/models/4.webp";
import modelImage5 from "../assets/models/5.webp";
import modelImage6 from "../assets/models/6.webp";
import Image from "./image/Image";
import { useState } from "react";

export default function DemoCard() {
  const model = [
    modelImage1,
    modelImage2,
    modelImage3,
    modelImage4,
    modelImage5,
    modelImage6,
  ];
  const [index, setIndex] = useState(0);
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
            <div className="bg-yellow-200 aspect-[3/4] rounded-xl flex-shrink-0 w-full sm:w-[400px] transition ease-in-out delay-200">
              <Image
                url={model[index]}
                style="rounded-2xl h-full w-full object-cover transition-opacity duration-500 ease-in-out"
              />
            </div>
          </div>
          <div className="sm:flex justify-center">
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <SquareBox
                justify="justify-end"
                imageUrl={headshot1}
                onclick={() => setIndex(0)}
              />
              <SquareBox
                justify="justify-end"
                imageUrl={headshot2}
                onclick={() => setIndex(1)}
              />
              <SquareBox
                justify="justify-end"
                imageUrl={headshot3}
                onclick={() => setIndex(2)}
              />
              <SquareBox
                justify=""
                imageUrl={headshot4}
                onclick={() => setIndex(3)}
              />
              <SquareBox
                justify=""
                imageUrl={headshot5}
                onclick={() => setIndex(4)}
              />
              <SquareBox
                justify=""
                imageUrl={headshot6}
                onclick={() => setIndex(5)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
