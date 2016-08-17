# Frontend Interview Questions

## Questions

### General Layout

1. What's the difference between a block-level and text element?
1. What are different techniques for __horizontally__ centering a block-level element?
  - set width, margin: 0 auto;
  - display: table on parent, table-cell on thing to center
  - flex
  - transform
1. What about centering a text element?
  - text-align: center
1. How do you __vertically__ & __horizontally__ center a block-level element?
  - tables
  - flex
  - transform
  - [shameless plug](http://codepen.io/joshpaulchan/pen/PzLmRb?editors=0100)
1. How do you put block-level items side-by-side?
  - Float
  - display: inline-block (iffy)

### Sticky Header

How do you do a sticky, inline-header with menu items?

* inline-menu use a side-by-side divs or horizontal ul's
* to make it "sticky", use position: absolute or static or fixed

[a solution](http://codepen.io/joshpaulchan/pen/yJwbmQ?editors=0100)

### Autocomplete Box

How would you make an "autocomplete" input that can filter through given items?

* access the input value
* filter through a list of items
* render these onto the page
* NO refreshing the page! this is a use-case for client-side rendering

[solution using jq](http://codepen.io/joshpaulchan/pen/mEowjX?editors=0010)

### Make a Resizeable Grid

How do you make a grid that can resize?

* Inline elements
* Media queries

### Make a spreadsheet

How would you make a collapsing sidebar?

### Realtime Newsfeed

How do you make a realtime newsfeed

* Design HTML/CSS for a Facebook like news feed
  - with a profile picture for each item, and the name of the person who posted it
  - A post body containing: an image or text
  - A list of likes
  - A like button?
* How would you do threaded comments in each item?
* How would you load more items via AJAX when the page loads?

### Chat Window

How would you make a realtime chat window?


## Links and resources

1. http://howtocenterincss.com
