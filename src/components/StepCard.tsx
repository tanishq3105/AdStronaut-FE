import { Heading } from "./heading/Heading"
import { SubHeading } from "./heading/Subheading"
import Tag from "./tag/Tag"

interface propType{
    stepNo:string,
    heading:string,
    subheading:string,
    hidden?:boolean

}

export default function StepCard({stepNo,heading,subheading}:propType) {
  return (
    <div className={`pb-4 sm:flex flex-col justify-center`}>
        <div className="flex flex-col justify-center gap-4 ">
            <Tag label={`Step ${stepNo}`}/>
            <div className="sm:space-y-2">
            <Heading label={heading} style="text-2xl sm:text-5xl font-semibold sm:font-semibold text-gray-900"/>
            <SubHeading label={subheading} style="text-gray-600 sm:text-xl"/>
            </div>
            
        </div>
    </div>
  )
}
