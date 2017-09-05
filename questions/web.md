# Web development knowledge questions

## Questions

### HTML / HTTP / Browser / Web Development
1. What is HTML5 and W3C?
1. What does the `action` attribute on an HTML form do?
1. When an HTML form is submitted via a POST method, what `Content-Type` does the form come in?
1. What is CORS? How does it work?
1. Explain the purpose of each of the HTTP request types/methods when used with a RESTful web service.
1. What is the HTTP request header, and what kind of information usually goes in it?
1. How does a `POST` request differ from a `GET` request?
1. What do we mean when we say HTTP is stateless?
1. What is a `2xx` HTTP status code? `3xx`? `4xx`? `5xx`?
1. What are cookies? What are they useful for?
1. What's an XSS attack? How do we prevent it?
1. What's a CSRF attack? How do we prevent it?
1. What's a SQL injection attack? How do we prevent it?
1. What's a RESTful API?
1. What other request methods are there?
1. What happens when you type "http://www.google.com" in the address bar of your web browser?
1. How does express differ from a web server (Apache, nginx)?
1. What is DNS and how does it work?
1. What are the differences between `application/x-www-form-urlencoded` and `multipart/form-data`?
1. What does `<!DOCTYPE html>` do?
1. What are some examples of meta tags and what do they do?

### CSS
1. Explain the CSS “box model” and the layout components that it consists of.
1. Explain CSS specificity.
1. Explain the meaning of each of these CSS units for expressing length: cm, em, in, mm, pc, pt, px
1. What does `!important` do?
1. How many different media queries are used by the Bootstrap grid system by default?
1. What dependencies does Bootstrap require for it to work properly?
1. What global styles are applied as a part of Bootstrap’s default typography?
1. How do you import custom fonts?

## Bonus

### jQuery

1. Explain and contrast the usage of event.preventDefault() and event.stopPropagation(). Provide an example.
1. What’s the deal with the $ in jQuery? What is it and what does it mean? Also, how can jQuery be used in conjunction with another JavaScript library that also uses $ for naming? Bonus credit if you can provide two answers.
1. What is the difference between jQuery.get() and jQuery.ajax()?
1. The code below is for an application that requires defining a click handler for all buttons on the page, including those buttons that may be added later dynamically. What is wrong with this code, and how can it be fixed to work properly even with buttons that are added later dynamically?

```
// define the click handler for all buttons
$( "button" ).bind( "click", function() {
    alert( "Button Clicked!" )
});

/* ... some time later ... */

// dynamically add another button to the page
$( "html" ).append( "<button>Click Alert!</button>" );
```

### ExpressJS

1. What's the difference between node and express? What is express used for?
1. What's the difference between a client and a server? Provide examples.
1. What is a route/route handler?
  - In a route handler, what is the `req` argument and where does it come from?
  - What does the `next` argument do?
1. What are the types of HTTP requests and how do they map to the REST/CRUD operations?
1. What's a RESTful API and why is it useful?
1. How can you write an endpoint that only takes `GET` requests?
  How about `POST` requests? How about an endpoint that accepts
  any request type/method?
1. What causes the 'cannot set headers' error? How do we prevent this?
1. How do you prevent unauthenticated users from accessing a route or a set of routes?
1. What's the difference between an `app` and a `router`?
1. What is "middleware"?
1. What is a session? How are sessions implemented?
1. How do you send a redirect to the user's browser?
1. What is `JSON` (in terms of formats)?

### Express and Handlebars

1. What is a route/route handler?
  - In a route handler, what is the `req` argument and where does it come from?
  - What does the `next` argument do?
1. How do you set HTTP status codes in Express?
1. How do you send a redirect to the user's browser in Express?
1. If you try to do `res.send()` multiple times, what happens?
1. What is "middleware"?
1. How can you use "middleware" to ensure some routes are only
  accessible by logged in users?
1. What is a session?
1. What is Handlebars and what does it do?
1. How do you render a handlebars template?
1. How do you iterate through an array in handlebars?

### React

1. What is React? How is it different from other JS frameworks?
1. Is React an MVC framework?
1. What problem was React created to solve? How does it do this?
1. What's the "shadow DOM?" Why does it exist?
1. What’s the difference between props and state?
1. What happens during the lifecycle of a React component?
1. What causes a component to re-render?
1. What can and cannot go inside curly braces in JSX? Why?
1. What is React routing?
1. What is JSX?
1. Talk to me about Flux/Redux/...
1. What are stateless components? When do we need them?
1. What are higher-order components? When do we need them?
1. What are mixins? Why should or shouldn’t we use them?
1. How do we get React to work with Redux? What steps are required?

### React Native

1. How do we make native code available inside RN?
1. How do we run different code in Android/iOS?
1. How do we share code with React apps?
1. Talk to me about routing in RN.
1. Does RN code run in Node.js?
1. How would you create this layout? (sample layout or app)
1. How do you an “AJAX-like” call in RN?
1. How do we publish code updates?
1. What’s the most frustrating RN bug or issue you’ve encountered?
1. Are RN apps really native? Why or why not?
1. What’s the difference between RN and Ionic/Cordova/PhoneGap/Apptanium/...

## Links and resources

1. https://github.com/MaximAbramchuck/awesome-interview-questions
1. https://www.toptal.com/jquery/interview-questions
1. http://interview-questions-247.appspot.com/reactjs-interview-questions-set-1
1. http://interview-questions-247.appspot.com/reactjs-interview-questions-set-2
1. http://interview-questions-247.appspot.com/reactjs-interview-questions-set-3
