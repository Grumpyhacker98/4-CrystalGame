var wins = 0
var losses = 0
// a nest becouse i can
var gems = [
    ruby = 0,
    emerald = 0,
    sapphire = 0,
    quartz = 0,
]
var playerValue = 0
var goalValue = 0

// restart function
function restart() {
    // make new goalvalue between 120 and 19
    goalValue = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    // make 4 new hidden gem values
    gems.ruby = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    gems.emerald = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    gems.sapphire = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    gems.quartz = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    // reset player score
    playerValue = 0;
    // this console log gives all relevant values for easy victories and testing
    console.log(playerValue+" "+goalValue+" "+gems.ruby+" "+gems.emerald+" "+gems.quartz+" "+gems.sapphire)

    refreshHTML()
}

// victory defeat logic
function gameLogic(){
    if(playerValue === goalValue){
        wins++;
        alert("You Won!")
        restart();
    }
    if(playerValue > goalValue){
        losses++;
        alert("You Lost!")
        restart();
    }
}

// i like making refreshhtml a function so i can just slap it on the end of everything important
// needed on game restart and on buttonpress
function refreshHTML(){
    $("#wins").text(wins)
    $("#losses").text(losses)
    $("#playerValue").text(playerValue)
    $("#goalValue").text(goalValue)
}


// on page load function
window.onload = function() {
    $("#ruby").on("click", function(){
        playerValue = playerValue + gems.ruby;
        gameLogic();
    });
    $("#emerald").on("click", function(){
        playerValue = playerValue + gems.emerald;
        gameLogic();
    });
    $("#sapphire").on("click", function(){
        playerValue = playerValue + gems.sapphire;
        gameLogic();
    });
    $("#quartz").on("click", function(){
        playerValue = playerValue + gems.quartz;
        gameLogic();
    });
};

// starts game for the first time
// it wont push the empty numbers unto the page until you are on the second game
restart();
refreshHTML();
$("#wins").text(wins)
$("#losses").text(losses)
$("#playerValue").text(playerValue)
$("#goalValue").text(goalValue)
