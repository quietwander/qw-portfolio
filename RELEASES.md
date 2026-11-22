# Releases

Every published release of QW Portfolio, newest first, with the SHA-256 fingerprint of each file. To check the app you are running against this list, see "Verify the app you are running" in `README.md`.

"Published" is the date the release was added to this repository under the licence (`LICENSE`); the release also becomes available under the MIT licence on "MIT from".

## v1.4.1 · Cloud sync fixes

- **In the app since:** 2026-11-22
- **Published:** 2026-11-22 (tag `v1.4.1`)
- **MIT from:** 2028-11-22

| File | Bytes | SHA-256 |
|---|---:|---|
| `index.html` | 366,810 | `b3454e4f4953ec94e32d2a1dc4dd96d493065452dbc4e091dd4d213695205288` |
| `sw.js` | 732 | `ec6a16ac34aff83896b999e2e101dba2c677d3f2f663bb8f40535d4e4c11167a` |
| `manifest.webmanifest` | 672 | `0d12f48762c52a7007a8bfa241bedced5f020f8406548c2fbea5f94bb29f5a76` |
| `icon.svg` | 8,071 | `5f6d0989b2c18cca22efcc8dac935a94b07d1d7c2b2891eafb0040b38e10085f` |

What's new: Cloud sync fixes. When two devices change your data at about the same time, when a device that has never synced uses the cloud copy, or when a copy was started over in the cloud, nothing is lost: the other copy, or this device's own data, is kept as a dated file. Dropbox and OneDrive now refuse to overwrite a copy that changed since it was read, and Google Drive keeps a single main file. A cloud file this version can't read, or one made by a newer version, is never replaced without keeping it. When both devices have changes, one box asks which copy to use. Open QW Portfolio once on each of your devices, so they all have this update.

For `sha256sum -c` (Linux) or `shasum -a 256 -c` (Mac), save these lines as `SHA256SUMS` next to the files:

```
b3454e4f4953ec94e32d2a1dc4dd96d493065452dbc4e091dd4d213695205288  index.html
ec6a16ac34aff83896b999e2e101dba2c677d3f2f663bb8f40535d4e4c11167a  sw.js
0d12f48762c52a7007a8bfa241bedced5f020f8406548c2fbea5f94bb29f5a76  manifest.webmanifest
5f6d0989b2c18cca22efcc8dac935a94b07d1d7c2b2891eafb0040b38e10085f  icon.svg
```

## v1.4 · Cloud sync

- **In the app since:** 2026-11-20
- **Published:** 2026-11-20 (tag `v1.4`)
- **MIT from:** 2028-11-20

| File | Bytes | SHA-256 |
|---|---:|---|
| `index.html` | 359,251 | `3eece37875d438a0f6f775ba0c8e3706ad871444f7dd746a3caa77127a334bf3` |
| `sw.js` | 730 | `009801a417d87ce098144ce5a0fd9fd17f713025958a2bb1fd57239e82c452d4` |
| `manifest.webmanifest` | 672 | `0d12f48762c52a7007a8bfa241bedced5f020f8406548c2fbea5f94bb29f5a76` |
| `icon.svg` | 8,071 | `5f6d0989b2c18cca22efcc8dac935a94b07d1d7c2b2891eafb0040b38e10085f` |

What's new: Cloud sync: the same data on your phone and computer through your own Google Drive, Dropbox or OneDrive. Your data is encrypted on the device before it is uploaded; changes sync by themselves; when your data was changed on another device the app asks which copy to keep, and the copy you don't choose is kept as a dated file. One password and one recovery code for all your devices. Restore from your cloud. Lock the app when you leave it. A show/hide button on password and code boxes. Questions and messages now appear in the app's own dialogs.

For `sha256sum -c` (Linux) or `shasum -a 256 -c` (Mac), save these lines as `SHA256SUMS` next to the files:

