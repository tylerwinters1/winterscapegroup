import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Clock, Star, ChevronDown, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Gallery } from "./components/gallery"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-amber-900/30">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-amber-400">Teck's Barbershop</div>
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="hover:text-amber-400 transition-colors">
                About
              </Link>
              <Link href="#services" className="hover:text-amber-400 transition-colors">
                Services
              </Link>
              <Link href="#booking" className="hover:text-amber-400 transition-colors">
                Book Now
              </Link>
              <Link href="#testimonials" className="hover:text-amber-400 transition-colors">
                Testimonials
              </Link>
              <Link href="#contact" className="hover:text-amber-400 transition-colors">
                Contact
              </Link>
            </div>
            <Button size="sm" className="bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-none" asChild>
              <Link href="#booking">Book Now</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg" // Change from "/placeholder.svg?height=1080&width=1920"
            alt="Teck's Barbershop"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>

        <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight max-w-3xl">
            Fresh Cuts. Legendary Service.
            <span className="block mt-2 text-amber-400">Book Your Appointment at Teck's Barbershop.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
            Columbus' top destination for sharp fades, classic cuts, and professional grooming.
          </p>
          <Button
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-6 text-lg rounded-none"
            asChild
          >
            <Link href="#booking">Book Your Fresh Cut</Link>
          </Button>
        </div>

        <div className="absolute bottom-6 left-0 right-0 flex justify-center animate-bounce">
          <ChevronDown className="h-10 w-10 text-amber-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">About Teck's Barbershop</h2>
              <div className="w-20 h-1 bg-amber-400"></div>
              <p className="text-gray-300 text-lg">
                At Teck's Barbershop, we're dedicated to providing precision cuts, expert beard trims, and a welcoming
                atmosphere for clients of all ages. Our skilled barbers combine traditional techniques with modern
                styles to give you the perfect look.
              </p>
              <p className="text-gray-300 text-lg">
                Whether you're looking for a classic cut or the latest trend, our team has the expertise to deliver
                exceptional results. We pride ourselves on creating a comfortable environment where you can relax and
                leave looking your best.
              </p>
              <div className="flex space-x-6 pt-4">
                <div className="flex items-center space-x-2 text-amber-400">
                  <Clock className="h-5 w-5" />
                  <span>Tue-Sat: 9AM-7PM</span>
                </div>
                <div className="flex items-center space-x-2 text-amber-400">
                  <MapPin className="h-5 w-5" />
                  <span>Columbus, OH</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/barber-shop.jpg" // Change from "/placeholder.svg?height=800&width=600"
                alt="Barber at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
            <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Professional grooming services tailored to your style and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-zinc-900 border-amber-900/30 rounded-none overflow-hidden hover:border-amber-400 transition-all duration-300"
              >
                <div className="h-48 relative">
                  <Image src={service.image || "/placeholder.svg"} alt={service.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">{service.name}</h3>
                    <span className="text-amber-400 font-bold">${service.price}</span>
                  </div>
                  <p className="text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Ready for a Fresh Look?</h2>
            <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Book your appointment online and experience the best barbershop in Columbus.
            </p>
          </div>

          <div className="bg-zinc-800 p-4 md:p-8 rounded-lg max-w-4xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 h-[600px]">
              {/* Calendly inline widget */}
              <iframe
                src="https://calendly.com/your-calendly-link"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Schedule appointment"
                className="rounded"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-zinc-900 border-amber-900/30 rounded-none p-6 hover:border-amber-400 transition-all duration-300"
              >
                <CardContent className="p-0 space-y-4">
                  <div className="flex space-x-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.text}"</p>
                  <div className="pt-4 border-t border-zinc-800">
                    <p className="font-bold">{testimonial.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Contact & Location</h2>
              <div className="w-20 h-1 bg-amber-400"></div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-amber-400 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Address</h3>
                    <p className="text-gray-300">123 Main Street, Columbus, OH 43215</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-amber-400 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="text-gray-300">(614) 555-1234</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-amber-400 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Hours</h3>
                    <p className="text-gray-300">Tuesday - Friday: 9AM - 7PM</p>
                    <p className="text-gray-300">Saturday: 9AM - 5PM</p>
                    <p className="text-gray-300">Sunday - Monday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Link
                    href="https://instagram.com"
                    className="bg-zinc-800 p-3 rounded-full hover:bg-amber-400 hover:text-black transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://facebook.com"
                    className="bg-zinc-800 p-3 rounded-full hover:bg-amber-400 hover:text-black transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="h-[400px] rounded-lg overflow-hidden">
              {/* Google Maps embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196281.12937921327!2d-83.16316052419433!3d39.96266856063411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883889c1b990de71%3A0xe43266f8cfb1b533!2sColumbus%2C%20OH!5e0!3m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Teck's Barbershop location"
                className="rounded"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-zinc-800">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Teck's Barbershop. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link href="#" className="text-gray-400 hover:text-amber-400">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-amber-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Sample data
const services = [
  {
    name: "Haircut",
    description: "Clean, professional styles for all hair types.",
    price: 30,
    image: "/images/haircut.jpg", // Change from placeholder
  },
  {
    name: "Beard Trim",
    description: "Sculpted grooming for a refined look.",
    price: 20,
    image: "/images/beard-trim.jpg", // Change from placeholder
  },
  {
    name: "Haircut + Beard Combo",
    description: "Complete look with precision cutting and beard styling.",
    price: 45,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Line-Up",
    description: "Sharp, defined edges for a clean finish.",
    price: 15,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Kids' Cuts",
    description: "Stylish looks for younger clients (12 and under).",
    price: 25,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Hot Towel Shave",
    description: "Traditional straight razor shave with hot towel treatment.",
    price: 35,
    image: "/placeholder.svg?height=400&width=600",
  },
]

const testimonials = [
  {
    name: "Michael T.",
    text: "Best barbershop in Columbus! Teck always knows exactly how to cut my hair and keeps me looking fresh. Highly recommend to anyone looking for quality service.",
  },
  {
    name: "James W.",
    text: "I've been going to Teck's for over a year now and have never been disappointed. The atmosphere is great and the cuts are even better. Won't go anywhere else!",
  },
  {
    name: "David R.",
    text: "Finally found a barber who knows how to handle my curly hair. The attention to detail is impressive and the shop has a great vibe. Booking online makes it super convenient.",
  },
]
