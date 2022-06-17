$(document).ready(function() { // This is an event handler
    $("th").addClass("color","green");
    $("tr:odd").css("background-color","red");
    $("tr:even").css("background-color","yellow");
})


// Create a click event handler (not a: on("click" ... ) that is triggered when <p> elements are clicked.
// Within this event handler target <p> elements and using the JQuery css method set the elements color value to red for all <p> elements
$(document).ready(function() {
    $("p").click(function() {
        $("p").css("color","red");
   });
});
// Create a hover event handler that is triggered when <h2> elements are hovered.
// Within this event handler target <h2> elements and using the JQuery css method set the elements background value to lightblue for all <h2> elements
$(document).ready(function() {
    $("h2").hover(function() {
        $("h2").css("background","lightblue");
   });
});
// Create a mouseenter event handler that is triggered by moving over elements with the class card-panel.
// Within this event handler target the <body> element and using the JQuery css method set the elements background-color value to black for the <body> element.
$(document).ready(function() {
   $(".card-panel").mouseenter(function() {
        $("body").css("background-color","black");
   });
});
// Create a mouseleave event handler that is triggered by moving off of elements with the class card-panel.
// Within this event handler target the <body> element and using the jquery css method set the elements background-color value to #e1e2e2 for the <body> element.
$(document).ready(function() {
   $(".card-panel").mouseleave(function() {
        $("body").css("background-color","#e1e2e2");
   });
});