```
3eece37875d438a0f6f775ba0c8e3706ad871444f7dd746a3caa77127a334bf3  index.html
009801a417d87ce098144ce5a0fd9fd17f713025958a2bb1fd57239e82c452d4  sw.js
0d12f48762c52a7007a8bfa241bedced5f020f8406548c2fbea5f94bb29f5a76  manifest.webmanifest
5f6d0989b2c18cca22efcc8dac935a94b07d1d7c2b2891eafb0040b38e10085f  icon.svg
```

## v1.3.2 · Terms of use

- **In the app since:** 2026-11-13
- **Published:** 2026-11-13 (tag `v1.3.2`)
- **MIT from:** 2028-11-13

| File | Bytes | SHA-256 |
|---|---:|---|
| `index.html` | 289,067 | `c0dad4c78ec5c546f662929bee90c1dcf64047751a8b39d5c3811f647bed182e` |
| `sw.js` | 732 | `47cde721d17fec7601992082993f973ac18cb40ec1c7296980b0f06b654da5bb` |
| `manifest.webmanifest` | 672 | `0d12f48762c52a7007a8bfa241bedced5f020f8406548c2fbea5f94bb29f5a76` |
| `icon.svg` | 8,071 | `5f6d0989b2c18cca22efcc8dac935a94b07d1d7c2b2891eafb0040b38e10085f` |

What's new: About now includes the terms of use (QW Portfolio is for tracking only, not financial, tax or legal advice), the official address, the trademark line and the version number. QW Portfolio™ in the header, Welcome screen and About.

For `sha256sum -c` (Linux) or `shasum -a 256 -c` (Mac), save these lines as `SHA256SUMS` next to the files:

```
c0dad4c78ec5c546f662929bee90c1dcf64047751a8b39d5c3811f647bed182e  index.html
47cde721d17fec7601992082993f973ac18cb40ec1c7296980b0f06b654da5bb  sw.js
0d12f48762c52a7007a8bfa241bedced5f020f8406548c2fbea5f94bb29f5a76  manifest.webmanifest
5f6d0989b2c18cca22efcc8dac935a94b07d1d7c2b2891eafb0040b38e10085f  icon.svg
```

## v1.3.1 · Dashboard Insights

- **In the app since:** 2026-11-11
- **Published:** 2026-11-13 (tag `v1.3.1`)
- **MIT from:** 2028-11-13

| File | Bytes | SHA-256 |
|---|---:|---|
| `index.html` | 287,776 | `d560c30f14d43155f2fb28e4760dbc365170aa7be873123aafe0f3b898bff153` |
| `sw.js` | 732 | `c38f7fdab7b680d2174a77015d752e64de9e45c32bad78e14ef27ff133487033` |
| `manifest.webmanifest` | 672 | `0d12f48762c52a7007a8bfa241bedced5f020f8406548c2fbea5f94bb29f5a76` |
| `icon.svg` | 8,071 | `5f6d0989b2c18cca22efcc8dac935a94b07d1d7c2b2891eafb0040b38e10085f` |

What's new: Insights replaces Check-up on the Dashboard (Your investments and Your data, each problem with a button to fix it), including where to trade when an asset class is off target and losses you could harvest in taxable accounts (light versions; general guidance, not tax advice).

For `sha256sum -c` (Linux) or `shasum -a 256 -c` (Mac), save these lines as `SHA256SUMS` next to the files:

```
d560c30f14d43155f2fb28e4760dbc365170aa7be873123aafe0f3b898bff153  index.html
c38f7fdab7b680d2174a77015d752e64de9e45c32bad78e14ef27ff133487033  sw.js
0d12f48762c52a7007a8bfa241bedced5f020f8406548c2fbea5f94bb29f5a76  manifest.webmanifest
5f6d0989b2c18cca22efcc8dac935a94b07d1d7c2b2891eafb0040b38e10085f  icon.svg
```

## Earlier versions

Versions 1.0 to 1.3 (October and November 2026) were in the app before this repository existed and are not published here.
