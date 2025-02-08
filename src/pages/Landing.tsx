import { Appbar } from "../components/Appbar"
import Pricing from "../components/Pricing"
import { Demo } from "./Demo"
import { Home } from "./Home"
import Howitworks from "./Howitworks"

export const Landing=()=>{
    return(
        <div>
            <Appbar/>
            <Home/>
            <Howitworks/>
            <Demo/>
            <Pricing/>
        </div>
    )
}