import { Link } from "react-router-dom";
import { FiCheck, FiUsers, FiPackage, FiAward, FiHeart } from "react-icons/fi";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Beauty Begins With <span className="text-accent">You</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We believe in clean, cruelty-free, and luxurious skincare & makeup that enhances your natural glow — ethically sourced, scientifically proven.
          </p>
          <div className="mt-8">
            <img
              src="/home2bg.jpg"
              alt="Natural beauty products"
              className="w-full max-w-4xl mx-auto rounded-xl shadow-lg object-cover h-96"
            />
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Journey Since 2018
            </h2>
            <p className="text-gray-600 mb-4">
              Founded by two passionate dermatologists and a beauty enthusiast, our brand was born from a simple idea: <strong>everyone deserves safe, effective, and luxurious beauty</strong>.
            </p>
            <p className="text-gray-600">
              From a small lab in California to serving over <strong>500,000 happy customers worldwide</strong>, we’ve stayed true to our roots — using only natural, vegan, and sustainable ingredients.
            </p>
            <Link
              to="/products"
              className="mt-6 inline-block bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition"
            >
              Explore Our Products
            </Link>
          </div>
          <div className="order-first md:order-last">
            <img
              src="/homebg.jpg"
              alt="Founder mixing natural ingredients"
              className="rounded-xl shadow-md w-full object-cover h-80"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            Our Promise to You
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:scale-105 transition">
              <FiHeart className="text-accent text-4xl mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To empower confidence through clean, ethical, and high-performance beauty products that respect your skin and the planet.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:scale-105 transition">
              <FiAward className="text-accent text-4xl mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Our Vision</h3>
              <p className="text-gray-600">
                A world where beauty is inclusive, sustainable, and celebrates every unique skin tone and story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Why Customers Love Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FiCheck, title: "100% Cruelty-Free", desc: "Never tested on animals. Leaping Bunny certified." },
              { icon: FiPackage, title: "Eco-Friendly Packaging", desc: "Recyclable glass & biodegradable materials." },
              { icon: FiUsers, title: "Dermatologist Approved", desc: "Formulas tested for all skin types." },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <item.icon className="text-accent text-5xl mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "7+", label: "Years" },
              { number: "500K+", label: "Happy Customers" },
              { number: "120+", label: "Products" },
              { number: "4.9", label: "Avg Rating" },
            ].map((stat, i) => (
              <div key={i}>
                <h3 className="text-4xl md:text-5xl font-bold text-accent">{stat.number}</h3>
                <p className="text-gray-700 font-medium mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            Meet Our Founders
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: "Dr. Sarah Kim", role: "Chief Dermatologist", img: "/profile.png" },
              { name: "Emma Lopez", role: "CEO & Formulator", img: "/profile.png" },
              { name: "Mia Chen", role: "Head of Sustainability", img: "/profile.png" },
            ].map((member, i) => (
              <div key={i} className="group">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-48 h-48 mx-auto rounded-full object-cover mb-4 group-hover:scale-105 transition"
                />
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-accent">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 ">
            Ready to Glow Naturally?
          </h2>
          <p className="text-lg mb-8">
            Join thousands of beauty lovers who trust us for clean, effective, and ethical products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-white text-accent px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition "
            >
              Shop Now
            </Link>
            <Link
              to="/contact-us"
              className="border-2 border-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-accent transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}