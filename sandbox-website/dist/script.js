import * as PIXI from "https://cdn.skypack.dev/pixi.js@5.x";
import { KawaseBlurFilter } from "https://cdn.skypack.dev/@pixi/filter-kawase-blur@3.2.0";
import SimplexNoise from "https://cdn.skypack.dev/simplex-noise@3.0.0";
import hsl from "https://cdn.skypack.dev/hsl-to-hex";
import debounce from "https://cdn.skypack.dev/debounce";

// return a random number within a range
function random(min, max) {
  return Math.random() * (max - min) + min;
}

// map a number from 1 range to another
function map(n, start1, end1, start2, end2) {
  return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
}

// Create a new simplex noise instance
const simplex = new SimplexNoise();

// ColorPalette class
// class ColorPalette {
//   constructor() {
//     this.setColors();
//     this.setCustomProperties();
//   }

//   setColors() {
//     // pick a random hue somewhere between 220 and 360
//     this.hue = ~~random(220, 360);
//     this.complimentaryHue1 = this.hue + 30;
//     this.complimentaryHue2 = this.hue + 60;
//     // define a fixed saturation and lightness
//     // this.saturation = 95;
//     this.saturation = 97;
//     this.lightness = 50;
//     // this.lightness = 20;
//     this.lightness = 30;

//     // define a base color
//     this.baseColor = hsl(this.hue, this.saturation, this.lightness);
//     // define a complimentary color, 30 degress away from the base
//     this.complimentaryColor1 = hsl(
//       this.complimentaryHue1,
//       this.saturation,
//       this.lightness
//     );
//     // define a second complimentary color, 60 degrees away from the base
//     this.complimentaryColor2 = hsl(
//       this.complimentaryHue2,
//       this.saturation,
//       this.lightness
//     );

//     // store the color choices in an array so that a random one can be picked later
//     this.colorChoices = [
//       this.baseColor,
//       this.complimentaryColor1,
//       this.complimentaryColor2
//     ];
//   }

//   randomColor() {
//     // pick a random color
//     return this.colorChoices[~~random(0, this.colorChoices.length)].replace(
//       "#",
//       "0x"
//     );
//   }

//   setCustomProperties() {
//     // set CSS custom properties so that the colors defined here can be used throughout the UI
//     document.documentElement.style.setProperty("--hue", this.hue);
//     document.documentElement.style.setProperty(
//       "--hue-complimentary1",
//       this.complimentaryHue1
//     );
//     document.documentElement.style.setProperty(
//       "--hue-complimentary2",
//       this.complimentaryHue2
//     );
//   }
// }





class ColorPalette {
  constructor() {
    this.colors = this.extractColorsFromLogo();
    this.setCustomProperties();
  }

  extractColorsFromLogo() {
    // Define colors based on the logo
    return {
      lightBlue: '0x5eb1bf', // Light blue for the sky
      darkGreen: '0x006400', // Darker green for contrast with foliage
      // darkBlue: '0x2f5d7c',  // Dark blue for the mountain shadows
      darkBlue: '0x5091bd',
      white: '0xffffff',     // White for the snow
      offWhite: '0xf0f0f0',  // Off-white for the orbs and highlights

      lighterBlue: '0x81c7d4', // Lighter blue for a softer sky
      mediumGreen: '0x40826d', // Medium green for foliage
      lightGreen: '0x8fbc8f',  // Soft green for a gentle touch of foliage
      // darkGreyBlue: '0x4a6f7b', // Dark grey-blue for deeper mountain shadows
      ivory: '0xfffff0',       // Ivory for a warm touch of white
      softCream: '0xfffdd0',   // Soft cream for a hint of warmth
      // paleGreen: '0x98fb98',   // Pale green for highlights in foliage
      // deepSeaBlue: '0x1b6a7d', // Deep sea blue for darker water elements
 


      // tan: '0xd2b48c',      // Tan for the earthy elements
      // grey: '0xcfd8dc'       // Gre1y for the shaded snow areas
      // // Colors from the new logos
      // lightGreen: '0x8fbc8f', // Light green for the foliage
      // grey: '0x778899',      // Grey for the shadows and details
      // // Additional colors for more variety
      // darkGreen: '0x006400', // Darker green for contrast with foliage
      // cream: '0xfffdd0'      // Cream for softer highlights
    };
  }

  randomColor() {
    // Convert object values to an array and pick a random color
    const colorValues = Object.values(this.colors);
    return colorValues[~~random(0, colorValues.length)];
  }

