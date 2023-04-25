/**
 * 
 * @param enumType enum to map
 * @returns keys and values mapped as label & value
 */

export function getEnumValues(enumType: Object) {
    const firstValue = Object.values(enumType)[0]
    type Value = typeof firstValue

    interface parsedEntry {
        label: string,
        value: Value
    }

    return Object.entries(enumType)
        .splice(Object.keys(enumType).length / 2)
        .map((kv): parsedEntry => ({ label: kv[0], value: kv[1] }))
}