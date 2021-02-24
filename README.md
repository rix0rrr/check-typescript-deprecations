check-typescript-deprecations
==============================

A tool to check whether you are using deprecated APIs in your TypeScript project.

Usage
-----

In the same directory as your `tsconfig.json`:

```
$ npx check-typescript-deprecations

/Users/me/Project/bin/app.ts
  9:9  warning  'add' is deprecated. use `Tags.of(scope).add()`  deprecation/deprecation

✖ 1 problem (0 errors, 1 warning)
```
