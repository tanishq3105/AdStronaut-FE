interface proptype{
    justify:string
}
export default function SquareBox({justify}:proptype) {
  return (
    <div className={`sm:flex sm:flex-col ${justify}`}>
         <div className="aspect-square sm:w-[200px] sm:h-[200px] bg-green-200 rounded-xl transition ease-in-out hover:scale-105 hover:cursor-pointer">
         </div>
    </div>
  )
}
