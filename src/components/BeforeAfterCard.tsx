import { Heading } from "./heading/Heading";
import { SubHeading } from "./heading/Subheading";
import Image from "./image/Image";
import { ChevronsRightIcon } from "lucide-react";

interface propType {
  hLabel: string;
  shLabel: string;
  beforeImageUrl: string;
  AfterImageUrl: string;
  bgColor?: string;
  imgside: "left" | "right";
}

export default function BeforeAfterCard({
  hLabel,
  shLabel,
  beforeImageUrl,
  AfterImageUrl,
  bgColor,
  imgside
}: propType) {
  return (
    <div className={`w-full ${bgColor}`}>
      <div className="py-16 md:py-24 px-4 md:px-16">
        <div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
            {/* Text content always shows on mobile, conditionally on desktop */}
            <div className={`flex-1 w-full md:max-w-xl ${imgside === "left" ? "md:hidden" : ""}`}>
              <Heading
                label={hLabel}
                style="text-center md:text-left font-bold text-3xl md:text-5xl lg:text-6xl leading-tight"
              />
              <SubHeading
                label={shLabel}
                style="text-center md:text-left text-lg md:text-xl text-gray-600 font-normal mt-6"
              />
            </div>
            
            {/* Images section */}
            <div className="flex-1 w-full flex items-center justify-center gap-4">
              <div className="group relative w-40 md:w-64 lg:w-72 h-52 md:h-96 rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-indigo-600/10"></div>
                <Image url={beforeImageUrl} />
              </div>
              
              <div className="flex items-center text-indigo-600">
                <ChevronsRightIcon size={48} strokeWidth={2.5} />
              </div>

              <div className="group relative w-40 md:w-64 lg:w-72 h-52 md:h-96 rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-indigo-600/10"></div>
                <Image url={AfterImageUrl} />
              </div>
            </div>

            {/* Hidden on mobile, shows only on desktop when imgside is left */}
            <div className={`hidden ${imgside === "left" ? "md:block" : ""} flex-1 w-full md:max-w-xl`}>
              <Heading
                label={hLabel}
                style="text-center md:text-left font-bold text-3xl md:text-5xl lg:text-6xl leading-tight"
              />
              <SubHeading
                label={shLabel}
                style="text-center md:text-left text-lg md:text-xl text-gray-600 font-normal mt-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}