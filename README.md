# COLORS

# Better colors for the web.

View the project page at [http://colorio.us](http://colorio.us "Colorios: Better colors for the web")

# What is this?

A simple color palette for the web. Out of the box, the 17 color keywords that CSS has long supported,
don't make for a great color palette. This is a set of sass variables and css classes that should help 
fix that. 




# Getting started

* Create a new repo for your project on Github
* In terminal run 
```bash
git clone git@github.com:mrmrs/colors.git [yourNewRepoName]
```

## To use the compiled css
* Copy css/colors.css to your projects css
* Include it in the head of your html document
```html
<link rel="stylesheet" href="css/colors.css">
```

## To just use the sass variables
* Copy sass/_colors.scss to your sass folder and include it in your imports. That is all. Plain and simple. 

# What is it?

A set of variables and skin classes to use in rapidly developing nicer looking websites. Default colors in browsers look horrible - and they aren't consistent. 
Think of this as a normalize.css for colors.

Also includes better default link styling.

## Directory structure
```
  colors/
        ├── README.md
        ├── Rakefile
        ├── css
        │   └── i.css             (Compiled CSS)
        ├── index.html 
        └── sass                  (CSS Source)
            ├── _colors.scss
            ├── _skins.scss
            ├── _links.scss
            ├── i.scss
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
[MRMRS](http://mrmrs.cc "Adam Morse - Designer Developer")

# License
This work is licensed under a [Creative Commons Attribution 3.0 Unported
License](http://creativecommons.org/licenses/by/3.0/ "Creative Commons
License").
