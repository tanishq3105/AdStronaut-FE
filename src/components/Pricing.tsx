import React from "react";
import Card from "./Card";
import { Heading } from "./heading/Heading";
import { SubHeading } from "./heading/Subheading";

const Pricing: React.FC = () => {
  const plans = [
    {
      modelName: "Adstronaut Free",
      price: "$0/mo",
      description: "Perfect for early adpoters",
      properties: [
        "5 Photo Credits",
        "Access to all Models",
        "Access to all Backgrounds",
        "<12 hour 'Turnaround Time'`",
        "Watermarked Images",
      ],
    },
    {
      modelName: "Adstronaut Basic",
      price: "$23.99/mo",
      description: "Best for growing businesses",
      properties: ["20 Photo credits", "HD resolution", "No watermark"],
    },
    {
      modelName: "Adstronaut Pro",
      price: "$49.99/mo",
      isMostPopular: true,
      description: "Perfect for small to medium size buisnesses",
      properties: [
        "50 photo credits",
        "Upto 2k resolution",
        "Access to all models",
        "Studio + Outdoor Photoshoots",
        "No watermark",
      ],
    },
    {
      modelName: "Adstronaut Studio",
      price: "$169.99/mo",
      description: "Best for large businesses",
      properties: [
        "200 Photo credits",
        "Upto 2k resolution",
        "Access to all Models",
        "Studio + Outdoor Photoshoots",
        "Headless Photo Enhancement",
        "No watermark",
      ],
    },
  ];

  return (
    <div className="py-16 sm:py-24 px-4 sm:py-16 bg-indigo-50">
      <div className="mb-16 flex flex-col gap-4">

      <Heading
        style="text-center text-3xl sm:text-4xl font-bold text-black "
        label="Pricing"
      />
      <SubHeading
      style="text-center text-gray-500"
      label="Tailored Pricing Options for Stunning AI Fashion Model Creations"
      />
      </div>
      <div className="p-10 grid pb-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {plans.map((plan, index) => (
          <Card
            key={index}
            modelName={plan.modelName}
            price={plan.price}
            description={plan.description}
            properties={plan.properties}
            isMostPopular={plan.isMostPopular}
            selectedPlan="Adstronaut Free"
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
