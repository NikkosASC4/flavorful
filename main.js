let submitButton = document.getElementById("submit");
let searchData;

function appendRecipes(data){
    console.log(data);
    document.getElementById("recipeContainer").innerHTML="";
    document.getElementById("recipeContainer").style.display="flex";
    for(i = 0; i < 5 ; i++){
        let div = document.createElement('div');
        div.setAttribute("id", "Div"+i);
        div.className = 'tile';

        let recipeName = document.createElement('h2');
        recipeName.innerHTML=data["hits"][i]["recipe"]["label"];
        recipeName.href = data["hits"][i]["recipe"]["url"];

        let foodImg = document.createElement('img');
        foodImg.src=data["hits"][i]["recipe"]["image"];
 
        let cal = document.createElement('p');
        cal.setAttribute("id","desc");
        cal.innerHTML = "Calories: " + parseInt(data["hits"][i]["recipe"]["calories"]);

        let source = document.createElement('a');
        source.className = "foodLink"
        let linkText = document.createTextNode("Find this recipe at: " + data["hits"][i]["recipe"]["source"] + "!");
        source.appendChild(linkText);
        source.title = data["hits"][i]["recipe"]["source"];
        source.href = data["hits"][i]["recipe"]["url"];
        
        let yield = document.createElement('p');
        yield.innerHTML = "Servings: " + parseInt(data["hits"][i]["recipe"]["yield"]);
        yield.setAttribute("id","desc");



        document.getElementById("recipeContainer").appendChild(div);
        div.appendChild(recipeName);
        div.appendChild(foodImg);
        div.appendChild(source);
        div.appendChild(cal);
        div.appendChild(yield);
    }

}
let jsondata;
function searchRecipes(){
    let api = "https://api.edamam.com/search?q="
    let api_id = "3b568615"
    let api_key = "af32c77be4ae423325e624d6c48dc7f6"
    let ingredient_input = document.getElementById("srchIng").value;
    let url = api + ingredient_input + "&app_id=" + api_id + "&app_key=" + api_key+"&to=5";
    fetch(url)
    .then(response => response.json())
    .then(data => appendRecipes(data))

}
submitButton.onclick = function() {searchRecipes();return false};

