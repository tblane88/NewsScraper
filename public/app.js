$(function() {
    
    displayPage();
})


function displayPage() {
    renderTemplate();
}

function renderTemplate(data) {
    var source = $("#page-template").text();
    var template = Handlebars.compile(source);
    var html = template(data);
    $("#app").html(html);
}