# Notes:

## Tasks to complete in v1.2:

1. ensure "Aside" image and carousel line up on mobile. Shouldn't be too hard, but needs some layout refactor.
2. Add hi-res "Aside" images.
3. Add IMDB star on "Aside".
4. Move global styles from "Styles" to some kind of theme or layout system.
5. On mobile, have the "Aside" appear as a swipe-in overlay or modal instead of sitting below.
6. Alter media query tool to be more syntactially pleasant/sweet. Maybe a "media()" mixin or something.
7. If infinite scroll not allowed, add functionality to grey out the carousel arrows if that direction is not possible.
8. Replace home-made bootstrap with official bootstrap. Responsiveness is poor on square screens.
9. More hardening for API data when API breaks/has no value.

## What I would do differently if I did it again

1. I would use react-bootstrap for layout
2. I would build a better global-styling/theme system
3. I would use scss instead of styled components (I'm better/faster with those)
4. Check I had all images at the start (quite a few were missing).
