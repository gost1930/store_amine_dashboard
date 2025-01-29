// import { ReactEventHandler } from "react";

/*
    this component for btn add delete and edit
*/
const ActionsBtn = ({ children, className, type, onClick }
    : { children: any, className: string, type?: "submit" | "reset" | "button", onClick?: ()=> void }) => {
    return (
        <button
            type={type || "submit"}
            className={`aspect-square grid place-content-center text-3xl rounded-full w-12 h-12 ${className}`}
            onMouseDown={onClick}>
            {children}
        </button>
    )
}

export default ActionsBtn;
