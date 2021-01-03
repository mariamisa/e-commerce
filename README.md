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
* ``` @mixin @include ``` re usable use css code

### Routing
* react ui library we want to use library to make routing

* ``` npm install react-router-dom ```
* Route => get 3 props
1. exact mean that the path completely match (true/false) value
2. path => the page path
2. component =>what must be render when its match
* with exact every route will render because all of these contains '/
* Switch => render one component
when get the first match its stop render.
* any component get render by a Route get passed 3 props(history,location,match(contain paramsUrl and url))

* we have to way to navigate between pages 
    1. ```  Link ``` component (tell the app what to re render) 
    2. using history ``` props.history.push('/') ```

* location :tell us where we are currently


### high order component(function that take component as arg and return another modified component)
example (take a menu component as arg and return this component with the 3 props (match history ... ))

-----------------------------
### Firebase
* we don't have to write back-end code firebase provide for us(server,database,Authentication)

* how firebase store works
collection (table)
document(rows)
```javascript

const firestore=firebase.firestore();
1. firestore.collection('users').doc('id00000') // to get collection data
2. firestore.doc('/users/id00000') //as fetch date
3. firestore.collection('/users') //as fetch date get the table
```

* we want to store user on auth (every user login we will store)