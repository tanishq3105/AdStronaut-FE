import { useState } from "react";
import { NavbarText } from "./NavbarText";

export const Navbar = () => {
  const labels = [
    { label: "Home", id: "home" },
    { label: "How It Works", id: "howitworks" },
    { label: "Demo", id: "features" },
    { label: "Pricing", id: "pricing" },
    { label: "Resources", id: "resources" },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <div className="hidden md:flex gap-5 text-lg">
      {labels.map((item, index) => (
        <NavbarText
          key={index}
          index={index}
          label={item.label}
          id={item.id}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      ))}
    </div>
  );
};
