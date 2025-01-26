// import React from 'react'
interface Props {
    name?: any;
    id?: any;
    checked?: any;
    onChange?: any;
}
const CheckBox: React.FC<Props> = ({ name, id, checked, onChange }) => {
    return (
        <input
            type="checkbox"
            name={name}
            id={id}
            checked={checked}
            onChange={onChange}
            className="tgl tgl-ios"
        />
    )
}

export default CheckBox;
