import { ChangeEventHandler } from "react"

interface SearchbarProps {
    label?: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
    className?: string,
    id?: string,
    name?: string,
    value?: string
}

function Searchbar({ label, onChange, className, id, name, value }: SearchbarProps) {
    return (
        <div id={id} className={`searchbar${className ? " " + className : ""}`}>
            {
                label &&
                <label htmlFor={name ?? "searchbar"}>{label}</label>
            }
            <input onChange={onChange} type="text" name={name ?? "searchbar"} value={value} />
        </div>
    )
}

export default Searchbar