  setCustomProperties() {
    // Set CSS custom properties for each color
    for (const [name, color] of Object.entries(this.colors)) {
      document.documentElement.style.setProperty(`--${name}`, color);
    }
  }
}







// Orb class
class Orb {
  // Pixi takes hex colors as hexidecimal literals (0x rather than a string with '#')
  constructor(fill = 0x000000) {
    // Assign a unique center point for each orb
    this.center = this.setCenter();
    // bounds = the area an orb is "allowed" to move within
    this.bounds = this.setBounds();
    // initialise the orb's { x, y } values to a random point within it's bounds
    this.x = random(this.bounds["x"].min, this.bounds["x"].max);
    this.y = random(this.bounds["y"].min, this.bounds["y"].max);

    // how large the orb is vs it's original radius (this will modulate over time)
    this.scale = 1;

    // what color is the orb?
    this.fill = fill;

    // the original radius of the orb, set relative to window height
    this.radius = random(window.innerHeight / 6, window.innerHeight / 3);

    // starting points in "time" for the noise/self similar random values
    this.xOff = random(0, 1000);
    this.yOff = random(0, 1000);
    // how quickly the noise/self similar random values step through time
    this.inc = 0.002;
    // this.inc = 0.0015;
    // this.inc = 0.0005;

    // PIXI.Graphics is used to draw 2d primitives (in this case a circle) to the canvas
    this.graphics = new PIXI.Graphics();
    this.graphics.alpha = 0.825;
    this.graphics.alpha = 0.900;

    // 250ms after the last window resize event, recalculate orb positions.
    window.addEventListener(
      "resize",
      debounce(() => {
        this.bounds = this.setBounds();
      }, 250)
    );
  }

  setCenter() {
    // Define the range within which the center can vary
    const centerXRange = { min: window.innerWidth / 4, max: window.innerWidth * 3 /4};
    const centerYRange = { min: window.innerHeight / 4, max: window.innerHeight * 3 /4};

    // Generate a rondom centerr within the defined range
    return{
      x: random(centerXRange.min, centerXRange.max),
      y: random(centerYRange.min, centerYRange.max)
    };
  }  


  setBounds() {
    // how far from the { x, y } origin can each orb move
    // const maxDist = window.innerWidth < 1000 ? window.innerWidth / 3 : window.innerWidth / 5;
    // the { x, y } origin for each orb (the bottom right of the screen)
    // const originX = window.innerWidth / 1.25;
    // const originY =
    //   window.innerWidth < 1000
    //     ? window.innerHeight
    //     : window.innerHeight / 1.375;

    const maxDist = Math.min(window.innerWidth, window.innerHeight) / 8;
    // Use the orb's unique center for calculating bounds
    // const originX = this.center.x;
    // const originY = this.center.y;

    const originX = window.innerWidth / 2;
    const originY = window.innerHeight / 2;

    // allow each orb to move x distance away from it's x / y origin
    return {
      x: {
        min: originX - maxDist,
        max: originX + maxDist
      },
      y: {
        min: originY - maxDist,
        max: originY + maxDist
      }
    };
  }

  update() {
    // self similar "psuedo-random" or noise values at a given point in "time"
    const xNoise = simplex.noise2D(this.xOff, this.xOff);
    const yNoise = simplex.noise2D(this.yOff, this.yOff);
    const scaleNoise = simplex.noise2D(this.xOff, this.yOff);

    // map the xNoise/yNoise values (between -1 and 1) to a point within the orb's bounds
    this.x = map(xNoise, -1, 1, this.bounds["x"].min, this.bounds["x"].max);
    this.y = map(yNoise, -1, 1, this.bounds["y"].min, this.bounds["y"].max);
    // map scaleNoise (between -1 and 1) to a scale value somewhere between half of the orb's original size, and 100% of it's original size
    // this.scale = map(scaleNoise, -1, 1, 0.5, 1);
    this.scale = map(scaleNoise, -1, 1, 0.75, 1);

    // step through "time"
    this.xOff += this.inc;
    this.yOff += this.inc;

    // Dynamic radius adjustement for a more alive feel
    const radiusNoise = simplex.noise2D(this.xOff, this.yOff);
    this.radius = map(radiusNoise, -1, 1, window.innerHeight / 6, window.innerHeight / 3)
    this.radius = map(radiusNoise, -1, 1, window.innerHeight / 7, window.innerHeight / 4)
    this.radius = map(radiusNoise, -1, 1, window.innerHeight / 8, window.innerHeight / 5)
  }

