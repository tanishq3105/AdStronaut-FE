import Image from "../image/Image";

interface proptype {
  justify: string;
  imageUrl: string;
  onclick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;

}
export default function SquareBox({ justify, imageUrl ,onclick}: proptype) {
  return (
    <div className={`sm:flex sm:flex-col ${justify}`}>
      <div className="aspect-square sm:w-[200px] sm:h-[200px] rounded-xl transition ease-in-out hover:scale-105 hover:cursor-pointer"
      >
        <Image url={imageUrl} style="rounded-2xl h-full w-full object-cover"
        onclick={onclick}
        />

      </div>
    </div>
  );
}
