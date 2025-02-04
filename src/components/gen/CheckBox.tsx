// import React from 'react'
interface Props {
    name?: any;
    id?: any;
    checked?: any;
    onChange?: any;
    defaultChecked?: boolean;
}
const CheckBox: React.FC<Props> = ({ name, id, checked, onChange, defaultChecked }) => {
    return (
        <input
            type="checkbox"
            name={name}
            id={id}
            checked={checked}
            onChange={onChange}
            className="tgl tgl-ios"
            defaultChecked={defaultChecked}
        />
    )
}

export default CheckBox;
