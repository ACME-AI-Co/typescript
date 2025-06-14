# Changelog

## 0.1.0-alpha.3 (2025-06-14)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/ACME-AI-Co/typescript/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Bug Fixes

* publish script — handle NPM errors correctly ([65fdda9](https://github.com/ACME-AI-Co/typescript/commit/65fdda965d6905026c8d03dc90da5a91ba5dcb5d))


### Chores

* avoid type error in certain environments ([2fd892d](https://github.com/ACME-AI-Co/typescript/commit/2fd892d312ee6fe7c51922e2893d9a74bbe26d50))
* **internal:** add pure annotations, make base APIResource abstract ([2fa520e](https://github.com/ACME-AI-Co/typescript/commit/2fa520e02d6cdb0be31f21ce6f8f3c9dccd95d83))

## 0.1.0-alpha.2 (2025-06-05)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/ACME-AI-Co/typescript/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Features

* **api:** update via SDK Studio ([06da1eb](https://github.com/ACME-AI-Co/typescript/commit/06da1ebb1bca175969e79e39adfd4ace2d9837e0))
* **api:** update via SDK Studio ([c950b79](https://github.com/ACME-AI-Co/typescript/commit/c950b790e826071ebbb48cddd44791762880414c))
* **client:** add withOptions helper ([ad98031](https://github.com/ACME-AI-Co/typescript/commit/ad98031799ecd4af298ff1759545bf9fd424d26b))


### Bug Fixes

* **api:** improve type resolution when importing as a package ([#9](https://github.com/ACME-AI-Co/typescript/issues/9)) ([3bad84c](https://github.com/ACME-AI-Co/typescript/commit/3bad84c47ac39bd2d5ea50ad1c6d0abcd52857b8))
* **client:** always overwrite when merging headers ([3a8fd7d](https://github.com/ACME-AI-Co/typescript/commit/3a8fd7d5e7092706084c06a0b96f066449824070))
* **client:** send `X-Stainless-Timeout` in seconds ([#7](https://github.com/ACME-AI-Co/typescript/issues/7)) ([0870122](https://github.com/ACME-AI-Co/typescript/commit/0870122ec587123ac33c52f701490a94c0c337b1))
* **client:** send all configured auth headers ([#11](https://github.com/ACME-AI-Co/typescript/issues/11)) ([a4b874a](https://github.com/ACME-AI-Co/typescript/commit/a4b874acd8a6656fea3d1d99b83a740b2e1077c7))
* **internal:** fix file uploads in node 18 jest ([7be629a](https://github.com/ACME-AI-Co/typescript/commit/7be629a2c9e547548b01e3a56fdd41124bb26e31))
* **mcp:** remove unused tools.ts ([#10](https://github.com/ACME-AI-Co/typescript/issues/10)) ([947a181](https://github.com/ACME-AI-Co/typescript/commit/947a181b093373350353386e27c1a51d7f4dbae4))


### Chores

* **ci:** add timeout thresholds for CI jobs ([1932827](https://github.com/ACME-AI-Co/typescript/commit/193282781538336e14d4e86366f1c82d7dbc475b))
* **ci:** only use depot for staging repos ([6817ec7](https://github.com/ACME-AI-Co/typescript/commit/6817ec70ea842d588dcc89077d9b154975aa048d))
* **client:** drop support for EOL node versions ([16c1637](https://github.com/ACME-AI-Co/typescript/commit/16c163753a643e09298ff651c5c9f84e0fd77fb7))
* **client:** minor internal fixes ([f09b579](https://github.com/ACME-AI-Co/typescript/commit/f09b579929df6b58a3219d46186a886b1ff21b14))
* **client:** move misc public files to new `core/` directory, deprecate old paths ([#5](https://github.com/ACME-AI-Co/typescript/issues/5)) ([69deefc](https://github.com/ACME-AI-Co/typescript/commit/69deefc3f8ab3aa74c6e03f3ed4511ab62751243))
* **internal:** add aliases for Record and Array ([#8](https://github.com/ACME-AI-Co/typescript/issues/8)) ([dd387ff](https://github.com/ACME-AI-Co/typescript/commit/dd387ff33648c1d97686dc640e80bd95e7cdd29e))
* **internal:** codegen related update ([8bcdf6d](https://github.com/ACME-AI-Co/typescript/commit/8bcdf6d8b1e551af84003a3b2be73164916c9224))
* **internal:** codegen related update ([816a612](https://github.com/ACME-AI-Co/typescript/commit/816a61200a4c03ec1fc0f1536b39f15b0a7f1a3a))
* **internal:** improve node 18 shims ([52e49e2](https://github.com/ACME-AI-Co/typescript/commit/52e49e24d87d1fe9d838fb928aa8ca6629a4e05c))
* **internal:** reduce CI branch coverage ([2d85291](https://github.com/ACME-AI-Co/typescript/commit/2d85291a5cc3e2109c2e2b7e60fc2d1f930daf11))
* **internal:** refactor utils ([71f395c](https://github.com/ACME-AI-Co/typescript/commit/71f395c34fafcd6d930ae10eeca607fd185c170d))
* **internal:** share typescript helpers ([398a628](https://github.com/ACME-AI-Co/typescript/commit/398a6287c02296ded789f66a60cb672a662e37b7))
* **internal:** upload builds and expand CI branch coverage ([5fd5332](https://github.com/ACME-AI-Co/typescript/commit/5fd533258251ff660dc3e2f4fd2120492a83def3))
* **package:** remove engines ([27d964a](https://github.com/ACME-AI-Co/typescript/commit/27d964a547ffd5f9661a8431b33702618b92ceb2))
* **perf:** faster base64 decoding ([2957fdc](https://github.com/ACME-AI-Co/typescript/commit/2957fdc69d730ee61f17ee501da01cfa97ffeca3))


### Documentation

* **readme:** fix typo ([fd39b37](https://github.com/ACME-AI-Co/typescript/commit/fd39b37b608f823d6712b05fd07f130b71fe3974))

## 0.1.0-alpha.1 (2025-03-21)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/ACME-AI-Co/typescript/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **api:** update via SDK Studio ([0bc4fab](https://github.com/ACME-AI-Co/typescript/commit/0bc4fab18020bae5b74fc9036917c2c8c0124d16))
* **api:** update via SDK Studio ([#1](https://github.com/ACME-AI-Co/typescript/issues/1)) ([e3e2bd7](https://github.com/ACME-AI-Co/typescript/commit/e3e2bd7f1244bf6d663a4aa9e431ae690905f4fe))
* **docs:** add example script! ([4ab7ea3](https://github.com/ACME-AI-Co/typescript/commit/4ab7ea3c3a6d86455a67b21bfbd75dfd8008cb51))
