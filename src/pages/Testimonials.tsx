
import TestimonialSlider from '../components/Testimonials'
import { Heading } from '../components/heading/Heading'

export default function Testimonials() {
  return (
    <div>
        <div className='px-4 sm:px-16 py-16'>

        
        <div>
            <Heading
            label='What Our Users Say'
            style='text-center font-bold text-3xl sm:text-4xl '/>
        </div>
        <TestimonialSlider/>
        </div>
    </div>
  )
}
