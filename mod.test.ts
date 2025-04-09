import { deepStrictEqual } from "node:assert";
import { isJSON } from "./mod.ts";
Deno.test("False 1", { permissions: "none" }, () => {
	deepStrictEqual(isJSON({
		a: 1,
		b: 2,
		c: 3,
		d: () => { }
	}), false);
});
Deno.test("False 2", { permissions: "none" }, () => {
	deepStrictEqual(isJSON({
		a: 1,
		b: 2,
		c: 3,
		d: new Map()
	}), false);
});
Deno.test("False 3", { permissions: "none" }, () => {
	deepStrictEqual(isJSON({
		a: 1,
		b: 2,
		c: 3,
		d: new Set()
	}), false);
});
Deno.test("False 4", { permissions: "none" }, () => {
	//deno-lint-ignore hugoalh/no-nan
	deepStrictEqual(isJSON(NaN), false);
});
Deno.test("False 5", { permissions: "none" }, () => {
	deepStrictEqual(isJSON(Infinity), false);
});
Deno.test("False 6", { permissions: "none" }, () => {
	deepStrictEqual(isJSON(-Infinity), false);
});
Deno.test("False 7", { permissions: "none" }, () => {
	deepStrictEqual(isJSON(undefined), false);
});
Deno.test("False 8", { permissions: "none" }, () => {
	deepStrictEqual(isJSON(void 0), false);
});
Deno.test("False 9", { permissions: "none" }, () => {
	deepStrictEqual(isJSON(this), false);
});
Deno.test("False 10", { permissions: "none" }, () => {
	deepStrictEqual(isJSON(async function* () { }), false);
});
Deno.test("True 1", { permissions: "none" }, () => {
	deepStrictEqual(isJSON({
		a: 1,
		b: 2,
		c: 3
	}), true);
});
Deno.test("True 2", { permissions: "none" }, () => {
	deepStrictEqual(isJSON([1, 2, 3]), true);
});
Deno.test("True 3", { permissions: "none" }, () => {
	deepStrictEqual(isJSON({}), true);
});
Deno.test("True 4", { permissions: "none" }, () => {
	deepStrictEqual(isJSON([]), true);
});
