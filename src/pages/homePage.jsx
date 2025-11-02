import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO SLIDER  */}
      <section className="relative h-[87vh] overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          loop
          className="h-full"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="relative h-full bg-gradient-to-r from-white-100 to-pink-100 flex items-center">
              <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center">
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                    Glow Naturally
                  </h1>
                  <p className="text-lg md:text-xl text-gray-700 mb-6">
                    Discover clean, cruelty-free skincare that loves your skin back.
                  </p>
                  <Link
                    to="/products"
                    className="bg-accent text-white px-8 py-3 mb-3 rounded-full font-medium hover:bg-black transition inline-block"
                  >
                    Shop Now
                  </Link>
                </div>
                <img
                  src="/home5.jpg"
                  alt="Natural skincare"
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="relative h-full bg-gradient-to-r from-white-100 to-yellow-50 flex items-center">
              <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center">
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                    New Arrivals
                  </h1>
                  <p className="text-lg md:text-xl text-gray-700 mb-6 mr-4">
                    Hydrating serums, vegan lipsticks, and more — just dropped!
                  </p>
                  <Link
                    to="/products"
                    className="bg-accent text-white px-8 py-3 mb-3 rounded-full font-medium hover:bg-black transition inline-block"
                  >
                    Explore New
                  </Link>
                </div>
                <img
                  src="/home8.jpg"
                  alt="New makeup"
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="relative h-full bg-gradient-to-r from-white-100 to-green-100 flex items-center">
              <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center">
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                    30% Off Sale
                  </h1>
                  <p className="text-lg md:text-xl text-gray-700 mb-6 mr-4">
                    Limited time: Best-sellers on sale. Don’t miss out!
                  </p>
                  <Link
                    to="/products"
                    className="bg-accent text-white px-8 py-3 mb-3 rounded-full font-medium hover:bg-black transition inline-block"
                  >
                    Shop Sale
                  </Link>
                </div>
                <img
                  src="/home9.jpg"
                  alt="Sale banner"
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      

    
    </div>
  );
}