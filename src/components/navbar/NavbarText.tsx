

interface prop{
    label:string
    index:number
    selectedIndex:number|null,
    setSelectedIndex:(n:number)=>void
}

export const NavbarText:React.FC<prop>=({label,index,selectedIndex, setSelectedIndex})=>{
    return(
        <span 
        className={`hover:text-indigo-600 hover:cursor-pointer ${(selectedIndex===index)?"text-indigo-600":"text-slate-500"}`}
        onClick={()=>{setSelectedIndex(index)}}
        >
        {label}</span>
    )
}