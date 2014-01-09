# COLORS

# Better colors for the web.

View the project page at [http://clrs.cc](http://clrs.cc "Colors: Redefining the default web colors.")

# What is this?

A simple color palette for the web. Out of the box, the color strings that css provides aren't... the tops.
This is a set of sass variables and css classes that should help fix that.

## Getting started

* Grab a copy of the code by downloading the zip from this page - or cloning/forking the repo.
```bash
git clone git@github.com:mrmrs/colors.git
```

### Using the css
Simply copy colors.css to your css directory and include the file like so in the head of your html document

``` <link rel="stylesheet" href="css/colors.css"> ```

### Using the Sass
The sass source can be found in a folder I creatively titled "sass."
Include any or all of the three partials to your project like you would any other
sass partials. But just for reference...

```
@import "variables";
@import "skins";
@import "links";
```

### Using the Stylus
You an also edit the source code as stylus.
Include, exclude, or modify the partials to your hearts content.

## Directory structure
```
  colors/
        ├── README.md
        ├── Rakefile
        ├── index.html
        ├── css
        │   └── colors.css
        │   └── colors.min.css
        ├── less                  (CSS Source)
            ├── _variables.less
            ├── _skins.less
            ├── _links.less
            ├── colors.less
        ├── sass                  (CSS Source)
            ├── _variables.scss
            ├── _skins.scss
            ├── _links.scss
            ├── colors.scss
        ├── stylus                (CSS Source)
            ├── variables.styl
            ├── skins.styl
            ├── links.styl
            ├── colors.styl
```

## Rake tasks

Start sass development
```bash
rake sass
```

Start sass - output is minified
```bash
rake minify
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

