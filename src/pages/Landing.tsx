import { Appbar } from "../components/Appbar"
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
        </div>
    )
}