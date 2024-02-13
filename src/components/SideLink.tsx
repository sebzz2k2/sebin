import React from "react";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

const iconStyle = "h-4 w-4 xl:w-10 xl:h-10 text-cyan-900 hover:text-cyan-800";
const SideIcons = [
  {
    icon: <GitHubLogoIcon className={iconStyle} />,
    href: "#",
  },
  {
    icon: <LinkedInLogoIcon className={iconStyle} />,
    href: "#",
  },
  {
    icon: <TwitterLogoIcon className={iconStyle} />,
    href: "#",
  },
];

const SideLink = () => {
  return (
    <div className="fixed xl:right-28 h-screen rounded-full z-10 transform -translate-y-1/2 md:-translate-y-1/3">
      <div className="flex xl:gap-8 flex-col xl:mb-8 md:mb-2 lg:gap-2">
        {SideIcons.map((icon, index) => (
          <Link href={icon.href} key={index}>
            {icon.icon}
          </Link>
        ))}
      </div>
      <div className="h-1/2 bg-cyan-900 xl:w-[8px] shadow-lg m-auto lg:h-1/3"></div>
    </div>
  );
};

export default SideLink;
