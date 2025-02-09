type NavbarTextProps = {
    index: number;
    label: string;
    id: string;
    selectedIndex: number;
    setSelectedIndex: (index: number) => void;
  };
  
  export const NavbarText = ({
    index,
    label,
    id,
    selectedIndex,
    setSelectedIndex,
  }: NavbarTextProps) => {
    const handleClick = () => {
      setSelectedIndex(index);
  
      // Scroll to the corresponding section
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    return (
      <button
        onClick={handleClick}
        className={`${
          selectedIndex === index ? "text-indigo-600 font-semibold" : "text-gray-700"
        }`}
      >
        {label}
      </button>
    );
  };
  