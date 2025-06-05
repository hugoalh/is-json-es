# Is JSON (ES)

[**⚖️** MIT](./LICENSE.md)

[![GitHub: hugoalh/is-json-es](https://img.shields.io/github/v/release/hugoalh/is-json-es?label=hugoalh/is-json-es&labelColor=181717&logo=github&logoColor=ffffff&sort=semver&style=flat "GitHub: hugoalh/is-json-es")](https://github.com/hugoalh/is-json-es)
[![JSR: @hugoalh/is-json](https://img.shields.io/jsr/v/@hugoalh/is-json?label=@hugoalh/is-json&labelColor=F7DF1E&logo=jsr&logoColor=000000&style=flat "JSR: @hugoalh/is-json")](https://jsr.io/@hugoalh/is-json)
[![NPM: @hugoalh/is-json](https://img.shields.io/npm/v/@hugoalh/is-json?label=@hugoalh/is-json&labelColor=CB3837&logo=npm&logoColor=ffffff&style=flat "NPM: @hugoalh/is-json")](https://www.npmjs.com/package/@hugoalh/is-json)

An ECMAScript (JavaScript & TypeScript) module to determine whether the item is a JSON.

## 🔰 Begin

### 🎯 Targets

| **Targets** | **Remote** | **JSR** | **NPM** |
|:--|:-:|:-:|:-:|
| **[Bun](https://bun.sh/)** >= v1.1.0 | ❌ | ✔️ | ✔️ |
| **[Deno](https://deno.land/)** >= v2.1.0 | ✔️ | ✔️ | ✔️ |
| **[NodeJS](https://nodejs.org/)** >= v20.9.0 | ❌ | ✔️ | ✔️ |

> [!NOTE]
> - It is possible to use this module in other methods/ways which not listed in here, however those methods/ways are not officially supported, and should beware maybe cause security issues.

### #️⃣ Resources Identifier

- **Remote - GitHub Raw:**
  ```
  https://raw.githubusercontent.com/hugoalh/is-json-es/{Tag}/mod.ts
  ```
- **JSR:**
  ```
  [jsr:]@hugoalh/is-json[@{Tag}]
  ```
- **NPM:**
  ```
  [npm:]@hugoalh/is-json[@{Tag}]
  ```

> [!NOTE]
> - For usage of remote resources, it is recommended to import the entire module with the main path `mod.ts`, however it is also able to import part of the module with sub path if available, but do not import if:
>
>   - it's path has an underscore prefix (e.g.: `_foo.ts`, `_util/bar.ts`), or
>   - it is a benchmark or test file (e.g.: `foo.bench.ts`, `foo.test.ts`), or
>   - it's symbol has an underscore prefix (e.g.: `_bar`, `_foo`).
>
>   These elements are not considered part of the public API, thus no stability is guaranteed for them.
> - For usage of JSR or NPM resources, it is recommended to import the entire module with the main entrypoint, however it is also able to import part of the module with sub entrypoint if available, please visit the [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub entrypoints.
> - It is recommended to use this module with tag for immutability.

### 🛡️ Runtime Permissions

*This module does not request any runtime permission.*

## 🧩 APIs

- ```ts
  function isJSON(item: unknown): item is JSONValue;
  ```
- ```ts
  function isJSONArray(item: unknown): item is JSONArray;
  ```
- ```ts
  function isJSONObject(item: unknown): item is JSONObject;
  ```
- ```ts
  function isJSONPrimitive(item: unknown): item is JSONPrimitive;
  ```
- ```ts
  type JSONArray = JSONValue[];
  ```
- ```ts
  type JSONArrayExtend = JSONValueExtend[] | readonly JSONValueExtend[];
  ```
- ```ts
  type JSONObject = { [key: string]: JSONValue; };
  ```
- ```ts
  type JSONObjectExtend = { [key: string]: JSONValueExtend; };
  ```
- ```ts
  type JSONPrimitive = boolean | number | string | null;
  ```
- ```ts
  type JSONValue = JSONArray | JSONObject | JSONPrimitive;
  ```
- ```ts
  type JSONValueExtend = JSONArrayExtend | JSONObjectExtend | JSONPrimitive | undefined;
  ```

> [!NOTE]
> - For the full or prettier documentation, can visit via:
>   - [Deno CLI `deno doc`](https://docs.deno.com/runtime/reference/cli/documentation_generator/)
>   - [JSR](https://jsr.io/@hugoalh/is-json)

## ✍️ Examples

- ```ts
  isJSON({
    a: 1,
    b: 2,
    c: 3,
    d: () => { }
  });
  //=> false
  ```
- ```ts
  isJSON({
    a: 1,
    b: 2,
    c: 3,
    d: new Map()
  });
  //=> false
  ```
- ```ts
  isJSON(NaN);
  //=> false
  ```
- ```ts
  isJSON(void 0);
  //=> false
  ```
- ```ts
  isJSON({
    a: 1,
    b: 2,
    c: 3
  });
  //=> true
  ```
- ```ts
  isJSON([1, 2, 3]);
  //=> true
  ```
