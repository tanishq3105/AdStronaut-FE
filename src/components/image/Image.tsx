
interface propType{
    url:string,
    style?:string
}
export default function Image({url,style}:propType) {
  return (
    <img 
    src={url} 
    alt="" 
    className={`h-full w-full object-cover ${style}`}/>
  )
}
