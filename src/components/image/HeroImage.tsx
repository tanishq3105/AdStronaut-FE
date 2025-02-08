import Image from './Image'

export default function ImageGallery() {
  const photoNo = Array.from({ length: 12 }, (_, i) => i + 1)
  
  return (
    <div className="w-full p-4 ">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
        {photoNo.map((no) => (
          <div key={no} className="">
            <Image
              url={`src/assets/heroPhotos/${no}.png`}
              style="rounded-lg "
            />
          </div>
        ))}
      </div>
    </div>
  )
}

