// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(document).ready(function() {

    function makeGrid() {
        const height = $("#inputHeight").val();
        const width = $("#inputWidth").val();
        const table = $("#pixelCanvas");

        for (let i = 0; i < height; i++) {
            table.append("<tr></tr>");
            for (let j = 0; j < width; j++) {
                table.children().last().append("<td></td>");
            }
        }
    };

    $("#submit").click(function(event) {
        event.preventDefault();
        makeGrid();

        $("#reset").click(function() {
            $("#pixelCanvas").children().remove();
        });

        $("td").on("click", function() {
            const pickColor = $("#colorPicker").val();
            $(this).css("background-color",pickColor);
        });
    });
});