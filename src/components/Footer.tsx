import { Heading } from "./heading/Heading";

export default function Footer() {
  return (
    <div className="bg-gray-50 text-black px-8 py-12 md:px-16 sm:px-16 md:py-16 sm:py-16 sm:flex sm:flex-col items-center sm:justify-between">
      <div className="w-full flex sm:flex-col justify-between">
        <div className=" flex flex-col sm:flex-row gap-4  justify-between">
          <div className="space-y-4">
            <Heading
              label="ADstronaut"
              style="text-2xl font-semibold tracking-tight"
            />
            <div className="max-w-xl text-base md:text-lg md:text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis, porro.
            </div>
          </div>
            
          <div className="grid grid-cols-2 gap-8 md:gap-24 sm:gap-4 max-w-xl">
            <div className="space-y-4">
              <a href="/" className="block text-sm font-semibold ">
                About Us
              </a>
              <a href="/" className="block text-sm font-semibold ">
                Help Center
              </a>
              <a href="/" className="block text-sm font-semibold ">
                Blog
              </a>
            </div>
            <div className="space-y-4">
              <a href="/" className="block text-sm font-semibold">
                Talk to sales
              </a>
              <a href="/" className="block text-sm font-semibold ">
                Send us a message
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-gray-700 pt-8 text-center text-sm mt-8">
        <div>
          {new Date().getFullYear()} ADstronaut, all rights reserved.
          <a href="/" className="">
            Terms of service
          </a>{" "}
          |{" "}
          <a href="/" className="">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}
