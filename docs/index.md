---
layout: default
---

<div class="codurance-header" markdown="1">
## What is it?
</div>

Codurance CSS is a lightweight library built on top of [Bulma](https://bulma.io).
This library was built to standardise the look and feel of the websites created by Codurance.

The colour scheme in the library is based in the Codurance's brand guidelines that tells use to use:

<div class="columns" style="text-align: center; margin-top: 15px;">
    <div class="column is-2">
        <div class="circle" style="background-color: #d60d74;"></div>
        <p>red<br/> #d60d74</p>
    </div>
    <div class="column is-2">
        <div class="circle" style="background-color: #ef7726;"></div>
        <p>orange<br/> #ef7726</p>
    </div>
    <div class="column is-2">
        <div class="circle" style="background-color: #ffd000;"></div>
        <p>yellow<br/> #ffd000</p>
    </div>
    <div class="column is-2">
        <div class="circle" style="background-color: #5c64b9;"></div>
        <p>purple<br/> #5c64b9</p>
    </div>
    <div class="column is-2">
        <div class="circle" style="background-color: #185466;"></div>
        <p>green<br/> #185466</p>
    </div>
    <div class="column is-2">
        <div class="circle" style="background-color: #61bfbb;"></div>
        <p>light-green<br/> #61bfbb</p>
    </div>
</div>

The colour scheme in the library is based in the Codurance's brand guidelines that tells use to use:
The library is build with node.js and npm, so you are going to need both before starting. 

Bulma has a quite easy way of overriding the main styles when using `sass`, we just have to set the following variables: 

- `$primary`
- `$info`
- `$success`
- `$warning`
- `$danger`
- `$dark`
- `$family-primary`

```json
{
    "scripts": {
        "css-build": "node-sass --omit-source-map-url sass/codurance.scss dist/codurance.css",
        "css-watch": "npm run css-build -- --watch",
        "start": "npm run css-watch"
    }
}
```

<div class="codurance-header" style="margin-top: 15px;" markdown="1">
## Changing Bulma styles
</div>

To change styles in Bulma you can override the variables for the library, you can see them [here](https://bulma.io/documentation/customize/variables/) 
When changing the `codurance.scss` the `@import` for bulma always has to be in the bottom so it can read the variables declared. 

```scss
@charset "utf-8";
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

// Codurance Colors
$codurance-red: #d60d74;
$codurance-orange: #ef7726;
$codurance-yellow: #ffd000;
$codurance-purple: #5c64b9;
$codurance-green: #185466;
$codurance-light-green: #51bfbb;
$coudrance-font: 'Open Sans', Arial, sans-serif;

    
// Update Bulma Global variables
$primary: $codurance-orange;
$info: $codurance-purple;
$success: $codurance-light-green;
$warning: $codurance-yellow;
$danger: $codurance-red;
$dark: $codurance-green;
$family-primary: $coudrance-font;

// Import bulma.sass is always after declaring the variables
@import "../node_modules/bulma/bulma.sass";
```
