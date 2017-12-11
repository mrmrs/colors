# colors.css 3.0.1

Better default colors for the web. A collection of skin classes for faster prototyping and nicer looking sites.

### Stats

899 | 85 | 85
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev colors.css
```

Learn more about using css installed with npm:
* https://webpack.github.io/docs/stylesheets.html
* https://github.com/defunctzombie/npm-css

#### With Git

http:
```
git clone https://github.com/tachyons-css/colors.css
```

ssh:
```
git clone git@github.com:tachyons-css/colors.css.git
```

## Usage

#### Using with [Postcss](https://github.com/postcss/postcss)

Import the css module

```css
@import "colors.css";
```

Then process the css using the [`tachyons-cli`](https://github.com/tachyons-css/tachyons-cli)

```sh
$ npm i -g tachyons-cli
$ tachyons path/to/css-file.css > dist/t.css
```

#### Using the css

##### CDN
The easiest and most simple way to use the css is to use the cdn hosted version. Include it in the head of your html with:

```
<link rel="stylesheet" href="http://unpkg.com/colors.css@3.0.1/css/colors.css.min.css" />
```

##### Locally
The built css is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/colors.css">
```

#### Development

The source css files can be found in the `src` directory.
Running `$ npm start` will process the source css and place the built css in the `css` directory.

## The css

```css
/*

  COLORS
  Better default colors for the web

*/
/* 

   VARIABLES

   - Cool
   - Warm
   - Gray Scale

*/
/*

   SKINS
   - Backgrounds
   - Colors
   - Border colors
   - SVG fills
   - SVG Strokes

*/
/* Backgrounds */
.bg-navy { background-color: #001f3f; }
.bg-blue { background-color: #0074d9; }
.bg-aqua { background-color: #7fdbff; }
.bg-teal { background-color: #39cccc; }
.bg-olive { background-color: #3d9970; }
.bg-green { background-color: #2ecc40; }
.bg-lime { background-color: #01ff70; }
.bg-yellow { background-color: #ffdc00; }
.bg-orange { background-color: #ff851b; }
.bg-red { background-color: #e92c21; }
.bg-fuchsia { background-color: #f012be; }
.bg-purple { background-color: #b10dc9; }
.bg-maroon { background-color: #740c4a; }
.bg-white { background-color: #fff; }
.bg-gray { background-color: #aaa; }
.bg-silver { background-color: #ddd; }
.bg-black { background-color: #111; }
/* Colors */
.navy { color: #001f3f; }
.blue { color: #0074d9; }
.aqua { color: #7fdbff; }
.teal { color: #39cccc; }
.olive { color: #3d9970; }
.green { color: #2ecc40; }
.lime { color: #01ff70; }
.yellow { color: #ffdc00; }
.orange { color: #ff851b; }
.red { color: #e92c21; }
.fuchsia { color: #f012be; }
.purple { color: #b10dc9; }
.maroon { color: #740c4a; }
.white { color: #fff; }
.silver { color: #ddd; }
.gray { color: #aaa; }
.black { color: #111; }
/* Border colors 

   Use with another border utility that sets border-width and style 
   i.e .border { border-width: 1px); border-style: solid); }     
*/
.border--navy { border-color: #001f3f; }
.border--blue { border-color: #0074d9; }
.border--aqua { border-color: #7fdbff; }
.border--teal { border-color: #39cccc; }
.border--olive { border-color: #3d9970; }
.border--green { border-color: #2ecc40; }
.border--lime { border-color: #01ff70; }
.border--yellow { border-color: #ffdc00; }
.border--orange { border-color: #ff851b; }
.border--red { border-color: #e92c21; }
.border--fuchsia { border-color: #f012be; }
.border--purple { border-color: #b10dc9; }
.border--maroon { border-color: #740c4a; }
.border--white { border-color: #fff; }
.border--gray { border-color: #aaa; }
.border--silver { border-color: #ddd; }
.border--black { border-color: #111; }
/* Fills for SVG */
.fill-navy { fill: #001f3f; }
.fill-blue { fill: #0074d9; }
.fill-aqua { fill: #7fdbff; }
.fill-teal { fill: #39cccc; }
.fill-olive { fill: #3d9970; }
.fill-green { fill: #2ecc40; }
.fill-lime { fill: #01ff70; }
.fill-yellow { fill: #ffdc00; }
.fill-orange { fill: #ff851b; }
.fill-red { fill: #e92c21; }
.fill-fuchsia { fill: #f012be; }
.fill-purple { fill: #b10dc9; }
.fill-maroon { fill: #740c4a; }
.fill-white { fill: #fff; }
.fill-gray { fill: #aaa; }
.fill-silver { fill: #ddd; }
.fill-black { fill: #111; }
/* Strokes for SVG */
.stroke-navy { stroke: #001f3f; }
.stroke-blue { stroke: #0074d9; }
.stroke-aqua { stroke: #7fdbff; }
.stroke-teal { stroke: #39cccc; }
.stroke-olive { stroke: #3d9970; }
.stroke-green { stroke: #2ecc40; }
.stroke-lime { stroke: #01ff70; }
.stroke-yellow { stroke: #ffdc00; }
.stroke-orange { stroke: #ff851b; }
.stroke-red { stroke: #e92c21; }
.stroke-fuchsia { stroke: #f012be; }
.stroke-purple { stroke: #b10dc9; }
.stroke-maroon { stroke: #740c4a; }
.stroke-white { stroke: #fff; }
.stroke-gray { stroke: #aaa; }
.stroke-silver { stroke: #ddd; }
.stroke-black { stroke: #111; }
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Authors

* [mrmrs](http://mrmrs.io)
* [johno](http://johnotander.com)

## License

ISC

