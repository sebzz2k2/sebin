import React from "react";
interface Props {
  children: React.ReactNode;
  width?: string;
  height?: string;
}
const Button = ({ children, width, height }: Props) => {
  return (
    <button
      className="p-2.5 bg-white rounded shadow-xl border font-firaCode text-cyan-950 border-cyan-950 justify-center items-center gap-2.5 inline-flex text-lg"
      style={{ width: width, height: height }}
    >
      {children}
    </button>
  );
};

export default Button;
