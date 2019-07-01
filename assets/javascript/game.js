var userWins = 0;
var userLosses = 0;
var userPoints = 0;
var userNum = 0;
var randNum = 0;
var totalClicks = 0;


var pClicks = [];



$(document).ready(function () {

    startingRandNum();

    function startingRandNum() {
        randomNumberHolder = $("#random-number");
        randNum = Math.floor(Math.random() * 120) + 19;
        randomNumberHolder.text(randNum);
        // totalClicks = 0;
        pClicks = [];
    }

   
    function clickNum() {
        $("#winLose").empty();
        userNum = Math.floor(Math.random() * 12) + 1;
        pClicks.push(userNum);
        totalClicks = 0;
        for (var i = 0; i < pClicks.length; i++) {
            totalClicks += pClicks[i];
        }


        totalClicksNumberHolder = $("#total-clicks");
        totalClicksNumberHolder.text(totalClicks);

        userLossesNumberHolder = $("#losses");
        userLossesNumberHolder.text(userLosses);

        userWinsNumberHolder = $("#wins");
        userWinsNumberHolder.text(userWins);

        winLoseHolder = $("#winLose");


        if (totalClicks > randNum) {
            // alert("hang on there buddy")
            userLosses++;
            totalClicksNumberHolder.text("0");
            winLoseHolder.html("YOU DIED<br>YOUR WERE TRYING TO MATCH: " + randNum + "<br>THE TOTAL OF YOUR CLICKS WAS: " + totalClicks + "<br>TOO BAD<br>CLICK A SYMBOL TO START AGAIN");
            startingRandNum();
        }

        else if (totalClicks === randNum) {
 
            userWins++;
            totalClicksNumberHolder.text("0");
            winLoseHolder.html("YOU WON<br>YOUR WERE TRYING TO MATCH: " + randNum + "<br>THE TOTAL OF YOUR CLICKS WAS: " + totalClicks + "<br>GOOD JOB<br>CLICK A SYMBOL TO START AGAIN");
            startingRandNum();

        }
        else
            return (userNum);
    }




    $("#p1-holder , #p2-holder , #p3-holder , #p4-holder").on("click", function () {
        clickNum()
        console.log(userNum);

        console.log("points so far: " + pClicks);

    });

    // $("#p2-holder").on("click", function () {
    //     clickNum()
    //     console.log(userNum);

    //     console.log("points so far: " + pClicks);
    //     console.log(clickNum());
    // });

    // $("#p3-holder").on("click", function () {
    //     clickNum()
    //     console.log(userNum);

    //     console.log("points so far: " + pClicks);
    //     console.log(clickNum());
    // });

    // $("#p4-holder").on("click", function () {
    //     clickNum()
    //     console.log(userNum);

    //     console.log("points so far: " + pClicks);
    //     console.log(clickNum());
    // });






});



