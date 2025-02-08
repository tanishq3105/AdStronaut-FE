import { useState } from "react"
import { NavbarText } from "./NavbarText"

export const Navbar=()=>{
    const labels=["Home","Features","How It Works", "Pricing","Resources"]
    const [selectedIndex, setSelectedIndex]=useState<number>(0)
    
    return(
        <div className="hidden md:flex gap-5 text-lg ">
                {labels.map((label, index)=>(
                    <NavbarText 
                    key={index}
                    index={index}
                    label={label}
                    selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex}/>
                ))}
        </div>
    )
}