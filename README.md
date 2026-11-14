# QW Portfolio™

A private investment tracker for DIY investors. You enter the shares you hold; the app turns them into totals, allocation against your targets, and yearly returns you can compare with a benchmark. It runs entirely in your browser.

**The official copy is at <https://ppm.quietwander.com>.** Copies hosted anywhere else are not ours, get no updates, and may have been changed.

## Privacy

- **Your data stays on your device.** There is no QW Portfolio server and no account. Everything is saved in your browser's storage on the device you use.
- **Optional password.** With a password on, your data is encrypted with AES-256 using a key made from that password. The password never leaves the device and there is no reset: keep a backup.
- **Backups are files you keep.** Export one any time; backups made while a password is on are encrypted too.
- **Live prices are optional.** If you add your own key for Finnhub, Twelve Data or Alpha Vantage, your browser asks that provider for prices directly, sending the ticker symbols and your key. No amounts, account names or holdings are sent anywhere.
- **No ads, no tracking code in the app.**

## What's in this repository

The published release files, exactly as served:

| File | What it is |
|---|---|
| `index.html` | The whole app: page, styles and code in one file |
| `sw.js` | Service worker, so the app opens offline |
| `manifest.webmanifest` | Lets you install the app on a phone or computer |
| `icon.svg` | App icon |

Each release is a git tag (`v1.3.1`, …). `RELEASES.md` lists every release with the SHA-256 fingerprint of each file.

Publishing a release here is what puts it live: the workflow in `.github/workflows/deploy.yml` checks the release's files against `RELEASES.md`, deploys exactly those four files to ppm.quietwander.com, then downloads them back from the live site and checks they match. Each run and its fingerprint table are public under the repository's **Actions** tab.

## Verify the app you are running

You can check that the app at ppm.quietwander.com is exactly the code published here.

1. Open Command Prompt or Terminal in a folder of your own, such as Downloads (the command saves `index.html` there, replacing any file of that name), and download the page as a file (don't use the browser's "Save page as", which rewrites it):
   - **Windows** (Command Prompt): `curl.exe -L -o index.html https://ppm.quietwander.com/index.html`
   - **Mac or Linux** (Terminal): `curl -L -o index.html https://ppm.quietwander.com/index.html`
2. Compute its fingerprint:
   - **Windows:** `certutil -hashfile index.html SHA256`
   - **Mac:** `shasum -a 256 index.html`
   - **Linux:** `sha256sum index.html`
3. Compare the result with the `index.html` line for the current version in `RELEASES.md`. Upper or lower case doesn't matter. If they match, the app you load is the published code.

The version number is at the bottom of About in the app.

## Use and licence

QW Portfolio is free to use. The source is published under the **Functional Source License 1.1, MIT Future License** (`FSL-1.1-MIT`, see `LICENSE`):

- you may read, run, change and share the code for any purpose **except** offering it, or something substantially similar, as a competing commercial product or service;
- each release also becomes available under the **MIT licence two years after it is published** (dates in `RELEASES.md`);
- the software comes **as is, without warranty**.

The name QW Portfolio™ and the icon are not covered by the licence: see `TRADEMARKS.md`.

QW Portfolio is for tracking only. It is not financial, tax or legal advice.

## Contributing

Bug reports and ideas are welcome: use the Feedback button in the app or open an issue here. Code contributions (pull requests) are not being accepted for now.

## About

QW Portfolio is designed and directed by Quiet Wander. The code is written with AI assistance.
