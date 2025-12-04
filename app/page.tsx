"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Star,
  Menu as MenuIcon,
  X,
  MapPin,
  Clock,
  Instagram,
  Facebook,
} from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const KedaiTerasBudePage = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const menu = [
    {
      name: "Ayam Geprek",
      price: "Rp 12.000",
      img: "/menu/ayam-geprek.webp",
    },
    {
      name: "Chicken Katsu",
      price: "Rp 20.000",
      img: "/menu/chicken-katsu.webp",
    },
    {
      name: "Gule Iga",
      price: "Rp 35.000",
      img: "/menu/gule-iga.webp",
    },
    {
      name: "Pepes Ayam",
      price: "Rp 12.000",
      img: "/menu/pepes-ayam.webp",
    },
    {
      name: "Sop Iga",
      price: "Rp 30.000",
      img: "/menu/sop-iga.webp",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white text-gray-900 font-sans">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center gap-2">
            <img
              src="/logo/logo.webp"
              alt="Logo"
              className="w-10 h-10 rounded-full"
            />
            <h1 className="font-bold text-xl">Kedai Teras Bude</h1>
          </div>
          <nav className="hidden md:flex gap-6 font-semibold text-gray-800">
            <a href="#menu" className="hover:text-yellow-600 transition">
              Menu
            </a>
            <a href="#galeri" className="hover:text-yellow-600 transition">
              Galeri
            </a>

            <a href="#lokasi" className="hover:text-yellow-600 transition">
              Lokasi
            </a>
            <a href="#kontak" className="hover:text-yellow-600 transition">
              Kontak
            </a>
          </nav>
          <button className="md:hidden" onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
        {openMenu && (
          <div className="md:hidden bg-white shadow-lg py-4 px-6 flex flex-col gap-4 font-semibold text-gray-800">
            <a href="#menu" onClick={() => setOpenMenu(false)}>
              Menu
            </a>
            <a href="#galeri" onClick={() => setOpenMenu(false)}>
              Galeri
            </a>

            <a href="#lokasi" onClick={() => setOpenMenu(false)}>
              Lokasi
            </a>
            <a href="#kontak" onClick={() => setOpenMenu(false)}>
              Kontak
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="hero"
        className="relative w-full h-auto mt-20 py-5 bg-cover bg-no-repeat bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(/images/hero.webp)` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center px-4"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            Kedai Teras Bude
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium">
            Rumah makan nyaman dengan cita rasa rumahan
          </p>
          <button
            className="mt-6 px-6 py-3 bg-yellow-500 text-white font-bold rounded-xl text-lg shadow-lg hover:bg-yellow-400 transition"
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
      <section id="menu" className="py-16 px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
          Menu Terbaik Kami
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {menu.map((item) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] transition cursor-pointer flex flex-col"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-56 object-cover" // FIX HEIGHT
              />

              <div className="p-4 text-center flex flex-col flex-grow justify-between">
                <h3 className="text-xl font-semibold mb-1">{item.name}</h3>
                <p className="text-yellow-600 font-bold">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONI */}
      <section
        id="testimoni"
        className="py-16 px-6 text-center max-w-5xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Testimoni Pelanggan
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <div className="bg-white shadow-lg p-6 rounded-2xl max-w-sm mx-auto">
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="gold" stroke="gold" />
              ))}
            </div>
            <p className="text-lg">
              "Makanannya enak banget, harga bersahabat. Tempatnya nyaman!"
            </p>
            <p className="font-bold mt-2">– Rani Permata</p>
          </div>
        </div>
      </section>

      {/* LOKASI */}
      <section id="lokasi" className="py-16">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-6">
          Lokasi Kedai
        </h2>
        <div className="max-w-5xl mx-auto px-6">
          <iframe
            className="w-full h-72 rounded-2xl shadow-lg"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18..."
          ></iframe>
        </div>
      </section>

      {/* FLOATING WA */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/6282126015100?text=Halo%20Kedai%20Teras%20Bude%2C%20saya%20ingin%20pesan"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-xl transform transition hover:scale-105"
        >
          <Phone size={20} />
          <span className="hidden md:inline font-semibold">Chat WA</span>
        </a>
      </div>

      {/* FOOTER */}
      <footer id="kontak" className="bg-yellow-400 text-black mt-16">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Alamat */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <h3 className="font-bold text-lg">Alamat</h3>
            </div>
            <p>Jl. Mawar No.12</p>
            <p>Kota Anda, Indonesia</p>
          </div>

          {/* Jam Buka */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <Clock size={20} />
              <h3 className="font-bold text-lg">Jam Buka</h3>
            </div>
            <p>Senin - Minggu: 08.00 – 21.00</p>
          </div>
        </div>

        <div className="border-t border-black/20 mt-6 pt-4 text-center text-sm">
          © 2025 Kedai Teras Bude — All Rights Reserved.
        </div>
      </footer>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={gallery.map((src) => ({ src }))}
          index={lightboxIndex}
          controller={{ closeOnBackdropClick: true }}
        />
      )}
    </div>
  );
};

export default KedaiTerasBudePage;
