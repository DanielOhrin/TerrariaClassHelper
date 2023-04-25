interface SearchbarProps {
    label?: string,
    onChange: Function,
    className?: string,
    id?: string
}

function Searchbar({ label, onChange, className, id }: SearchbarProps) {
    return (
        <div id={id} className={`searchbar${(" " + className ?? "")}`}>
            {
                label &&
                <label htmlFor="searchbar">{label}</label>
            }
            <input onChange={e => onChange(e)} type="text" name="searchbar" />
        </div>
    )
}

export default Searchbar