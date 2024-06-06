import { cn } from "@/lib/utils";
import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  width?: string;
  height?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onclick?: () => void;
}
const Button = ({
  children,
  width,
  height,
  variant,
  className,
  ...props
}: Props) => {
  return (
    <button
      {...props}
      className={cn(
        "p-2.5 bg-white rounded shadow-xl border font-firaCode text-cyan-950 border-cyan-950 justify-center items-center gap-2.5 inline-flex text-lg",
        variant === "primary"
          ? "bg-cyan-950 text-white"
          : "bg-white text-cyan-950",
        className
      )}
      style={{ width: width, height: height }}
    >
      {children}
    </button>
  );
};

export default Button;
