import { isObjectPlain } from "https://raw.githubusercontent.com/hugoalh/is-object-plain-es/v1.0.8/mod.ts";
export type JSONArray = JSONValue[];
export interface JSONObject {
	[key: string]: JSONValue | undefined;
}
export type JSONPrimitive =
	| boolean
	| number
	| string
	| null;
export type JSONValue =
	| JSONArray
	| JSONObject
	| JSONPrimitive;
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
	return (isObjectPlain(item) && Object.values(item).every((value: unknown): value is JSONValue => {
		return (
			typeof value === "undefined" ||
			isJSON(value)
		);
	}));
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
/**
 * Parse the JSON string.
 * @param {string} item A JSON string that need to parse.
 * @returns {JSONValue} A JSON value.
 */
export function parseJSON(item: string): JSONValue {
	return JSON.parse(item);
}
/**
 * @deprecated Use {@linkcode JSONArray} instead.
 */
export type JSONArrayExtend = JSONValueExtend[] | readonly JSONValueExtend[];
/**
 * @deprecated Use {@linkcode JSONObject} instead.
 */
export interface JSONObjectExtend {
	[key: string]: JSONValueExtend;
}
/**
 * @deprecated Use {@linkcode JSONValue} instead.
 */
export type JSONValueExtend = JSONArrayExtend | JSONObjectExtend | JSONPrimitive | Readonly<JSONObjectExtend> | undefined;
