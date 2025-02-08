import { Heading } from "./heading/Heading";
import Question from "./Question";
import { faqs } from "../config/faqs";

export default function FaqCard() {
  return (
    <div className=" px-4">

        <div className="flex flex-col gap-4">
            <Heading
            label="Frequently Asked Questions"
            style="text-center text-3xl sm:text-4xl text-indigo-600 font-bold px-5 mb-16"
            />
            <div className="flex flex-col gap-4 mx-auto">
            {faqs.map((faq)=>(
                <Question
                question={faq.question}
                ans={faq.ans}
                />
            ))}
            </div>
            
            
        </div>
        
    </div>
  )
}
