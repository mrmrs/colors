#mnml v1.0
==========

Mnml is a starting point for responsive HTML5 SASS projects.
It is extremely light-weight. 

## Starting a New Project with MNML 
* Create a new repo for your project on Github
* In terminal run
    git clone git@github.com:mrmrs/mnml.git yourNewRepoName
    cd yourNewRepoName
    git remote rm origin
    git remote add origin git@github.com:[yourUserName]/[yourNewRepoName].git
    git remote -v

* git remote -v will allow you to check that you have changed the remote origin correctly. The output should look like:
    origin git@github.com:[yourUserName]/[yourNewRepoName].git (fetch)
    origin  git@github.com:[yourUserName]/[yourNewRepoName].git (push)
  
* Once you add & commit files you are ready to publish run:
    git push -u origin master

## What does it come with?
    mnml/
        ├── README.md
        ├── css
        │   └── i.css                 (7 kb)
        ├── index.html                (386 bytes)
        └── sass
            ├── _grid.scss
            ├── _normalize.scss
            ├── _styles.scss
            └── i.scss


# Author
=============================
mrmrs
(http://mrmrs.cc)[mrmrs.cc]