  render() {
    // update the PIXI.Graphics position and scale values
    this.graphics.x = this.x;
    this.graphics.y = this.y;
    this.graphics.scale.set(this.scale);

    // clear anything currently drawn to graphics
    this.graphics.clear();

    // tell graphics to fill any shapes drawn after this with the orb's fill color
    this.graphics.beginFill(this.fill);
    // draw a circle at { 0, 0 } with it's size set by this.radius
    this.graphics.drawCircle(0, 0, this.radius);
    // let graphics know we won't be filling in any more shapes
    this.graphics.endFill();
  }
}


// Function to create and style text
// function createText() {
//   const style = new PIXI.TextStyle({
//     fontFamily: 'Arial', // Choose a font that matches your design
//     fontSize: 36, // Adjust the size as needed
//     fontWeight: 'bold', // Bold for the 'sandbox.ai' part
//     fill: ['#ffffff'], // Text color, can be an array to create gradients
//     align: 'center', // Center align text
//     // Add more styling as needed
//   });

//   // Create text for 'sandbox.ai'
//   const sandboxText = new PIXI.Text('sandbox.ai', style);
//   // Position the text in the center of the canvas
//   sandboxText.anchor.set(0.5);
//   sandboxText.x = app.screen.width / 2;
//   sandboxText.y = app.screen.height / 2 - sandboxText.height; // Adjust Y position to make room for the second line

//   // Create text for 'IA Generativa' with a lighter weight
//   const iaGenerativaText = new PIXI.Text('IA Generativa', {
//     ...style,
//     fontWeight: 'normal', // Normal weight for the second line
//     fontSize: 24, // Smaller font size for the second line
//   });
//   iaGenerativaText.anchor.set(0.5);
//   iaGenerativaText.x = app.screen.width / 2;
//   iaGenerativaText.y = app.screen.height / 2 + sandboxText.height / 2; // Position below 'sandbox.ai'

//   // Add the text to the stage
//   app.stage.addChild(sandboxText);
//   app.stage.addChild(iaGenerativaText);
// }

// Function to create and style text
// function createText() {
//   const style = new PIXI.TextStyle({
//     fontFamily: 'Arial',
//     fontSize: 36,
//     fontWeight: 'bold',
//     fill: ['#101010'], // Very dark text color, almost black
//     align: 'center',
//   });

//   // Create text for 'sandbox.ai'
//   const sandboxText = new PIXI.Text('sandbox.ai', style);
//   sandboxText.anchor.set(0.5);
//   sandboxText.x = app.screen.width / 2;
//   sandboxText.y = app.screen.height / 2 - sandboxText.height;

//   // Set blend mode to SCREEN to make the text visible when orbs pass behind it
//   sandboxText.blendMode = PIXI.BLEND_MODES.SCREEN;

//   // Create text for 'IA Generativa' with a lighter weight
//   const iaGenerativaText = new PIXI.Text('IA Generativa', {
//     ...style,
//     fontWeight: 'normal',
//     fontSize: 24,
//   });
//   iaGenerativaText.anchor.set(0.5);
//   iaGenerativaText.x = app.screen.width / 2;
//   iaGenerativaText.y = app.screen.height / 2 + sandboxText.height / 2;

//   // Set blend mode to SCREEN for the subtitle as well
//   iaGenerativaText.blendMode = PIXI.BLEND_MODES.SCREEN;

//   // Add the text to the stage
//   app.stage.addChild(sandboxText);
//   app.stage.addChild(iaGenerativaText);
// }

// ... rest of your script



// Create PixiJS app
const app = new PIXI.Application({
  // render to <canvas class="orb-canvas"></canvas>
  view: document.querySelector(".orb-canvas"),
  // auto adjust size to fit the current window
  resizeTo: window,
  // transparent background, we will be creating a gradient background later using CSS
  transparent: true
});

// createText();

app.stage.filters = [new KawaseBlurFilter(30, 10, true)];

// Create colour palette
const colorPalette = new ColorPalette();

// Create orbs
const orbs = [];

for (let i = 0; i < 6; i++) {
  const orb = new Orb(colorPalette.randomColor());

  app.stage.addChild(orb.graphics);

  orbs.push(orb);
}

// Animate!
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  app.ticker.add(() => {
    orbs.forEach((orb) => {
      orb.update();
      orb.render();
    });
  });
} else {
  orbs.forEach((orb) => {
    orb.update();
    orb.render();
  });
}

document
  .querySelector(".overlay__btn--colors")
  .addEventListener("click", () => {
    colorPalette.setColors();
    colorPalette.setCustomProperties();

    orbs.forEach((orb) => {
      orb.fill = colorPalette.randomColor();
    });
  });

