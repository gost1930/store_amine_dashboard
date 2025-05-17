// import React from 'react'
import ActionsBtn from "./ActionsBtn";
// icons
import { CiEdit } from "react-icons/ci";


const EditBtn = ({ onClick }: { onClick: () => void }) => {
    return (
        <ActionsBtn
            className="text-blue1 bg-blue2"
            onClick={onClick}
        >
            <CiEdit />
        </ActionsBtn>
    )
}

export default EditBtn;
