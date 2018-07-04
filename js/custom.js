const input = document.getElementById('search-input');
const key= 'ac6ac1749e26ae7659d9589b40e59de4';
const result = document.querySelector('.result');

document.getElementById('search').addEventListener('click', getValue);

function getValue(){

    const inputValue = input.value;
    fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${key}&q=${inputValue}`)
    .then(res => res.json())
    .then(data => {
        let output = '';
        const recipes = data.recipes;
        recipes.map(recipe =>{
            output += `<div class="main">
                    <h2>${recipe.title}</h2>
                    <img src="${recipe.image_url}">
            </div>
            <div class="details">
                <h4>Publisher:${recipe.publisher} </h4>
                <a class="btn-class" href="${recipe.source_url}">Source</a>
            </div>`     
        })
        result.innerHTML = output;
    })
}
