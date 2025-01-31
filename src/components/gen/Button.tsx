import React from 'react';
interface Props {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  text: string;
  className?: string;
  icon?: React.ReactNode
}
const Button: React.FC<Props> = ({ className, text, type, onClick, icon }) => {
  return (
    <button type={type || "submit"} onMouseDown={onClick} className={`px-4 py-2 text-white  rounded-xl ${className} active:scale-95 duration-200 flex items-center justify-center gap-x-2`}>{text} <span>{icon}</span></button>
  )
}

export default Button;
