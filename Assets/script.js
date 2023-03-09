var drinkURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
var boredURL = "https://www.boredapi.com/api/activity";

fetch (drinkURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data.drinks[0].strDrink);
    });

fetch (boredURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data.activity);
    });