import React from 'react';
interface Props {
    type?: "button" | "submit" | "reset";
    onClick?: () => void; 
    text:string;
    className?: string;
}
const Button: React.FC<Props>  = ({className , text , type , onClick}) => {
  return (
    <button type={type || "submit"} onClick={onClick} className={`px-4 py-2 text-white  rounded-xl ${className}`}>{text}</button>
  )
}

export default Button
