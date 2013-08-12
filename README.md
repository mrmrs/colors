# COLORS

# Better colors for the web.

View the project page at [http://colorio.us](http://colorio.us "Colorios: Better colors for the web")

# What is this?

A simple color palette for the web. Out of the box, the 17 color keywords that CSS has long supported,
don't make for a great color palette. This is a set of sass variables and css classes that should help 
fix that. 

# Getting started

* Grab a copy of the code by downloading the zip from this page - or cloning the repo.
```bash
git clone git@github.com:mrmrs/colors.git 
```

# SASS
The sass source can be found in a folder I creatively titled "Sass"
Include the three partials to your project like you would any other
sass files. 

## Directory structure
```
  colors/
        ├── README.md
        ├── Rakefile
        ├── css
        │   └── colors.css 
        │   └── colors.min.css             
        ├── examples.html 
        └── sass                  (CSS Source)
            ├── _variables.scss
            ├── _skins.scss
            ├── _links.scss
            ├── colors.scss
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
