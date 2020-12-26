## setup our project
* ``` npx create-react-app ```
* make file structure

### use sass (upgrading version on css) =>react comes with configuration for sass
* ``` npm i node-sass ```
* babel will convert sass files into css(because browser can read css file)
* you will get an error because different version to solve it:
1. delete package-lock and node_modules.
2. inside package version to "node-sass": "^4.0.0".
3. npm i
* scss file similar to css file but:
1. ``` & ``` additional selector refer to the class above it.
2. we can write nesting classes 
example:class style inside class style block 
 ```scss
.selector{
    .nestedSelector{

    }
}
 ```
===
```css
.selector .nestedSelector{

}
```


