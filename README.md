# Web From Home Challenge

Small Javascript module created for the Web From Home Challenge organized by the Web Practice.

### Description

The final result is something similar to a live wallpaper, with a blopper (you know, the Mario Bros. squid?) swimming over and under some corals :)

### Topics included

#### SVG Animations

Animations were used for the movement of the blooper, using a `keyframes` rule for specify its route, using `scale()` for increasing or decreasing its size, and `scaleX(-1)` for flipping the image. `rotateZ()` was also used in one scenario to make the image look better with the movement direction.

The original idea was to include also some other modifications to the SVG, like moving different layers or changing the color, unfortunately when using the Figma API, when trying to retrieve the raw SVG I run into Cors issues, so I had to load the SVG into a img tag.

#### JS Modules

The service which retrieves the SVGs is its own separate module, which is loaded into the main `index.js`

#### Async/Await

The service to retrieve the SVGs uses async/wait in the asynchronous call to the Figma API.

#### Flexbox

Flexbox was used for accommodate the corals across the screen, it was specially useful for creating the "zigzag" shape of the line of corals.

#### Var, Let, Const

Most variables are defined as const, as their value didn't need to change. let used in the `for` loops.

#### Closures

The service which retrieves the SVGs is defined inside a closure, only giving access to the function to retrive the images.
