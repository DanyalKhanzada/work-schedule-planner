//global variables

var m = moment();

// show current date 
var addDate = document.getElementById('currentDay');
    addDate.innerHTML = m.format("dddd, MMMM Do");



// Color Coded
function checkTime () {
    var currentTime = m.format("H");
        //console.log(currentTime);
    var toDoTime = parseInt($(this).data("time"));
    
    $(".toDo").each(function() {
        var toDoTime = $(this).data("time");
        //console.log(toDoTime);

        if(currentTime > toDoTime) {
            $(this).removeClass("present");
            $(this).removeClass("future");
            $(this).addClass("past");;
        }

        else if(currentTime == toDoTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }

        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
};

