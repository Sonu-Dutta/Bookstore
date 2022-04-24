$(function() {
    $("#projects").tabs();
    $("ul").sortable({axis:"x", containment:"#projects"});
    $("ol").sortable({axis:"y", containment:"#projects"});
    $("#btn-ap").button();
   });