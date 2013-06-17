# COLORS

View the project page at [http://colorio.us](http://colorio.us "Colorios: Better colors for the web")

A nicer set of color defaults. Includes a set of skin classes as well as sass variables. Colors are easily
configurable and extendable. 

# Getting started

* Create a new repo for your project on Github
* In terminal run 
```bash
    git clone git@github.com:mrmrs/colors.git [yourNewRepoName]
    cd [yourNewRepoName]
    git remote rm origin
    git remote add origin git@github.com:[yourUserName]/[yourNewRepoName].git
    git remote -v
```

* git remote -v will allow you to check that you have changed the remote origin correctly. The output should look like:
```bash
    origin git@github.com:[yourUserName]/[yourNewRepoName].git (fetch)
    origin  git@github.com:[yourUserName]/[yourNewRepoName].git (push)
```
  
* Once you add & commit files you are ready to publish run:
```bash
git push -u origin master
```

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
