"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50">
      <div className="flex justify-between items-center py-6 px-24">
        <div className="flex items-center"></div>
        <div className="flex items-center w-2/4 justify-between">
          <NavLinks />
          <button className="w-[7rem] h-[2.5rem] p-2.5 bg-white rounded shadow-xl border font-firaCode text-cyan-950 border-cyan-950 justify-center items-center gap-2.5 inline-flex text-lg">
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const navContents = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Experience",
    href: "/experience",
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <>
      {navContents.map((navItem, idx) => (
        <Link
          key={idx}
          className="inline-block text-lg text-cyan-950 no-underline hover:text-gray-800 hover:text-underline py-2 px-4 "
          href={navItem.href}
        >
          <span
            className={`font-firaCode link link-underline link-underline-black pb-[2px] ${
              pathname === navItem.href ? "link-active" : ""
            }`}
          >
            {navItem.name}
          </span>
        </Link>
      ))}
    </>
  );
};
