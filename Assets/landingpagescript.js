var drinkURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
var boredURL = "https://www.boredapi.com/api/activity";

var activityBox = document.getElementById("activity-container");
var drinkBox = document.getElementById("drink-container");
var activityButton = document.getElementById("activity-button");
var drinkButton = document.getElementById("drink-button");
var activitysaveButton = document.getElementById("activity-save");
var drinksaveButton = document.getElementById("drink-save");

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

function updateFavoriteactivity(activity) {

    var activityList = JSON.parse(localStorage.getItem("activityList") || "[]");
    activityList.push(activity);
    localStorage.setItem("activityList", JSON.stringify(activityList));
    }

function updateFavoritedrink(drink) {

    var drinkList = JSON.parse(localStorage.getItem("drinkList") || "[]");
    drinkList.push(drink);
    localStorage.setItem("drinkList", JSON.stringify(drinkList));
    }

function init() {
    grabDrink();
    grabActivity();
}

activityButton.addEventListener("click", function() {
    activityBox.children[1].textContent = "";
    grabActivity();
});

drinkButton.addEventListener("click", function() {
    drinkBox.children[1].textContent = "";
    grabDrink();
});

activitysaveButton.addEventListener("click", function() {
    var activity = activityBox.children[1].textContent;
    updateFavoriteactivity(activity);
  });
  

  drinksaveButton.addEventListener("click", function() {
    var drink = drinkBox.children[1].textContent;
    updateFavoritedrink(drink);
  });

init();


