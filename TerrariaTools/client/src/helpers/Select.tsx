import { useCallback } from "react"

interface SelectProps {
    label?: string,
    onChange: Function,
    className?: string,
    id?: string
    values: { label: string, value: string }[]
    defaultValue?: { label: string },
    name: string
}

function Select({ label, onChange, className, id, values, defaultValue, name }: SelectProps) {
    const generateOptions = useCallback((): JSX.Element[] => {
        const options: JSX.Element[] = []

        if (defaultValue?.label) {
            options.push(<option value="" hidden>{defaultValue.label}</option>)
        }

        values.forEach((obj, i) => options.push(<option key={`${name}--option-${i}`} value={obj.value}>{obj.label}</option>))

        return options
    }, [values, defaultValue, name])

    return (
        <div id={id} className={`select${className ? " " + className : ""}`}>
            {
                label &&
                <label htmlFor={name}>{label}</label>
            }
            <select onChange={e => onChange(e)} name={name}>
                {generateOptions()}
            </select>
        </div>
    )
}

export default Select