"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6 text-white">
      
      {/* LOGO */}
      <h1 className="text-2xl font-bold">
        BIO <span className="text-yellow-400">.</span>
      </h1>

      {/* MENU */}
      <ul className="flex gap-8">
        
        <li>
          <Link
            href="/"
            className={pathname === "/" ? "text-yellow-400" : "hover:text-yellow-400"}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/portfolio"
            className={pathname === "/portfolio" ? "text-yellow-400" : "hover:text-yellow-400"}
          >
            Portfolio
          </Link>
        </li>

        <li>
          <Link
            href="/contact"
            className={pathname === "/contact" ? "text-yellow-400" : "hover:text-yellow-400"}
          >
            Contact
          </Link>
        </li>

      </ul>
    </nav>
  );
}