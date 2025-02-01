import React from 'react'

interface Props {
    color: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    id?: any;
}

const ColorInput: React.FC<Props> = ({ color, onChange, name, id }) => {
    return (
        <div className="relative w-40 h-16 border my-2 rounded">
            <div
                style={{ backgroundColor: color }}
                className="w-12 h-12 rounded-full border border-zinc-400 translate-y-2 -translate-x-2"
            ></div>
            {/* color picker */}
            <input
                type="color"
                onChange={onChange}
                name={name}
                id={id}
                className="absolute top-0 bottom-0 left-0 right-0 opacity-0 w-full h-full"
            />
            {/* hash of color */}
            <p className='absolute bottom-0 left-2'>{color}</p>
        </div>
    )
}

export default ColorInput;
