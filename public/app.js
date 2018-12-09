$(function() {
    
    displayPage();
    setupEventHandlers();
})


function displayPage() {
    renderTemplate();
    setupEventHandlers();

}

function renderTemplate(data) {
    var source = $("#page-template").text();
    var template = Handlebars.compile(source);
    var html = template(data);
    $("#app").html(html);
}

function setupEventHandlers() {
    $("#scrape").on("click", function(event) {
        event.preventDefault();
        
        $.get("/scrape").then(
            function(articles) {
              renderTemplate({articles: articles});  
            }
        )
    })










}