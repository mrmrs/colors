# MNML

View the project page at [http://mn-ml.cc]("http://mn-ml.cc", "MNML - A light-weight responsive html5 boilerplate.")

MNML is a starting point for responsive HTML5 SASS projects.
Focused on mobile readability.

# Getting started

* Create a new repo for your project on Github
* In terminal run 
```bash
    git clone git@github.com:mrmrs/mnml.git [yourNewRepoName]
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

Mostly a bare-bones html5 template with some basic css I start most projects
with.

## Directory structure
```
    mnml/
        ├── README.md
        ├── css
        │   └── i.css                 (8 kb - 2.6kb gzipped)
        ├── index.html                (386 bytes)
        └── sass                      CSS source
            ├── _normalize.scss
            ├── _grid.scss
            ├── _type.scss
            ├── _styles.scss
            └── i.scss
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
[MRMRS](http://mrmrs.cc, "Adam Morse - Designer Developer")

# License
This work is licensed under a [Creative Commons Attribution 3.0 Unported
License](http://creativecommons.org/licenses/by/3.0/, "Creative Commons
License").
