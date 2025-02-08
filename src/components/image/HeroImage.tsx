import Image from './Image'
import img1 from '../../assets/heroPhotos/1.png'
import img2 from '../../assets/heroPhotos/2.png'
import img3 from '../../assets/heroPhotos/3.png'
import img4 from '../../assets/heroPhotos/4.png'
import img5 from '../../assets/heroPhotos/5.png'
import img6 from '../../assets/heroPhotos/6.png'
import img7 from '../../assets/heroPhotos/7.png'
import img8 from '../../assets/heroPhotos/8.png'
import img9 from '../../assets/heroPhotos/9.png'
import img10 from '../../assets/heroPhotos/10.png'
import img11 from '../../assets/heroPhotos/11.png'
import img12 from '../../assets/heroPhotos/12.png'

export default function ImageGallery() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12]
  
  return (
    <div className="w-full p-4">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
        {images.map((img, index) => (
          <div key={index + 1} className="">
            <Image
              url={img}
              style="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  )
}