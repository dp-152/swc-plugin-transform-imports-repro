## Minimum reproduction example for https://github.com/swc-project/plugins/issues/323

### Steps
Run:
```bash
corepack enable
yarn install --frozen-lockfile
yarn build
```
The output files can be found in the `./dist` directory.
