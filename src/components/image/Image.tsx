
interface propType{
    url:string,
    style?:string
    onclick?:(e:React.MouseEvent<HTMLDivElement,MouseEvent>)=>void
}
export default function Image({url,style,onclick}:propType) {
  return (
    <img 
    src={url} 
    alt="" 
    className={`h-full w-full object-cover ${style}`}
    onClick={onclick}
    />
    
  )
}
