import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface propType{
    question:string;
    ans:string
}
export default function Question({question,ans}:propType) {
   
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <div 
                className="bg-white rounded-lg shadow-lg "
                onClick={handleClick}
            >
                <div className="p-4 ">
                    <div className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span className="text-lg text-gray-800">
                           {question}
                        </span>
                        <span className={`transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                            <ChevronDown />
                        </span>
                    </div>
                    <div 
                        className={`overflow-hidden transition-all duration-200 ${
                            isOpen ? "max-h-24 mt-2 opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                        <span className="text-gray-600">
                            {ans}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}