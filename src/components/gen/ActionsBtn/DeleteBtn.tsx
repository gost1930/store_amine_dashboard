// import React from 'react'
import ActionsBtn from "./ActionsBtn";
// icons
import { CiTrash } from "react-icons/ci";


const DeleteBtn = ({onClick}:{onClick: ()=> void}) => {
    
    return (
        <ActionsBtn
            className="text-red1 bg-red2"
            onClick={onClick}
        >
            <CiTrash />
        </ActionsBtn>
    )
}

export default DeleteBtn;
