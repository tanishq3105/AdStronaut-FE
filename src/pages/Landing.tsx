import { Appbar } from "../components/Appbar"
import Footer from "../components/Footer"
import Pricing from "../components/Pricing"
import { Demo } from "./Demo"
import { Faq } from "./Faq"
import { Home } from "./Home"
import Howitworks from "./Howitworks"
import Testimonials from "./Testimonials"

export const Landing=()=>{
    return(
        <div>
            <Appbar/>
            <Home/>
            <Howitworks/>
            <Demo/>
            <Pricing/>
            <Faq/>
            <Testimonials/>
            <Footer/>
        </div>
    )
}