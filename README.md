# JQuery and More

<img width="500px" src="https://user-images.githubusercontent.com/11337548/142347860-3ff9d807-8282-49d3-b99e-9f384480d541.png" />

The goal of this assignment is to practice using external libraries. 

We'll start with a library that once was the most popular JS library there was, JQuery. To this day, JQuery is a preferred tool of many to build small web applications. Larger applications scale more gracefully with React which we'll get into more later (mostly in Term 2).

One of the major challenges with this assignment will be reading programming documentation. In order to discover how an external library works, we'll need to read through that libraries documentation or browse StackOverflow for answers. For better or for worse, this is a major part of building software.

## JQuery

For any questions check out the [JQuery documentation](https://api.jquery.com/), [StackOverflow](https://stackoverflow.com/questions/tagged/jquery?tab=Votes), or just Google it.

All changes in this assignment should be done using JQuery. Don't use `document`, `.innerText`, or `.innerHTML` in this assignment.

Begin by creating an `index.html` and a `main.js` file. Add a script tag to your HTML file that imports JQuery from a CDN (Content Delivery Network).

In your `main.js`...

* Start out by creating a `<div>` with JQuery with the text `Click Here`
* In the HTML, add an `<input>` element in the body and give it an id
* Add the `<div>` to the body of your document using jquery
* Add a `<ul>` to the body of your document using jquery
* Add a click listener on the `<div>` that makes it so that the text in the input box from earlier is added to the `<ul>`

## Extras

Experiment with more external libraries. Here are a few of the most popular ones:
* [Bootstrap](https://getbootstrap.com/) - gives you a nice CSS theme and layout helpers
* [Moment.js](https://momentjs.com/docs/#/use-it/) - used for working with and formatting dates
* [Lodash.js](https://lodash.com/) - every helper function you could possibly dream of
