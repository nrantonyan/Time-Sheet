$(document).ready(function () {
    //create function
    $("#subButt").on("click", function () {
        //generate new row
        var tableRow = $("<tr>");
        tableRow.text ("pizza");
        $("#rows").append(tableRow);
    })
});