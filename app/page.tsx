import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#4e969b] text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
      <Navbar/>
        {/* LEFT */}
        <div>
          <p className="text-gray-600 mb-2">
            Hello! My name is
          </p>

          <h1 className="text-5xl font-bold mb-4">
            I Gusti ngurah Agung Dwisnu Adi.
          </h1>

          <h2 className="text-4xl font-semibold text-shadow-gray-600 mb-6">
            make your website.
          </h2>

          <p className="text-shadow-gray-600 mb-6 leading-relaxed">
            I am an aspiring web developer who enjoys solving complex problems through code. My focus lies in creating seamless user experiences (UI/UX) while ensuring robust system stability on the server side.
          </p>

          <div className="flex gap-4">

            <Link
              href="/portfolio"
              className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90"
            >
              View Portfolio
            </Link>

            <a
              href="https://github.com/dwisnuadi"
              target="_blank"
              className="border border-yellow-500 text-yellow-300 px-6 py-3 rounded-lg hover:bg-yellow-500 hover:text-black transition"
            >
              Github
            </a>

          </div>
        </div>

        {/* RIGHT (IMAGE) */}
        <div className="relative flex justify-center">
          <div className="absolute w-72 h-72 bg-yellow-500 rounded-[80%_30%_70%_25%/_60%_55%_30%_45%] animate-[morph_8s_ease-in-out_infinite]"></div>

          <Image
            src="/Desain_tanpa_judul-removebg-preview.png"
            alt="profile"
            width={200}
            height={300}
            className="relative z-10 object-cover "
          />
        </div>
      </div>
    </main>
  );
}