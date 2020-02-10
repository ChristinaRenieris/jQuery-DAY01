$('#msg').attr('value', 'Search for...');

$("form").submit(function(e) {

    e.preventDefault();

    $("form").hide();

    $("article").append("<div></div><div></div><div></div><div></div><div></div>");
    $("div").addClass("box");

    $("a").attr("href", "http://www.codefactory.wien");

});