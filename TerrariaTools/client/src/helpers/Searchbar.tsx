import { ChangeEventHandler } from "react"

interface SearchbarProps {
    label?: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
    className?: string,
    id?: string,
    name?: string
}

function Searchbar({ label, onChange, className, id, name }: SearchbarProps) {
    return (
        <div id={id} className={`searchbar${className ? " " + className : ""}`}>
            {
                label &&
                <label htmlFor={name ?? "searchbar"}>{label}</label>
            }
            <input onChange={onChange} type="text" name={name ?? "searchbar"} />
        </div>
    )
}

export default Searchbar