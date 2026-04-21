# Is JSON (ES)

[**⚖️** MIT](./LICENSE.md)

🔗
[GitHub](https://github.com/hugoalh/is-json-es)
[JSR](https://jsr.io/@hugoalh/is-json)
[NPM](https://www.npmjs.com/package/@hugoalh/is-json)

An ECMAScript module to determine whether the item is a JSON.

## 🎯 Targets

| **Runtime \\ Source** | **GitHub Raw** | **JSR** | **NPM** |
|:--|:-:|:-:|:-:|
| **[Bun](https://bun.sh/)** >= v1.1.0 | ❌ | ✔️ | ✔️ |
| **[Deno](https://deno.land/)** >= v2.1.0 | ✔️ | ✔️ | ✔️ |
| **[NodeJS](https://nodejs.org/)** >= v20.9.0 | ❌ | ✔️ | ✔️ |

## 🛡️ Runtime Permissions

This does not request any runtime permission.

## #️⃣ Sources

- GitHub Raw
  ```
  https://raw.githubusercontent.com/hugoalh/is-json-es/{Tag}/mod.ts
  ```
- JSR
  ```
  jsr:@hugoalh/is-json[@{Tag}]
  ```
- NPM
  ```
  npm:@hugoalh/is-json[@{Tag}]
  ```

> [!NOTE]
> - It is recommended to include tag for immutability.
> - These are not part of the public APIs hence should not be used:
>   - Benchmark/Test file (e.g.: `example.bench.ts`, `example.test.ts`).
>   - Entrypoint name or path include any underscore prefix (e.g.: `_example.ts`, `foo/_example.ts`).
>   - Identifier/Namespace/Symbol include any underscore prefix (e.g.: `_example`, `Foo._example`).

## ⤵️ Entrypoints

| **Name** | **Path** | **Description** |
|:--|:--|:--|
| `.` | `./mod.ts` | Default. |

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

> [!NOTE]
> - For the full or prettier documentation, can visit via:
>   - [Deno CLI `deno doc`](https://docs.deno.com/runtime/reference/cli/doc/)
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
