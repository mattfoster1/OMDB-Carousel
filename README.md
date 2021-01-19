# Notes:

## Tasks to complete in v1.2:

### Must-have:

- Fix onClick functionality on carousel. Currently no evenHandler triggering to switch active Episode in sidebar.
- Add multiple API calls to get episode synopsis for each carousel card. (Currently functionality exists for "Aside", just needs to be copied).
- Add hi-res "Aside" images.
- More hardening for API data when API breaks/has no value.
- Add IMDB star on "Aside".
- API key and Show/Season settings to be fed in from a DB/Config dynamically.

### Nice to have:

- Move global styles from "Styles" to some kind of theme or layout system.
- On mobile, have the "Aside" appear as a swipe-in overlay or modal instead of sitting below.
- Show small preview of next slide in carousel to show they are scrollable.
- Ensure "Aside" image and carousel line up on mobile. Shouldn't be too hard, but needs some layout refactor.
- Alter media query tool to be more syntactially pleasant/sweet. Maybe a "media()" mixin or something.
- If infinite scroll not allowed, add functionality to grey out the carousel arrows if that direction is no longer possible.
- Replace home-made bootstrap with official bootstrap. Responsiveness is poor on square screens.

## What I would do differently if I did it again

1. I would use react-bootstrap for layout
2. I would build a better global-styling/theme system
3. I would use scss instead of styled components (I'm better/faster with those)
4. Check I had all images at the start (quite a few were missing).
5. More consistent use of %, vh and px. Right now it's not as flexible/hardy as I'd like it to be (especially on exotic screen-sizes).
