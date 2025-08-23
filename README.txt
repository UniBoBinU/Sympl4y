Drop-in assets
================

Put your media here. The app reads `assets.json` to know what exists.

Folders:
- assets/positions/*.jpg|png  → used for POSITION cards
- assets/poses/*.jpg|png      → used for POSE cards
- assets/sfx/*.(mp3|wav)      → optional sound effects, randomly previewed on card reveal

To add files:
1) Place them in the folder.
2) Edit `assets.json` and append relative paths, e.g. `"assets/positions/my-shot.png"`.

No build step required. Just refresh the page.
