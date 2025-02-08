import React from "react";
import Card from "./Card";
import { Heading } from "./heading/Heading";

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
    <div>
      <Heading
        style="text-center px:4 sm:px-16 text-4xl font-bold text-black pt-4"
        label="Pricing"
      />
      <div className="p-10 sm:px-16 px-8 grid pb-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {plans.map((plan, index) => (
          <Card
            key={index}
            modelName={plan.modelName}
            price={plan.price}
            description={plan.description}
            properties={plan.properties}
            isMostPopular={plan.isMostPopular}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
