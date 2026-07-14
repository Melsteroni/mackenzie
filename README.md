# Mackenzie scavenger hunt

GitHub Pages page: enter password `hangry`, see congratulations, and email `melanie.frazier@gmail.com`.

## Email setup (required once)

GitHub Pages can’t send mail itself. We use free [Web3Forms](https://web3forms.com/).

1. Open **[https://web3forms.com/](https://web3forms.com/)**.
2. Enter **melanie.frazier@gmail.com** and create an access key.
3. Check that inbox (and Spam) for the Web3Forms email — copy the **access key**.
4. Open `script.js` and replace `PASTE_YOUR_ACCESS_KEY_HERE` with your key (keep the quotes).
5. Commit and push so the live site picks it up.
6. Enter `hangry` on the live site once to confirm you get the alert email.

## How it works

| Piece | Where it runs |
| --- | --- |
| Password check + success message | Browser (static site on GitHub Pages) |
| Email alert | [Web3Forms](https://web3forms.com/) |

**Note:** The password is in `script.js` (viewable in page source). Fine for a scavenger hunt.

## Live site

[https://melsteroni.github.io/mackenzie/](https://melsteroni.github.io/mackenzie/)

Pages source: repo **Settings → Pages** → branch `main` / `/ (root)`.

## Preview locally

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
