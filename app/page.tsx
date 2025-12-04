"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Star,
  MessageCircle,
  Menu as MenuIcon,
  X,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Mail,
} from "lucide-react";

const KedaiTerasBudePage = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menu = [
    { name: "Ayam Geprek", price: "Rp 12.000", img: "/menu/ayam-geprek.webp" },
    {
      name: "Chicken Katsu",
      price: "Rp 20.000",
      img: "/menu/chicken-katsu.webp",
    },
    { name: "Gule Iga", price: "Rp 35.000", img: "/menu/gule-iga.webp" },
    { name: "Pepes Ayam", price: "Rp 12.000", img: "/menu/pepes-ayam.webp" },
    { name: "Sop Iga", price: "Rp 30.000", img: "/menu/sop-iga.webp" },
  ];

  return (
    <div className="w-full min-h-screen bg-white text-gray-900 font-sans">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center gap-3">
            <img
              src="/logo/logo.webp"
              alt="Logo"
              className="w-10 h-10 rounded-full"
            />
            <h1 className="font-bold text-xl">Kedai Teras Bude</h1>
          </div>

          <nav className="hidden md:flex gap-8 font-medium text-gray-800">
            {["menu", "galeri", "testimoni", "lokasi", "kontak"].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="hover:text-yellow-600 transition"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            ))}
          </nav>

          <button className="md:hidden" onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>

        {openMenu && (
          <div className="md:hidden bg-white shadow-lg py-4 px-6 flex flex-col gap-4 font-semibold text-gray-800">
            {["menu", "galeri", "testimoni", "lokasi", "kontak"].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={() => setOpenMenu(false)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url(/images/hero.webp)" }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-xl">
            Kedai Teras Bude
          </h1>
          <p className="text-xl md:text-2xl mt-3 text-white/90">
            Nikmati cita rasa rumahan dengan suasana nyaman & hangat
          </p>

          <button
            className="mt-6 px-8 py-4 bg-yellow-500 text-white font-bold rounded-xl text-lg shadow-xl hover:bg-yellow-400 hover:scale-105 transition"
            onClick={() =>
              window.open(
                "https://wa.me/6282126015100?text=Halo%20Kedai%20Teras%20Bude%2C%20saya%20ingin%20pesan%20makanan",
                "_blank"
              )
            }
          >
            Pesan Sekarang
          </button>
        </motion.div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-20 px-6 bg-gray-50">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          Menu Terbaik Kami
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {menu.map((item) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer"
            >
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-yellow-600 font-extrabold">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONI */}
      <section id="testimoni" className="py-16 px-6 bg-gray-50">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
          Apa Kata Pelanggan
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Review asli dari pelanggan yang telah menikmati hidangan terbaik di
          Kedai Teras Bude 🍽️
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              name: "Aulia Putri",
              review:
                "Tempatnya cozy banget buat nongkrong bareng teman. Makanannya enak dan pelayanannya ramah. Harga juga sangat terjangkau!",
              rating: 5,
            },
            {
              name: "Rizki Maulana",
              review:
                "Nasi goreng spesialnya juara banget! Porsinya banyak, rasa mantap, dan cepat disajikan. Recommended deh!",
              rating: 5,
            },
            {
              name: "Sinta Amelia",
              review:
                "Tempat makan keluarga favorit kami sekarang. Menu variatif dan suasana homey banget. Pasti balik lagi!",
              rating: 5,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition border border-gray-200"
            >
              <div className="flex items-center gap-2 mb-3">
                {[...Array(item.rating)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-yellow-500"
                  >
                    <path d="M12 .587l3.668 7.568L24 9.748l-6 5.848L19.335 24 12 19.897 4.665 24 6 15.596 0 9.748l8.332-1.593z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                {item.review}
              </p>
              <h4 className="font-bold text-lg">{item.name}</h4>
              <p className="text-sm text-gray-500">Customer</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Floatin WA */}
      <a
        href="https://wa.me/6282126015100?text=Halo%20kak,%20saya%20mau%20tanya%20tentang%20menu%20kedai%20teras%20bude"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition-all flex items-center justify-center"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* LOCATION */}
      <section id="lokasi" className="py-16 px-6 bg-white">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-6">
          Lokasi Kami
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Kunjungi Kedai Teras Bude dan nikmati suasana santai serta minuman
          terbaik kami ☕
        </p>

        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.15)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.2)] transition">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7930.403226279593!2d107.36996254127163!3d-6.367949324488716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6974049af38815%3A0x4db0f6275b9fec6b!2sKosambi%2C%20Duren%2C%20Klari%2C%20Karawang%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1764836711589!5m2!1sen!2sid"
            width="100%"
            height="400"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="text-center mt-6">
          <a
            href="https://www.google.com/maps/place/Kosambi,+Duren,+Klari,+Karawang,+West+Java/@-6.3679493,107.3699625,16z/data=!3m1!4b1!4m6!3m5!1s0x2e6974049af38815:0x4db0f6275b9fec6b!8m2!3d-6.3679144!4d107.3749543!16s%2Fg%2F11b77b9y8b?entry=ttu&g_ep=EgoyMDI1MTIwMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="inline-block bg-yellow-600 hover:bg-yellow-700 text-black font-bold px-6 py-3 rounded-xl shadow-lg transition"
          >
            Buka Rute di Google Maps
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="kontak" className="bg-yellow-400 text-black mt-10">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          <div>
            <h3 className="font-bold text-lg flex items-center gap-2">
              <Clock size={20} /> Jam Buka
            </h3>
            <p className="mt-2">Senin - Minggu</p>
            <p>08:00 – 21:00 WIB</p>
          </div>
        </div>

        <div className="border-t border-black/20 py-4 text-center text-sm font-medium">
          © 2025 Kedai Teras Bude — All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

export default KedaiTerasBudePage;
