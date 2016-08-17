# Frontend Interview Questions

Use Codepen to implement these tasks purely on the client side. Wherever necessary you can use dummy data to fill out the contents.
These exercises are meant to test your ability to write HTML/CSS/JavaScript purely in the Browser. 

Each question has multiple stages. Complete them one at a time. If you get stuck, you can skip to the next question.

Guidelines:

- Don't worry about backend integration.
- You are welcome to Google, but **don't copy paste code.**
- Try to implement these solutions using pure HTML/CSS. Don't use Bootstrap (or similar library).
- You can use jQuery or React.

## Questions

### General Layout

1. Center a red rectangle *horizontally* on a page? How many ways can you do this?
1. Center a text that reads `I am centered` on a page.
1. Center a red rectangle *horizontally and vertically* on a page?
1. Display 8 red boxes of different heights and widths side by side. Make sure they
  have some spacing around them.

### Sticky Header

1. Display a header row at the top of the page.
2. Make header row sticky, that is, it stays visible when you scroll down.
3. Add expandable drop-down menu items to the header.

### Autocomplete Box

How would you make an "autocomplete" input that can filter through given items?

* access the input value
* filter through a list of items
* render these onto the page
* NO refreshing the page! this is a use-case for client-side rendering

### Implement a spreadsheet

1. Display a grid of editable cells that takes up the whole page with no margins
  - Column headers should have letters (A, B, C)
  - Row headers should have numbers (1, 2, 3, 4)
1. Implement insert empty row/column functionality
2. (Bonus) Implement drag-and-drop re-ordering of rows/columns

### Sidebar

How would you make a collapsing sidebar?

1. Sidebar that contains arbitrary items on the left side of the page
1. When collapsed sidebar turns into a button, can be expanded
1. (Bonus) Use media queries to auto-collapse sidebar on mobile
2. (Bonus) Animate collapsing and expanding the sidebar

### Realtime Newsfeed

How do you make a realtime newsfeed

1. Design HTML/CSS for a Facebook like news feed
  - with a profile picture for each item, and the name of the person who posted it
  - A post body containing: an image or text
  - A list of likes
  - A like button?
1. Add ability to post post comments on feed items.
1. Add ability to respond to comments in items. If a comment is a response to a previous comment, it should be indented. So if a comment is a response to a response to a response, it should be indented 3 levels.
1. Add the ability to collapse comment threads i.e. hide all comments that are in response to a particular comment.
1. (Bonus) Display more news feed items when the user scrolls.

## Links and resources

1. http://howtocenterincss.com
