# COLORS

## Better colors for the web.

View the project page at [http://clrs.cc](http://clrs.cc "Colors: Better colors for the web.")

## What is this?

A simple color palette for the web. Let's be honest, out of the box, the color strings that css provides aren't... the tops.
This is a set of sass/less/stylus/css variables and css classes that can help fix that with just 647B of minified and gzipped css.

(Uncompressed is just 888B)

colors.css provides utilities to apply backgrounds, text-color, border colors for both html and svg elements. 

# Example
```
.blue {         color: $blue; }
.bg-blue {      backgroundcolor: $blue; }
.border--blue { border-color: $blue; }
.fill-blue {    fill: $blue; }
.stroke-blue {  stroke: $blue; }
```

## Install colors.css

You can get the code a few different ways

Download a zip from this page

Clone / fork the repo through git
```bash
git clone git@github.com:mrmrs/colors.git
```

Install [through npm](https://www.npmjs.org/package/colors.css)
```bash
npm install --save-dev colors.css
```

Install the [ruby gem](http://rubygems.org/gems/clrs)
```
gem install clrs
```

### Using the css
Simply copy colors.css to your css directory and include the file like so in the head of your html document

```html
<link rel="stylesheet" href="css/colors.css">
```

### Using sass, stylus, less, and myth

If you'd like to customize colors.css to your liking, you can edit the source in a variety of flavors.
Colors uses [gulp](http://gulpjs.com "GulpJs - A sweet js taskrunner") as a taskrunner.
There are individual gulp tasks for each preprocessor*
Each gulp task also comes with automatic vendor prefix support, csslint output, and livereload updates
built in.
It's pretty sweet.

First run

```bash
npm install -g gulp
```

Then

```bash
npm install
```

Once that is complete you can use any preprocessor like so

Recompile everything imported in ./sass/colors.scss to css/colors.css
everytime a file in the ./sass directory is updated
```bash
gulp sass
```

Recompile everything imported in ./stylus/colors.styl to ./css/colors.css
everytime a file in the ./stylus directory is updated
```bash
gulp stylus
```

Recompile myth/colors.css to css/colors.css everytime myth/colors.css is updated
```bash
gulp myth
```

If you would like to minify ./css/colors.css to .css/colors.min.css you can just run
```bash
gulp minify
```

* Except for less which doesn't seem well supported with gulp yet. Hopefully we can
better support less soon.

## Directory structure
```

    colors/
          ├── README.md
          ├── bower.json
          ├── coffee
          │   └── colors.coffee
          ├── css
          │   ├── colors.css
          │   └── colors.min.css
          ├── gulpfile.js
          ├── index.html
          ├── js
          │   └── colors.js
          ├── less
          │   ├── _skins.less
          │   ├── _variables.less
          │   └── colors.less
          ├── myth
          │   └── colors.css
          ├── package.json
          ├── sass
          │   ├── _skins.scss
          │   ├── _variables.scss
          │   └── colors.scss
          ├── site.css
          └── stylus
              ├── colors.styl
              ├── skins.styl
              └── variables.styl

```

# Author
[MRMRS](http://mrmrs.cc "Adam Morse - Designer + Developer in SF")


# License

The MIT License (MIT)

Copyright (c) 2014 @mrmrs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

