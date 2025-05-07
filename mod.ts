import { isObjectPlain } from "https://raw.githubusercontent.com/hugoalh/is-object-plain-es/v1.0.6/mod.ts";
/**
 * Type of the JSON array.
 */
export type JSONArray = JSONValue[];
/**
 * Type of the JSON object.
 */
export interface JSONObject {
	[key: string]: JSONValue;
}
/**
 * Type of the JSON primitive.
 */
export type JSONPrimitive = boolean | number | string | null;
/**
 * Type of the JSON value.
 */
export type JSONValue = JSONArray | JSONObject | JSONPrimitive;
/**
 * Type of the JSON array (extend).
 */
export type JSONArrayExtend = JSONValueExtend[] | readonly JSONValueExtend[];
/**
 * Type of the JSON object (extend).
 */
export interface JSONObjectExtend {
	[key: string]: JSONValueExtend;
}
/**
 * Type of the JSON value (extend).
 */
export type JSONValueExtend = JSONArrayExtend | JSONObjectExtend | JSONPrimitive | Readonly<JSONObjectExtend> | undefined;
/**
 * Determine whether the item is a JSON.
 * @param {unknown} item Item that need to determine.
 * @returns {item is JSONValue} Determine result.
 */
export function isJSON(item: unknown): item is JSONValue {
	return (
		isJSONArray(item) ||
		isJSONObject(item) ||
		isJSONPrimitive(item)
	);
}
export {
	isJSON as isJSONValue
};
export default isJSON;
/**
 * Determine whether the item is a JSON array.
 * @param {unknown} item Item that need to determine.
 * @returns {item is JSONArray} Determine result.
 */
export function isJSONArray(item: unknown): item is JSONArray {
	return (Array.isArray(item) && item.every((element: unknown): element is JSONValue => {
		return isJSON(element);
	}));
}
/**
 * Determine whether the item is a JSON object.
 * @param {unknown} item Item that need to determine.
 * @returns {item is JSONObject} Determine result.
 */
export function isJSONObject(item: unknown): item is JSONObject {
	if (
		typeof item !== "object" ||
		item === null ||
		Array.isArray(item) ||
		!isObjectPlain(item)
	) {
		return false;
	}
	try {
		JSON.stringify(item);
	} catch {
		return false;
	}
	return Object.values(item).every((value: unknown): value is JSONValue => {
		return isJSON(value);
	});
}
/**
 * Determine whether the item is a JSON primitive.
 * @param {unknown} item Item that need to determine.
 * @returns {item is JSONPrimitive} Determine result.
 */
export function isJSONPrimitive(item: unknown): item is JSONPrimitive {
	switch (typeof item) {
		case "boolean":
		case "string":
			return true;
		case "number":
			return (!Number.isNaN(item) && item !== -Infinity && item !== Infinity);
		case "object":
			return (item === null);
		default:
			return false;
	}
}
