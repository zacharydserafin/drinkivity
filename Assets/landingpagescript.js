var drinkURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
var boredURL = "https://www.boredapi.com/api/activity";

var activityBox = document.getElementById("activity-container");
var drinkBox = document.getElementById("drink-container");

function grabDrink() {
    fetch (drinkURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var randomDrink = data.drinks[0].strDrink;
            console.log(randomDrink);
            renderDrink(randomDrink);
        });

    function renderDrink(randomDrink) {
        var drinkText = document.createElement("p");
        drinkText.textContent = randomDrink;
        drinkBox.insertBefore(drinkText, drinkBox.children[1]);
    }
}

function grabActivity() {
    fetch (boredURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var randomAct = data.activity;
            console.log(randomAct);
            renderActivity(randomAct);
        });

    function renderActivity(randomAct) {
        var activityText = document.createElement("p");
        activityText.textContent = randomAct;
        activityBox.insertBefore(activityText, activityBox.children[1]);
    }
}

grabDrink();
grabActivity();

