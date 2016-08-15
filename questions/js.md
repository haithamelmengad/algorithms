# JavaScript knowledge interview questions 

## Questions

### Basics

1. What does the `var` keyword do?
1. What does the `throw` keyword do?
1. How can you catch exceptions in JavaScript?
1. What's hoisting? What gets hoisted and what doesn't?
1. What's an Immediately-Invoked Function Expression (IIFE)? Why do we use them?
1. What's the different between .call() and .apply()?
1. How does 'this' work in JavaScript?
1. What's the .prototype property in JavaScript? When do we use it?
1. What's the purpose of the 'new' keyword?
1. What's the difference between 'throw' and 'return'?
1. What's the return value of a function that doesn't call 'return'?
1. What are the different ways of defining a function in JS? What are their pros and cons? When might we use each?
  - global, non-hoisted, local & hoisted
1. Can you access a variable defined inside a function, __outside__ of that function? If not, why?
1. What does `.bind()` do?
  - How do you use it to "set the _context_" of a function?
  - How do you use it to _pass in variables_ to a function?
1. How do you iterate through arguments in a function?
1. How do you break out of a loop? Bonus: how do you break out of a loop inside of a loop?
1. How do you remove/replace an item somewhere in the middle of an array?
1. What are different ways of iterating through arrays? What are their differences?
1. In a `for` loop, what are the semi-colon separated values? (i.e. `for (x; y; z) { ... }`)
1. What does `.map()` do?
1. What does `.reduce()` do?
1. Give an example of where we might use `.map(...).reduce(...)`.
1. What's the difference between `.concat()` and `.push()` on an array?
  - What do each return?
  - What kind of _effect_ does each have on the array?
1. What does `Object.assign()` do? When might we use it?
1. How do you iterate through the keys of an object?
1. What's a RegEx and what can you use it for?
1. What are the standard types in JS?
1. What's the difference between a "strict comparison" and "loose comparison"? How do you write both? When might each be useful?
  - truth table review! Is `NaN == NaN`?
  - What is an item's _"truth value"_?
1. What's the difference between `obj[key]`, `obj.key`, `obj["key"]`?
1. What does `"use strict"` do? Where does it go? Where does it take effect? Why might we use it?
1. Explain variable scoping in JavaScript.

### ES6/ES2015/ECMAScript 2015

1. What is an "arrow" function?
  - How does it differ from the typical function declarations?
  - What does it mean for an arrow function to be auto-bound? Why is this useful?
1. What is a promise and what does it improve upon?
  - How do you write one?
  - What does `Promise.all` do?
  - What's the difference between `.then()` and `catch()`?
  - How do you use it to replace a callback?
  - Why do promises sometimes swallow errors silenty? How do we prevent this?
  - What are the possible return values inside a `then()`?
1. What does `import` do?
  - What does the line `import  { name, id } from "./user"` do?
1. What is de-structuring/unpacking?
1. What is a template string?
  - How do you write one?
1. What is the spread operator? What is it used for?
  - How do we use it to modify an array?
  - How do we use it in place of `.apply()`?
1. What is the rest operator? What is it used for? How is it different from the spread operator?
1. What is a generator? What does `yield` do? Why is this useful?
1. What does `let` do? How does it differ from `var`? Why is this important?

### Node.JS

1. What's the REPL?
1. What is node and how does it change how you use JavaScript?
1. What's the difference between node and JavaScript in the browser?
1. What is `npm`?
  - What is a _"module"_?
  - What are _"dependencies"_? Why is knowing about them important?
  - How do you install a package __and__ save it as a dependency? What about saving it as a dev dependency?
  - What's the difference between a dependence and a dev dependency?
  - What does `module.exports` do?
1. What does the `package.json` file do?
1. How do we generate a starter `package.json` file?
1. How do we read environment variables in a node app? Why is this useful?
1. How can we store environment variables in a file and update the environment with them before running a node app?

### ExpressJS

1. What's the difference between node and express? What is express used for?
1. What's the difference between a client and a server? Provide examples.
1. What is a route/route handler?
  - In a route handler, what is the `req` argument and where does it come from?
  - What does the `next` argument do?
1. What are the types of HTTP requests and how do they map to the REST/CRUD operations?
1. What's a RESTful API and why is it useful?
1. How does a `POST` request differ from a `GET` request?
1. What causes the 'cannot set headers' error? How do we prevent this?
1. How do you prevent unauthenticated users from accessing a route or a set of routes?
1. What's the difference between an `app` and a `router`?
1. How do you generate a new express project using express-generator?
1. What is "middleware"?
1. What is a session? How can we save sessions?
1. What is the use of serialization and deserialization?
1. How do you send a redirect to the user's browser?
1. What is a `2xx` HTTP status code? `3xx`? `4xx`? `5xx`?
1. What is `JSON` (in terms of formats)?
1. What is callback hell? How do we prevent it?
1. What's the first argument to a node-style callback?

### Handlebars templating

1. What is Handlebars and what does it do?
1. How do you render a handlebars template?
1. How do you iterate through an array in handlebars?

## Links and resources

- [15 JS gotchas](http://www.standardista.com/javascript/15-common-javascript-gotchas/)
- [more gotchas](https://github.com/stevekwan/best-practices/blob/master/javascript/gotchas.md)
- [ES6](http://webapplog.com/es6/)
