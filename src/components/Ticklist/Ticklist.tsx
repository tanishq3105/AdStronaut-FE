import React from 'react'

interface TicklistProps{
   children: React.ReactNode
}
const Ticklist:React.FC<TicklistProps> = ({children}) => {
  return (
    <li className=" relative before:content-['✓'] before:text-indigo-600 before:font-bold before:absolute before:-left-6">
      {children}
    </li>
  );
}

export default Ticklist
