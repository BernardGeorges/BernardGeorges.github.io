"use client";

import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/", hover: "hover:bg-notepad" },
  { name: "About Me", href: "/about", hover: "hover:bg-sticknote_blue_title" },
  { name: "Experience", href: "/experience", hover: "hover:bg-sticknote_pink_title" },
  { name: "Skills", href: "/skills", hover: "hover:bg-sticknote_green_title" },
];

export function Header() {
  return (
    <header className="w-full pb-6 bg-background">
      <nav className="flex justify-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`
              w-24 h-24
              flex items-center justify-center
              text-center text-sm font-medium
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-lg
              rounded-xl rotate-1 even:-rotate-1
              ${link.hover}
            `}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
