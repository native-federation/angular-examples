# Native Federation v4 Demo (Nx)

> [!WARNING]
> This is a demo for native-federation v4 which is currently in beta. For upgrading from v3 to v4, please refer to our [Migration Guide](https://github.com/native-federation/angular-adapter/blob/main/MIGRATION_GUIDE.md).

This is the [`../simple`](../simple) demo ported to an [Nx](https://nx.dev) workspace: no `angular.json`,
one `project.json` per project, and Nx as the task runner in front of the same Angular builders.

## What is Native Federation?

Native Federation is a framework-agnostic implementation of the Module Federation concept, allowing you to build micro-frontends that can be loaded dynamically at runtime. Version 4 brings improved performance and better developer experience.

[Check our website!](https://native-federation.com)

## Project Structure

```
apps/
  host/      Host application that loads the remote micro-frontends
  mfe1/      Remote, exposed as a custom element
  mfe2/      Remote, exposed as a custom element
  mfe3/      Remote, lazy-loaded as a routed component
libs/
  internal/  Shared code, imported via the @internal/* path mapping
```

## Getting Started

### Install dependencies

```bash
pnpm install
```

### Start the development servers

```bash
pnpm start        # host only
pnpm start:all    # host + mfe1 + mfe2 + mfe3
```

Open your browser at `http://localhost:4200/`.

The remotes are served on fixed ports (`4201`–`4203`) because the host's manifest in
`apps/host/src/main.ts` and its routes in `apps/host/src/app/app.routes.ts` refer to them by URL.

### Other tasks

```bash
pnpm build                # build every project
pnpm test                 # test every project
pnpm graph                # open the Nx project graph
pnpm nx build mfe1        # single project
pnpm nx affected -t build # only what changed since main
```

## Nx Specifics

- **`nx.json`** holds the workspace defaults: `build` and `test` are cacheable, `build` waits for the
  builds of its dependencies (`dependsOn: ["^build"]`), and generators default to SCSS.
- **`project.json`** per project replaces the `projects` entries of `angular.json`. The targets are
  unchanged Angular builders (`@angular-architects/native-federation:build`,
  `@angular/build:application`, `@angular/build:dev-server`) — Nx runs Angular Devkit builders as-is.
- **`serve` targets are marked `continuous: true`**, so `nx run-many -t serve` keeps them all running
  instead of waiting for them to exit.
- **`tsconfig.base.json`** (Nx's name for the root tsconfig) keeps the `@internal/*` path mapping, which
  is what makes Nx draw the `mfe1 → internal` edge in the project graph.
- **`libs/internal/project.json`** has no targets; it exists only so the library shows up as a node in
  the graph.

## Key Configuration

Each micro-frontend has a `federation.config.mjs` that defines:

- **name** - Unique identifier for the remote
- **exposes** - Modules/components available for other apps to consume
- **shared** - Dependencies shared between host and remotes

Example from a remote (`mfe1`):

```javascript
export default withNativeFederation({
  name: 'team/mfe1',
  exposes: {
    './Component': './apps/mfe1/src/bootstrap.ts',
  },
  shared: fromPackageJson({ singleton: true, strictVersion: true, requiredVersion: 'auto', build: 'package' })
    .patch(['@angular/core'], { includeSecondaries: { keepAll: true } })
    .get(),
  features: { denseChunking: true, denseExternals: true, integrityHashes: true },
});
```

Paths inside `exposes` are relative to the workspace root, so they read `./apps/<project>/...` here.
The builder looks for the config next to the `tsConfig` given in the `build`/`serve` target
(`apps/<project>/tsconfig.federation.json`).

## Learn More

- [Native Federation Documentation](https://www.npmjs.com/package/@softarc/native-federation)
- [@angular-architects/native-federation](https://www.npmjs.com/package/@angular-architects/native-federation)
- [Nx Documentation](https://nx.dev)
