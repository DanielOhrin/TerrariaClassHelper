import { getEnumValues } from "../modules/functions/getEnumValues";
import { PotionCategoryId } from "../modules/types/potion";

const enumValues = getEnumValues(PotionCategoryId)

test("getEnumValues returns correctly parsed data", () => {
    expect(enumValues.length).toBe(10)
    expect(enumValues).toContainEqual({ label: "Misc", value: 10 })
})