var userWins = 0;
var userLosses = 0;
var userNum = 0;
var randNum = 0;
var totalClicks = 0;


var pClicks = [];



$(document).ready(() => {

    startingRandNum();

    function startingRandNum() {
        
        randNum = Math.floor(Math.random() * (121 - 19)) + 19;
        $("#random-number").text(randNum);
        pClicks = [];
    }

   
    function clickNum() {
        userNum = Math.floor(Math.random() * (13 - 1)) + 1;
        pClicks.push(userNum);
        totalClicks = 0;
        for (var i = 0; i < pClicks.length; i++) {
            totalClicks += pClicks[i];
        }



        $("#total-clicks").text(totalClicks);

    
        $("#losses").text(userLosses);

       
        $("#wins").text(userWins);

        winLoseHolder = $("#winLose");


        if (totalClicks > randNum) {

            userLosses++;
            $("#total-clicks").text("0");
            winLoseHolder.html("YOU DIED<br>YOUR WERE TRYING TO MATCH: " + randNum + "<br>YOUR NUMBER WAS: " + totalClicks + "<br>TOO BAD<br>CLICK ON A SYMBOL TO TRY AGAIN");
            startingRandNum();
        }

        else if (totalClicks === randNum) {
 
            userWins++;
            $("#total-clicks").text("0");
            winLoseHolder.html("YOU WON<br>YOUR WERE TRYING TO MATCH: " + randNum + "<br>YOUR NUMBER WAS: " + totalClicks + "<br>GOOD JOB<br>CLICK ON A SYMBOL TO TRY AGAIN");
            startingRandNum();

        }
         else(winLoseHolder.text("KEEP GOING"));
    }




    $(".p-holder").on("click", () => {clickNum()});


});



