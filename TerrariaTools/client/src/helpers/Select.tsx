import { useCallback } from "react"

interface SelectProps {
    label?: string,
    onChange: Function,
    className?: string,
    id?: string
    values: { label: string, value: string }[]
    defaultValue?: { label: string },
}

function Select({ label, onChange, className, id, values, defaultValue }: SelectProps) {
    const generateOptions = useCallback((): JSX.Element[] => {
        const options: JSX.Element[] = []

        if (defaultValue?.label) {
            options.push(<option value="" hidden>{defaultValue.label}</option>)
        }

        values.forEach(obj => options.push(<option value={obj.value}>{obj.label}</option>))

        return options
    }, [values, defaultValue])

    return (
        <div id={id} className={`select${(" " + className ?? "")}`}>
            {
                label &&
                <label htmlFor="select">{label}</label>
            }
            <select onChange={e => onChange(e)} name="select">
                {generateOptions()}
            </select>
        </div>
    )
}

export default Select