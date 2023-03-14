var activityList = document.getElementById("activity-list");
var drinkList = document.getElementById("drink-list");

function renderActivities() {
    var activities = JSON.parse(localStorage.getItem("activityList") || "[]");
    for(let i=0; i<activities.length; i++){
     var activityLI = document.createElement("p");
     activityLI.textContent = activities[i];
     activityList.appendChild(activityLI);
    }
}

function renderDrinks() {
    var drinks = JSON.parse(localStorage.getItem("drinkList") || "[]");
    for(let i=0; i<drinks.length; i++){
        var drinkLI = document.createElement("p");
        drinkLI.textContent = drinks[i];
        drinkList.appendChild(drinkLI);
    }
}

renderActivities();
renderDrinks();



