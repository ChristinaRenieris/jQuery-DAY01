/*
 * My jQuery selectors
 *
 * Apply a style such as a yellow background to the following elements.
 * Test your selectors one at a time.
 */
$(document).ready(function() {
    // all elements
    $("*").css("background-color", "lightgray");

    // all p eleme
    $("p").css("background-color", "blue");

    // the p element with an ID of "intro"
    $(" p#intro").css("background-color", "red");

    // all elements with a class of "note"
    $(".note").css("background-color", "orange");

    // all DIV elements with a class of note
    $("div.note").css("background-color", "lightblue");

    // all p elements in the article element
    $(" article > p").css("background-color", "purple");

    // the last element in any section which is a p tag
    $("p:last-of-type").css("background-color", "black");

    // the first paragraph on the page
    $("p:first").css("background-color", "red");

    // all p elements which have a link
    $("p:contains('href')").css("background-color", "orange");

    // the second li within nested ul element
    $("ul li:eq(2)").css("background-color", "blue");

    // every second and third p element
    $(" p:nth-child(2)").css("background-color", "white");
    $(" p:nth-child(3)").css("background-color", "white");
});