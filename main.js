//food arrays

var sides = [
    "Miso Glazed Carrots",
    "Coleslaw",
    "Garden Salad",
    "Crispy Potatoes",
    "Sweet Potato Tots",
    "Coconut Rice",
    "Caeser Salad",
    "Shrimp Summer Rolls",
    "Garlic Butter Mushrooms",
    "Hush Puppies"
]

var mains = [
    "Spaghetti and Meatballs",
    "Pineapple Chicken",
    "Shakshuka",
    "Thai Yellow Curry",
    "Bibimbap",
    "Chicken Parmesean",
    "Butternut Squash Soup",
    "BBQ Chicken Burgers",
    "Ramen",
    "Empanadas",
    "Chicken Fried Rice",
    "Sheet Pan Fajitas",
    "Margarita Pizza"
]

var desserts = [
    "Apple Pie",
    "Lemon Meringue Pie",
    "Black Forest Cake",
    "Banana Bread",
    "Peach Cobbler",
    "Cheesecake",
    "Funfetti Cake",
    "Baklava",
    "Flan",
    "Macarons",
    "Macaroons",
    "Chocolate Cupcakes",
    "Pavlova",
    "Pumpkin Pie",
    "Key Lime Pie",
    "Tart Tatin",
    "Croissants",
    "Eclairs"
]

//querySelectors

var sideRadioButton = document.querySelector("#side")
var mainDishRadioButton = document.querySelector("#main_dish")
var dessertRadioButton = document.querySelector("#dessert")
var entireMealRadioButton = document.querySelector("#entire_meal")


var letsCookButton = document.querySelector("#letsCook")

var square2 = document.querySelector("#square2")
var cookPot = document.querySelector("#cookPot")

//eventListeners

letsCookButton.addEventListener('click',displayMeal)




//functions

function displayMeal(){
    if (sideRadioButton.checked === true){
        square2.innerHTML = ""
        square2.innerHTML += `
        <h2 class="italicize">You should make:</h2>
        <h1 class="foodRecommend">${sides[getRandomIndex(sides)]}!</h1>
        `
    }
    if (mainDishRadioButton.checked === true){
        square2.innerHTML = ""
        square2.innerHTML += `
        <h2 class="italicize">You should make:</h2>
        <h1 class="foodRecommend">${mains[getRandomIndex(mains)]}!</h1>
        `
    }if (dessertRadioButton.checked === true){
        square2.innerHTML = ""
        square2.innerHTML += `
        <h2 class="italicize">You should make:</h2>
        <h1 class="foodRecommend">${desserts[getRandomIndex(desserts)]}!</h1>
        `
    }
    if (entireMealRadioButton.checked === true){
        square2.innerHTML = ""
        square2.innerHTML += `
        <h2 class="italicize entireMealHeader">You should make:</h2>
        <h1 class="entireMeal">${mains[getRandomIndex(mains)]} with a side of ${sides[getRandomIndex(sides)]} and ${desserts[getRandomIndex(desserts)]} for dessert!</h1>
        `
    }
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

