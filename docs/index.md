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

<div class="codurance-header" style="margin-top: 15px;" markdown="1">
## Changing Bulma styles
</div>

The colour scheme in the library is based in the Codurance's brand guidelines that tells use to use:
The library is build with node.js and npm, so you are going to need both before starting. 

Bulma allows customisation by overriding variables, so the `_colors.scss` file has all the variables with codurance colours,
and we override then in the `codurance.scss` file. 

The list of variables are: 

| Bulma variable | Our variable | Colour |
| :--- | :--- | :---: |
| $primary | $codurance-red | #d60d74 |
| $info | $codurance-orange | #ef7726 |
| $success | $codurance-yellow | #ffd000 |
| $warning | $codurance-purple | #5c64b9 |
| $danger | $codurance-green | #185466 |
| $dark | $codurance-light-green | #51bfbb |

To change styles in Bulma you can override the variables for the library, you can see them [here](https://bulma.io/documentation/customize/variables/) 
When changing the `codurance.scss` the `@import` for bulma always has to be in the bottom so it can read the variables declared. 

<div class="codurance-header" style="margin-top: 15px;" markdown="1">
## Building the library
</div>

`Gulp` is being used to generate the `css` and `js` files, it will compile the `scss` and minify everthing. 

You are going to need to install gulp and the dependencies:
```shell
# install gulp
$ npm install gulp -g
# install all the depencies
$ npm install
```

Then to run the project you can do `npm start` this will watch the changes inside the `sass` folder and recompile the files. 

All the tasks are declared in the `Gulpfile.js` and you can run the tasks with the command:
```shell
$ gulp <taskname>
```

The decalred tasks are: 

- `sass:watch` - Keep watching the scss files and compile into a new css file when there is change in the files
- `minify` - Create a minified version of the css and javascript files.
- `build` - The build task minifies the files and update the files in the `docs` folder.

<div class="codurance-header" style="margin-top: 15px;" markdown="1">
## Editing the styles
</div>

The library has four main components:

- `_color.scss`: This is the file where we are going to declare the variables with the codurance colours.
- `overrides.scss`: Is the file where we override bulma styles like the `h` or `table`. 
- `custom.scss`: is the file containing elements created specifically for the library and try to emulate the elements from the new services pages. 

