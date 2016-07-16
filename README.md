# Theme for Canvas Group Online

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
[![Build Status](https://travis-ci.org/jobayerarman/build-system-boilerplate-bootstrap.svg?branch=master)](https://travis-ci.org/jobayerarman/build-system-boilerplate-bootstrap)
[![Build status](https://ci.appveyor.com/api/projects/status/kofgmse4gvrl9yy2/branch/master?svg=true)](https://ci.appveyor.com/project/jobayerarman/build-system-boilerplate-bootstrap/branch/master)
[![Dependency Status](https://david-dm.org/jobayerarman/build-system-boilerplate-bootstrap.svg)](https://david-dm.org/jobayerarman/build-system-boilerplate-bootstrap)
[![devDependency Status](https://david-dm.org/jobayerarman/build-system-boilerplate-bootstrap/dev-status.svg)](https://david-dm.org/jobayerarman/build-system-boilerplate-bootstrap#info=devDependencies)

Folder structure using [SASS Guidelines](http://sass-guidelin.es/) for easy maintain &amp; change.

* The development code is in the [`src/`](src) directory.
* The build process relies on [`grunt`](http://gruntjs.com/).
* The `grunt` tasks can be found in the [`Gruntfile.js`](gruntfile.js)
  file.

## Setup

1. Install [`Node.js`](https://nodejs.org/) and
   [`npm`](http://blog.npmjs.org/post/85484771375/how-to-install-npm).
2. Run `npm install`.

## Development

You should be able to work almost entirely in the [`src/`](src)
directory.

While developing run `grunt` as this will watch
the [`src/`](src) dir and output to [`dist/`](dist) directory.

## Directory Structure

```
project-name/
├── dist/
|   ├── css/
│   |   ├── style.css
│   |   └── style.min.css
|   ├── images/
|   ├── js/
│   |   ├── script.js
│   |   └── script.min.js
|   ├── pages/
|   └── index.html
├── src/
|   ├── css/
│   |   ├── style.css
│   |   └── style.min.css
|   ├── images/
|   ├── js/
│   |   ├── script.js
│   |   └── script.min.js
|   ├── less/
|   |   ├── 1-vendor/
|   |   ├── 2-utils/
|   |   ├── 3-base/
|   |   ├── 4-layout/
|   |   ├── 5-component/
|   |   ├── 6-themes/
|   |   ├── 7-pages/
|   |   ├── main.less
|   |   └── README.md
|   ├── site/
|   |   ├── include/
|   |   ├── pages/
|   |   └── index.html
├── .travis.yml
├── Gruntfile.js
├── LICENSE
├── README.md
└── package.json
```
