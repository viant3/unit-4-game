var userWins = 0;
var userLosses = 0;
var userPoints = 0;
var userNum = 0;


var pClicks = [];



$(document).ready(function () {

    randomNumberHolder = $("#random-number");
    var randNum = Math.floor(Math.random() * 120) + 19;
    randomNumberHolder.text(randNum);

// change onlcick event to jQuery click event
    function clickNum() {
        userNum = Math.floor(Math.random() * 12) + 1;
        pClicks.push(userNum);
        var totalClicks = 0;
        for (var i = 0; i < pClicks.length; i++) {
            totalClicks += pClicks[i];
        }

        totalClicksNumberHolder = $("#total-clicks");    
        totalClicksNumberHolder.text(totalClicks);

        userLossesNumberHolder = $("#losses");
        userLossesNumberHolder.text(userLosses);

        if (totalClicks > randNum) {
            // alert("hang on there buddy")
            pClicks = [];
            userLosses ++;
            totalClicks = 0;
            
        }
        else
            return (userNum);
    }

   


    $("#p1-holder").on("click", function () {
        clickNum()
        console.log(userNum);

        console.log("points so far: " + pClicks);

    });

    $("#p2-holder").on("click", function () {
        clickNum()
        console.log(clickNum());
    });

    $("#p3-holder").on("click", function () {
        clickNum()
        console.log(clickNum());
    });

    $("#p4-holder").on("click", function () {
        clickNum()
        console.log(clickNum());
    });






});



