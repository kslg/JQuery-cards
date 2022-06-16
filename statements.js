/**
 * The set of statements that are executed in the browser console to try out
 * jQuery selectors
 */

// Select all of the anchor elements on the page using the `$` as shorthand
// for the `jQuery` function
$("a");

// The long version of the function
jQuery("a");

// Get all elements that contain a class of `card_image`
$(".card_image");

// Get all elements that contain an ID of `logoNav`
$("#logoNav");

// Get all anchors that are direct children of paragraphs
$("p>a");

// Get all anchor elements that are descendants of paragraphs
$("p a");

// Get all list item elements that are direct children of unordered lists
$("ul>li");

// Get all list item elements that are descendants of unordered lists
$("ul li");

// Get the first anchor element from the DOM
$("a:first");

// Get the last anchor element from the DOM
$("a:last");

// Select all header elements (h1, h2, h3, h4, h5, h6)
$(":header");

// Get all img elements on the page
$("img");

// Get all elements with a class of `card_image`
$(".card_image");

// Get the footer by its ID
$('#my_footer');

// All paragrapgh elements in the `footer`
$("footer p");

// Get all header elements (h1-h6)
$(":header");

// Get first element on the page
$(":first");

// Get the last `div` on the page
$("div:last")

// Get the last `img` on the page
$("img:last");

// Get all elements that have an attribute of `href`
$("[href]")

// change css color of all list elements
$("li").css("color","red");

// underlines all h2 elements
$("h2").css("text-decoration","underline");

// add a 1px border to all lists
$("ul").css("border","solid 1px #ccc");

// change html text for the footer class id
$("#my_footer").html("<h1>I can change the text in the DOM</h1>");

// change text for the footer class id, keep original styles
$("#my_footer").text("I can change the text in the DOM");

// add a new element next to existing.
$("#my_footer").append("<p>This is a new element</p>");

// add a new element at the end
$("#copyright").append("<span>&copy; Copyright 2022</span>");

// change all p elements in a class
$(".card p").text("All changed");

