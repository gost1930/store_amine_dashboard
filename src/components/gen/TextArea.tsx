import React from 'react'

interface Props {
    label?: string;
    name?: string;
    id?: any;
    className?: string;
}
const TextArea: React.FC<Props> = ({ label, name, id, className }) => {
    return (
        <div className='my-2'>
            <label htmlFor={name} className="text-lg font-semibold mb-1">{label}</label>
            <textarea name={name} id={id} className={`w-full  border focus:outline-none ${className}`} />
        </div>
    )
}

export default TextArea;
