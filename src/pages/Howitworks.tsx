import BeforeAfterCard from "../components/BeforeAfterCard";
import { HowWorkSection } from "../components/HowWorkSection";
import beforeImg from '../assets/before.png'
import afterImg from '../assets/after.png'
export default function () {
  return (
    <div className="">
      <BeforeAfterCard
        hLabel="Convert Your Casual Photos Into High End Images"
        shLabel="Turn everyday photographs into studio grade photoshoots, at a fraction of cost and time."
        beforeImageUrl={beforeImg}
        AfterImageUrl={afterImg}
        imgside="right"
      />
      <BeforeAfterCard
        hLabel="Model Shots For All Fashion Items"
        shLabel="AI-driven on-model photoshoots for clothing, hats, scarves, and handbags."
        beforeImageUrl="src\assets\before.png"
        AfterImageUrl="src\assets\after.png"
        bgColor="bg-gray-50"
        imgside="left"
      />
      <HowWorkSection/>
    </div>
  );
}
