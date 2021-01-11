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
1. create database on firebase
2. on firebase.utils file make function that get the userData that passed to the function,check if uid exist or not
3. if not exist will add to firebase
4. to make sign up we want to enable email/password on firebase


### Redux
* redux/library to make react state more scalable and easier
* state management
* one object describe the entire app and pass as props to component need it

* why use redux?
1. good manage large state
2. sharing data between component
3. predictable state management using the 3 principles
    1. single source of truth(one state describe all app)
    2. state is read only(not modify the object create new one after any action 'immutable')
    3. change using pure function(get input return the same output)


* redux flow
1. Action => when user click or make interaction ,will call reducer
2. Root Reducer => pure function receive action(click) create output (store/state)
3. Store => is state app (object) will get updated by reducer
4. DOM changed =>re render after change the state

* MVC 
action => controller => model => view
click=> reducer decide what change=>store changed => dom render

```
redux dosent replace this.state ,we keep only important state on redux store and keep this.state inside specific ui like form input
 ```

the problem is drillings props

* how reducer work?!!
action(type,payload) => update user reducer with payload => user Reducer will update just user object (will not touch anything else) => pass new user value as props to the component reducer work as ``` this.setState ``` work.

* reducer function
its a function take state(prev state before update) and action,and return an object that is a new object(state) because we want to re render if we return the same object and assigning the new value the component will not re render

* setup redux
action => middleware=>reducer => update store =>dom changed
``` middleware is a peace of code that get the action before reducer ```

* Provider(store object) component on react-redux / we warp the entire application with it to make sure that all app access to it.

* root-reducer / actual code that companies all state together