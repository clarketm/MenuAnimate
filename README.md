[![Build Status](https://travis-ci.org/clarketm/MenuAnimate.svg?branch=master)](https://travis-ci.org/clarketm/MenuAnimate)
# MenuAnimate
Enhance your website with **six** stylish transformicons using SCSS (or LESS) and CSS.

## Getting Started

### Download and Setup
First, initialize your variable settings in the `variables.scss` (or `variables.less`) file or simply use the defaults.

```sass
/****** DEFAULTS ******/

/* sizes */
$base: 100%;
$width: 1.5em;
$thickness: .3125em;
$spacing: .525em;
$border-radius: 1.5em;

/* animation */
$toggle-factor: .75;
$hover-factor: 1.20;
$duration: .5s;

/* theme */
$background: #c9302c;
$opacity: 0.8;
$hover-opacity: 1;

/* position */
$top: 10px;
$right: 15px;
$bottom: auto;
$left: auto;
```

Next, transpile the `menu-animate.scss` (or `menu-animate.less`) to generate your css file and add the generated `menu-animate.css` file to the `<head>` of your html document.

Lastly, add **one** of the following two scripts before the closing `<body>` of your html document.
* `menu-animate.js` - *Vanilla JavaScript* 
* `jquery.menu-animate.js` - *jQuery Plugin* __\*__

> __\*__ requires [jQuery](https://jquery.com/) (1.2.1 or higher).

### Install with Bower
```shell
$ bower install menuanimate.scss
```

### Install with npm
```shell
$ npm install menuanimate
```

## Usage

### HTML
Add the following html to your webpage where you would like your icon to appear.

```html
<button class="navicon"></button>

<!-- OR ... use your own selector [id or class] -->

<button id="my-selector"></button>

```

### Bootstrap
The plugin integrates seamlessly with the [Bootstrap](http://getbootstrap.com/) css framework and the Bootstrap [collapse.js](http://getbootstrap.com/javascript/#collapse) plugin. 
Simply add `data-toggle="collapse"`, the `.navbar-toggle` class, and a `data-target` element to your markup.

```html
<button class="navicon navbar-toggle" data-toggle="collapse" data-target="#navbar-target"></button>

<!--target-->
<div id="navbar-target" class="navbar-collapse collapse">
  ...
</div>
<!-- /target -->
```

### jQuery
To use this plugin with jQuery, include both the [jQuery](https://jquery.com/) and `jquery.menu-animate.js` scripts, then simply call:

```js
/* no args */
$("#my-selector").menuAnimate();                 // icon will default to "line"
```

... or choose an icon type modifier:
```js
/* icon arg */
$("#my-selector").menuAnimate("x");              // icon will be "x"
```

### JavaScript (Vanilla JS)

To use this plugin with *only* JavaScript, include the `menu-animate.js` script, then simply call:
```js
/* no args */
MenuAnimate();                          // selector will default to ".navicon"
```

... choose your own selector [id or class]:
```js
/* selector arg */
MenuAnimate("#my-selector");            // selector will be "#my-selector"
```

... choose an icon type modifier:
```js
/* icon arg */
MenuAnimate("x");                       // selector will default to ".navicon"
                                        // icon will be "x"
```

... choose both a selector and icon type modifier
```js                                               
/* icon & selector args */
MenuAnimate("plus", ".my-selector");    // argument order doesn't matter
MenuAnimate(".my-selector", "plus");    // ... same as above
```

### Icons

Customize your icon by passing in one of the **six** icon type modifiers. Each icon starts as a three-bars icon and transforms to the specified icon type. 

|   Type   | Description |
| :------: |   :------:  |
| `line` * |    line     |
|   `x`    |      x      |
| `plus`   |     plus    |
| `larr`   | left arrow  |
| `rarr`   | right arrow |
| `uarr`   |   up arrow  |

*&nbsp;_default_ &mdash; when no additional modification class is added.

### Live Demo 
A live, interactive demo can be found here:
##### [www.clarketravis.com](http://www.clarketravis.com/querytag/#transformicons) and [Demos](http://www.clarketravis.com/menuanimate/)


