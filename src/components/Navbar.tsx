"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";
import Button from "./common/button";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50">
      <div className="flex justify-between items-center py-6 px-24">
        <div className="flex items-center"></div>
        <div className="flex items-center w-2/4 justify-between">
          <NavLinks />
          <Button width="120px" height="40px">
            Resume
          </Button>
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
