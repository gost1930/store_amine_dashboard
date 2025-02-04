
interface Props {
    type?: string;
    name?: string;
    id?: string;
    placeholder?: string;
    className?: string;
    onClick?: () => void;
    onFocus?: () => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    htmlFor?: string;
    label?: string;
}

const Input: React.FC<Props> = ({ type, name, id, placeholder, className, onClick, onFocus , onChange, htmlFor, label }) => {
    return (
        <div>
            <label htmlFor={htmlFor} className="text-lg text-neutral-800 font-semibold ltr:first-letter:uppercase">{label}</label>
            <input type={type} onClick={onClick} onFocus={onFocus} onChange={onChange} name={name} id={id} placeholder={placeholder} className={`w-full mt-2 h-12 px-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 border ${className}`} />
        </div>
    )
}

export default Input;
