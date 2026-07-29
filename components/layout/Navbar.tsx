"use client";

import Link from "next/link";
import useScroll from "@/hooks/useScroll";

const links = [
  { name: "Home", href: "/" },
  { name: "Work", href: "#work" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const scrolled = useScroll();
  return (
    <header
  className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
    scrolled ? "py-2" : "py-5"
  }`}
>
      <nav
  className={`
mx-auto
flex
w-[95%]
max-w-7xl
items-center
justify-between
rounded-full
border
px-8
transition-all
duration-500

${
  scrolled
    ? "border-white/10 bg-black/70 py-3 backdrop-blur-3xl shadow-2xl"
    : "border-white/5 bg-transparent py-5"
}
`}
>

        {/* Logo */}
        <Link
          href="/"
          className={`
font-bold
tracking-[0.25em]
uppercase
text-white
transition-all
duration-500

${scrolled ? "text-base" : "text-lg"}
`}
        >
          NEXTFRAME
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-sm font-medium text-gray-300 transition-all duration-300 hover:text-white"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className={`
hidden
md:flex
rounded-full
px-6
font-semibold
transition-all
duration-500

${
  scrolled
    ? "bg-violet-600 py-3 text-white"
    : "bg-white py-4 text-black"
}
`}>
          Book a Shoot
        </button>
      </nav>
    </header>
  );
}