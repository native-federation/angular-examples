# Native Federation v21 remote (mfe5)

A standalone Angular 21 workspace serving one remote, `mfe5`, built with
`@angular-architects/native-federation-v4@~21.2.10` (the `latest` dist-tag of the v21 line).

Mirrors `../ng20` (`mfe4`, adapter v20.4.x) so the v22 host in `..` can load remotes from three
adapter generations side by side. Dependencies are isolated on the `ng21` share scope, so its
Angular 21 copies never negotiate against the host's Angular 22.

## Run

```bash
pnpm install
pnpm start          # serves mfe5 on http://localhost:4205
```

Then start the host in `..` and open `http://localhost:4200/mfe5`.
