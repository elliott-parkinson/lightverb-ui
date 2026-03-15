# lightverb-ui

Tree-shakable `lv-*` web components built with `lit`, packaged for JSR with
`index.ts` and `index.scss` entrypoints.

## Install

```ts
import { defineAllLvComponents } from "jsr:@lightverb/ui";
import "jsr:@lightverb/ui/styles";

defineAllLvComponents();
```

Or import only what you need:

```ts
import { defineLvNav } from "jsr:@lightverb/ui/nav";
import { defineLvButton } from "jsr:@lightverb/ui/button";
```

## Local tasks

```bash
deno task check
deno task demo:build
deno task demo:serve
```

## Notes

- No React.
- Frontend-only demo app in `demo/public`.
- Extinguish is used in the demo runtime for routing/reactive rendering.
