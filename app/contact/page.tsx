"use client"

import Image from "next/image";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const phone = "6281234567890";

  return (
    <main className="min-h-screen bg-[#4e969b] text-white px-6 py-20">
      <div className="max-w-2xl mx-auto text-center">

        {/* TITLE */}
        <h1 className="text-3xl font-bold mb-2">Contact Me</h1>
        <div className="w-16 h-2px bg-yellow-400 mx-auto mb-6"></div>

        <p className="text-gray-900 mb-10">
          Let’s talk about your project or idea. I’m available for freelance work.
        </p>

        {/* IMAGE */}
        <div className="flex justify-center mb-6">
          <div className="relative w-40 h-40">
            <div className="absolute inset-0 bg-yellow-500 rounded-full blur-xl opacity-60"></div>

            <Image
              src="/Desain_tanpa_judul-removebg-preview.png"
              alt="profile"
              fill
              className="object-cover rounded-full relative z-10 border-4 border-[#0f1f3d]"
            />
          </div>
        </div>

        {/* NAME */}
        <h2 className="text-xl font-semibold mb-2">
          I Gusti Ngurah Agung Dwisnu Adi 
        </h2>

        <p className="text-gray-900 mb-6">
          Full Stack Developer 
        </p>

        {/* SOCIAL */}
        <div className="flex justify-center gap-6 text-2xl mb-10">
        <a href="https://www.linkedin.com/in/dwisnu-adi/" target="_blank">
        <FaLinkedin className="hover:text-yellow-400 hover:scale-110 transition cursor-pointer" />
        </a>

        <a href="https://github.com/dwisnuadi" target="_blank">
        <FaGithub className="hover:text-yellow-400 hover:scale-110 transition cursor-pointer" />
        </a>
        </div>

        {/* FORM */}
        <div className="bg-[#4d6ea7] p-8 rounded-2xl space-y-8 shadow-xl px-10">

  <div className="grid md:grid-cols-2 gap-4">
    <input
      type="text"
      placeholder="Your Name"
      className="w-full p-3 rounded-lg bg-transparent border border-gray-500 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition"
    />

    <input
      type="email"
      placeholder="Your Email"
      className="w-full p-3 rounded-lg bg-transparent border border-gray-500 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition"
    />
  </div>

  <textarea
    placeholder="Your Message"
    rows={5}
    className="w-full p-3 rounded-lg bg-transparent border border-gray-500 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition"
  ></textarea>

  <a
    href={`https://wa.me/628983331157?text=Halo saya ingin bekerja sama dengan anda`}
    target="_blank"
    className="flex items-center justify-center gap-2 bg-green-500 py-3 rounded-lg font-medium hover:scale-105 hover:shadow-[0_0_15px_rgba(34,197,94,0.6)] transition"
  >
    <FaWhatsapp /> Send via WhatsApp
  </a>

</div>

      </div>
    </main>
  );
}