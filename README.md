# The Final Clue

A GitHub Pages scavenger-hunt page: enter password `hangry`, see a congratulations message, and notify `melanie.frazier@gmail.com` by email.

## How it works

| Piece | Where it runs |
| --- | --- |
| Password check + success message | In the browser (static HTML/JS on GitHub Pages) |
| Email alert | [FormSubmit](https://formsubmit.co) (free third-party — Pages can’t send mail itself) |

**Note:** The password lives in `script.js`, so anyone who views the page source can see it. That’s fine for a scavenger hunt where the real challenge is finding the clue offline.

## One-time email setup

1. Open the live site and enter the correct password once.
2. Check **melanie.frazier@gmail.com** for a FormSubmit confirmation email.
3. Click the confirmation link.
4. After that, every correct guess sends a notification email.

## Publish on GitHub Pages

1. Create a new GitHub repository (or use this folder as the repo root).
2. Push these files to the `main` branch.
3. In the repo: **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Choose branch `main` and folder `/ (root)`, then Save.
6. After a minute or two, the site will be at:

   `https://<your-username>.github.io/<repo-name>/`

   If the repo is named `<your-username>.github.io`, it will be at `https://<your-username>.github.io/`.

## Preview locally

Open `index.html` in a browser, or from this folder run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
