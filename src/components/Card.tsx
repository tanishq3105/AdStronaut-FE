import React from "react";
import Ticklist from "./Ticklist/Ticklist";
import { Button } from "./Button/Button";
import { SubHeading } from "./heading/Subheading";

interface CardDetails {
  modelName: string;
  isMostPopular?: boolean;
  price: string;
  description: string;
  properties: string[];
  selectedPlan?:string;
}

const Card: React.FC<CardDetails> = ({
  modelName,
  isMostPopular,
  price,
  description,
  properties,
  selectedPlan
}) => {
  return (
    <div
      className={`justify-between w-auto h-auto rounded-lg flex flex-col bg-white p-6 py-10 shadow-lg ${
        isMostPopular ? "border-2 border-indigo-600 relative" : ""
      }
      justify-between w-auto h-auto rounded-lg flex flex-col bg-white p-6 py-10 shadow-lg transform transition-transform duration-200 ease-in-out hover:scale-110`}
    >
      {isMostPopular && (
        <SubHeading style = "w-full absolute flex items-center justify-center top-0 left-0 bg-indigo-600 text-white text-sm font-bold px-3 py-2  rounded-t-md" label = "Most Popular"/>
      )}
      <div className="flex flex-col">
        <span className="text-xl font-bold">{modelName}</span>
        <span className="text-3xl text-indigo-600 font-bold">{price}</span>
        <span className="text-sm text-gray-700 pb-4">{description}</span>
        <ul className="list-none space-y-1 pl-4 pb-6">
          {properties.map((property, index) => (
            <Ticklist key={index}>{property}</Ticklist>
          ))}
        </ul>
      </div>
      <div>
        <Button
          label={(modelName===selectedPlan)?"Selected":"Choose Plan"}
          color={`transition ease-in-out duration-200  hover:bg-indigo-600 hover:text-white  ${
            isMostPopular
              ? "bg-indigo-600 text-white"
              : "bg-indigo-100 text-indigo-600"
          } ${(selectedPlan===modelName)?"border border-indigo-600":""}`}
          dimensions = "w-full py-1.5 px-4 sm:py-3 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Card;
