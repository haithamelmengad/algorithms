# Web development knowledge questions

## Questions

- HTML/CSS/JS
  - Explain the CSS “box model” and the layout components that it consists of.
  - Explain the meaning of each of these CSS units for expressing length: cm, em, in, mm, pc, pt, px
  - What is CORS? How does it work?
  - Explain the purpose of each of the HTTP request types when used with a RESTful web service.
  - What is the HTTP request header, and what kind of information usually goes in it?
  - Explain the basic structure of a MIME multipart message when used to transfer different content type parts. Provide a simple example.
  - How do we execute a series of AJAX calls in order?
  - How do we execute a series of AJAX calls and then run something else only after all of those calls have completed?
  - What is the difference between a stateless/stateful protocol? Which is HTTP?
  - What global styles are applied as a part of Bootstrap’s default typography?
  - What does “!important” do?
  - How many different media queries are used by the Bootstrap grid system by default?
  - What dependencies does Bootstrap require for it to work properly?
  - What is HTML form submission?
  - What does the `action` attribute on an HTML form do?
  - When an HTML form is submitted via a POST method, what `Content-Type` does the form come in?
- jQuery
  - Explain and contrast the usage of event.preventDefault() and event.stopPropagation(). Provide an example.
  - What’s the deal with the $ in jQuery? What is it and what does it mean? Also, how can jQuery be used in conjunction with another JavaScript library that also uses $ for naming? Bonus credit if you can provide two answers.
  - What is the difference between jQuery.get() and jQuery.ajax()?
  - The code below is for an application that requires defining a click handler for all buttons on the page, including those buttons that may be added later dynamically. What is wrong with this code, and how can it be fixed to work properly even with buttons that are added later dynamically?

  ```
  // define the click handler for all buttons
  $( "button" ).bind( "click", function() {
      alert( "Button Clicked!" )
  });

  /* ... some time later ... */

  // dynamically add another button to the page
  $( "html" ).append( "<button>Click Alert!</button>" );
  ```

- React
  - What is React? How is it different from other JS frameworks?
  - Is React an MVC framework?
  - What problem was React created to solve? How does it do this?
  - What’s the difference between props and state?
  - What happens during the lifecycle of a React component?
  - What causes a component to re-render?
  - What can and cannot go inside curly braces in JSX? Why?
  - What is routing?
  - What is JSX?
  - Talk to me about Flux/Redux/...
  - What are stateless components? When do we need them?
  - What are higher-order components? When do we need them?
  - What are mixins? Why should or shouldn’t we use them?
  - How do we get React to work with Redux? What steps are required?
  - React Native
  - (all of the above React questions, plus…)
  - How do we make native code available inside RN?
  - How do we run different code in Android/iOS?
  - How do we share code with React apps?
  - Talk to me about routing in RN.
  - Does RN code run in Node.js?
  - How would you create this layout? (sample layout or app)
  - How do you an “AJAX-like” call in RN?
  - How do we publish code updates?
  - What’s the most frustrating RN bug or issue you’ve encountered?
  - Are RN apps really native? Why or why not?
  - What’s the difference between RN and Ionic/Cordova/PhoneGap/Apptanium/...

## Links and resources

- http://interview-questions-247.appspot.com/reactjs-interview-questions-set-1
- http://interview-questions-247.appspot.com/reactjs-interview-questions-set-2
- http://interview-questions-247.appspot.com/reactjs-interview-questions-set-3
- https://www.toptal.com/javascript/interview-questions
- https://www.toptal.com/nodejs/interview-questions
- https://www.toptal.com/jquery/interview-questions
- https://github.com/MaximAbramchuck/awesome-interview-questions
