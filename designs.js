//THIS IS TH JAVASCRIPT FILE FOR THE PIXEL ART MAKER PROJECT
// When size is submitted by the user, call makeGrid()
var height, width, color, reset;
function makeGrid() {
    // Reset the Grid
    $("#pixel-canvas").html("");
    // Get height and width
    height = $("#input-height").val();
    width = $("#input-width").val();
    // CHeck Dimension of the Grid
    if (height > 50 || width > 50 || height < 1 || width < 1) {
        // Creat error if height or width is greater than 50 or less than 1
        if (!error.classList.contains("error")) {
            error.classList.toggle("error");
            //display the error message to notify the user about the error
            error.innerText = "the dimension has to be smaller than 50 and bigger than 0";
            backUp();
        }
        //Remove error if it was present
    } else {
        error.innerText = "";
        $("div").removeClass("error");
        for (let x = 0; x < height; x++) {
            // Add Grid rows
            $('#pixel-canvas').append('<tr></tr>');
        }
        // Add coloum for each row
        for (let y = 0; y < width; y++) {
            $('#pixel-canvas tr').each(function () {
                $(this).append('<td></td>');
            });
        }
    }
}
color = $('#color-picker');
// Listen for when a cell is cliked
$(document).on("mousedown", "tr td", function () {
    var colorValue = color.val();
    // set Background color of cell to color input value 
    $(this).css('background-color', colorValue);
    // set the background color of the cell color input value when the mouse is move around the cells.
    $('tr td').bind("mousemove", function () {
        var colorValue = color.val();
        $(this).css('background-color', colorValue);
        //removes the movemove event when the mouse is released
    }).mouseup(function() {
        $('td').unbind('mousemove');
    });
    //sets the background color to white when a cell is double clicked upon
    $('tr td').on('dblclick',function () {
        $(this).css('background-color', "#FFFFFF")
    })
});
// function to reset the canvas when the reset button is clicked.
 reset = $("#pixel-canvas").html();
function backUp() {
    $("#pixel-canvas").html(reset);
};
