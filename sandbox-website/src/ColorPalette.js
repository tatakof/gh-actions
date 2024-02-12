import { random } from "./script";

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
export class ColorPalette {
  constructor() {
    this.colors = this.extractColorsFromLogo();
    this.setCustomProperties();
  }

  extractColorsFromLogo() {
    // Define colors based on the logo
    return {
      lightBlue: '0x5eb1bf', // Light blue for the sky
      darkGreen: '0x006400', // Darker green for contrast with foliage
      darkBlue: '0x2f5d7c', // Dark blue for the mountain shadows
      // white: '0xffffff',     // White for the snow
      // grey: '0xcfd8dc'       // Gre1y for the shaded snow areas
      // lightBlue: '0x5eb1bf', // Light blue for the sky
      // darkBlue: '0x2f5d7c',  // Dark blue for the mountain shadows
      // // Colors from the new logos
      // offWhite: '0xf0f0f0',  // Off-white for the orbs and highlights
      // tan: '0xd2b48c',      // Tan for the earthy elements
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
