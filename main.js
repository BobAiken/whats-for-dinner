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
var radioButtons = document.querySelectorAll(".radioStar")
var addARecipe = document.querySelector("#Add_a_recipe")
var recipeForm = document.querySelector("#form")
var addNewButton = document.querySelector("#addNew")

var square2 = document.querySelector("#square2")
var cookPot = document.querySelector("#cookPot")

var recipeTypeInput = document.querySelector("#recipeTypeInput")
var recipeNameInput = document.querySelector("#recipeNameInput")
//eventListeners

letsCookButton.addEventListener('click',displayMeal)
addARecipe.addEventListener('click',displayForm)
addNewButton.addEventListener('click',addNewRecipe)

for(var i = 0;i<radioButtons.length;i++){
    radioButtons[i].addEventListener('click',showLetsCookButton)
}


//functions

function displayMeal(){
    if (sideRadioButton.checked === true){
        square2.innerHTML = ""
        square2.innerHTML += `
        <h2 class="italicize">You should make:</h2>
        <h1 class="foodRecommend">${sides[getRandomIndex(sides)]}!</h1>
        <button id="clear">CLEAR</button>
        `
        var clearButton = document.querySelector("#clear")
        clearButton.addEventListener('click',clearMeal)
    }
    if (mainDishRadioButton.checked === true){
        square2.innerHTML = ""
        square2.innerHTML += `
        <h2 class="italicize">You should make:</h2>
        <h1 class="foodRecommend">${mains[getRandomIndex(mains)]}!</h1>
        <button id="clear">CLEAR</button>
        `
        var clearButton = document.querySelector("#clear")
        clearButton.addEventListener('click',clearMeal)
    }
    if (dessertRadioButton.checked === true){
        square2.innerHTML = ""
        square2.innerHTML += `
        <h2 class="italicize">You should make:</h2>
        <h1 class="foodRecommend">${desserts[getRandomIndex(desserts)]}!</h1>
        <button id="clear">CLEAR</button>
        `
        var clearButton = document.querySelector("#clear")
        clearButton.addEventListener('click',clearMeal)
    }
    if (entireMealRadioButton.checked === true){
        square2.innerHTML = ""
        square2.innerHTML += `
        <h2 class="italicize entireMealHeader">You should make:</h2>
        <h1 class="entireMeal">${mains[getRandomIndex(mains)]} with a side of ${sides[getRandomIndex(sides)]} and ${desserts[getRandomIndex(desserts)]} for dessert!</h1>
        <button id="clear">CLEAR</button>
        `
        var clearButton = document.querySelector("#clear")
        clearButton.addEventListener('click',clearMeal)
    }
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function clearMeal(){
    square2.innerHTML = ""
    square2.innerHTML += `
        <img id="cookPot" src="./assets/cookpot.svg" alt="cookpot">
        `
}

function showLetsCookButton(){
    letsCookButton.classList.remove("hidden")
}

function displayForm(){
    recipeForm.classList.toggle("hidden")
}

function addNewRecipe(){
    if (recipeTypeInput.value.toUpperCase() == "side".toUpperCase()){
        sides.push(recipeNameInput.value)
        square2.innerHTML = ""
        square2.innerHTML += `
        <h2 class="italicize">You should make:</h2>
        <h1 class="foodRecommend">${recipeNameInput.value}!</h1>
        <button id="clear">CLEAR</button>
        `
        var clearButton = document.querySelector("#clear")
        clearButton.addEventListener('click',clearMeal)
    } else if (recipeTypeInput.value.toUpperCase() == "main dish".toUpperCase()){
        mains.push(recipeNameInput.value)
        square2.innerHTML = ""
        square2.innerHTML += `
        <h2 class="italicize">You should make:</h2>
        <h1 class="foodRecommend">${recipeNameInput.value}!</h1>
        <button id="clear">CLEAR</button>
        `
        var clearButton = document.querySelector("#clear")
        clearButton.addEventListener('click',clearMeal)
    } else if (recipeTypeInput.value.toUpperCase() == "dessert".toUpperCase()){
        desserts.push(recipeNameInput.value)
        square2.innerHTML = ""
        square2.innerHTML += `
        <h2 class="italicize">You should make:</h2>
        <h1 class="foodRecommend">${recipeNameInput.value}!</h1>
        <button id="clear">CLEAR</button>
        `
        var clearButton = document.querySelector("#clear")
        clearButton.addEventListener('click',clearMeal)
    } else {
        square2.innerHTML = ""
        square2.innerHTML += `
        <h2 class="italicize">ERROR</h2>
        <h1 class="foodRecommend">Please input a valid recipe type!</h1>
        <button id="clear">CLEAR</button>
        `
        var clearButton = document.querySelector("#clear")
        clearButton.addEventListener('click',clearMeal)
    }
    recipeTypeInput.value = ""
    recipeNameInput.value = ""

}