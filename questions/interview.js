// Today you will be working on answering common interview questions.
// In order to get the most out of this set of questions we strongly
// suggest that you imagine you are at an interview and write down
// the response you would give with your current knowledge. Later in the day
// we will review this set of questions. Do not run any code. The goal is to read the code
// and understand what it should do. In many interviews you may not have an opportunity to test 
// out the code you write. 

/* Question 1 */
    // What are the limitations of using typeof to check if a variable is an object (example below)
    if(typeof myObj === "object") {
       // treat as object 
    }


/* Question 2 */
    // How do you check if a variable contains a number or something that can be treated as a number?

/* Question 3 */
    // What would the code below print to the screen and why.
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();

/* Question 4 */
    // What are IIFEs? Why are they important?

/* Question 5 */
    // Why does "use strict" exist? Can you give an example of why you might want 
    // to add "use strict" to the top of a file or function block.

/* Question 6 */
    // Are foo1 and foo2 functions equivalent?
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}
/* Question 7 */
 // What is the output of the following program?
 (function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();
/* Question 8 */
    // What will happen when Button 4 is clicked after we run the code below
    for (var i = 0; i < 5; i++) {
        var btn = document.createElement('button');
        btn.appendChild(document.createTextNode('Button ' + i));
        btn.addEventListener('click', function(){ console.log(i); });
        document.body.appendChild(btn);
    }

/* Question 9 */
    // What will the code below log to the console?
for (var i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000 );
}

/* Question 10 */
    // What will the code below log to the console?
console.log(false == '0')
console.log(false === '0')

/* Question 11 */
    // What will the code below log to the console?
var a={},
b={key:'b'},
c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]);
/* Question 12 */
    // Implement a throttle function using closures. The function you implement should
    // take a function "fn" and a number "ms" as inputs and return a version of the passed function
    // that can only be called every ms milliseconds.

    var throttle = function(fn, ms) {
        /* YOUR CODE HERE */
    }

    var throttledConsole = throttle(console.log, 1000);
    throttledConsole("Hello") // prints
    throttledConsole("Hello 2") // doesnt print
    setTimeout(throttledConsole("Hello 3", 2000)) // prints 

/* Question 13 */
    // Implement once using closures. 
    // once is a function that takes a function "fn" as an input and 
    // returns a new function that behaves exactly like the function 
    // that was passed in except that this new function can only be run once.
    var once = function(fn, ms) {
        /* YOUR CODE HERE */
    }

    var oncedConsole = once(console.log);
    oncedConsole("Hello") // prints
    oncedConsole("Hello 2") // doesnt print
    setTimeout(oncedConsole("Hello 3", 2000)) // doesnt print

/* Question 14 */

    // Explain the use cases for, and differences between — bind, apply and call.

/* Question 15 */
    // Explain event delegation in jQuery and why it is useful.
/* Question 16 */
    // What is a constructor?

/* Question 17 */
    // If I wanted to swap how slice/splice work for every Array in my program how would I do it?

/* Question 18 */
    // What is the prototype chain?

/* Question 19 */
    // Explain hoisting in JS. Give an example where a function is hoisted and one where the function is not hoisted.

/* Question 20 */
    // Modify console.log so that everything you console.log has a prefix of "(app)". Example: console.log("Hello") -> (app) Hello

/* Question 21 */
    // Explain the difference between null and undefined? When should you set something to null? When should you set something to undefined?

/* Question 22 */
    // What is a Promise? What is the relationship of a Promise to a callback?

/* Question 23 */
    // React quick questions 
// Q: ReactJS renders HTML tags if the element is defined in ______
// Lowercase
// Uppercase
// Q: ReactJS renders Components (classes) if the element is defined in ______
// Uppercase
// Lowercase
// Q: To use native javascript as an attribute value, the expression should be wrapped within _____
// curly-braces{}
// double-quotes
// Q: Which of the following is used to trigger a UI update?
// props
// state
// Q: A component can mutate its properties as and when required
// True
// False
// Q: An owner component defines its children component within render method
// True
// False
// Q: A parent component could access or read its children components properties
// True
// False
// Q: Data flow from owner to owned components using which of the following?
// state
// props
// Q: Change or update to large number of nodes is optimized using which of the following techniques?
// Batching
// Change detection
// Both of the above

/* Question 24 */
    // What is the difference between == and === ?

/* Question 25 */
    // How would you check if a variable is null/undefined?

/* Question 26 */
    // Explain how the code below checks if bar is an Object
    if(bar && typeof bar === "object") {
	    
    }

/* Question 27 */
    // How do you select all anchor tags with the class 'special' using jQuery? 

/* Question 28 */
    // Give an example where the value of the 'this' is not the object it is defined in

/* Question 29 */
    // What is the result of running the following code?
    [1,3,2000,11].sort()
/* Question 30 */
    // Write a function that logs the string "Hi" every 1 hour

/* Question 31 */
    // What is the output of the code below?
(function() {
    var a = b = 5;
})();

console.log(b);

