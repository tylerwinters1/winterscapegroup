import Image from "next/image"

const galleryImages = [
  { src: "/images/gallery/image1.jpg", alt: "Haircut style 1" },
  { src: "/images/gallery/image2.jpg", alt: "Haircut style 2" },
  { src: "/images/gallery/image3.jpg", alt: "Barber shop interior" },
  { src: "/images/gallery/image4.jpg", alt: "Beard trim" },
  { src: "/images/gallery/image5.jpg", alt: "Kids haircut" },
  { src: "/images/gallery/image6.jpg", alt: "Classic cut" },
]

export function Gallery() {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Our Work</h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Check out some of our recent cuts and styles.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
