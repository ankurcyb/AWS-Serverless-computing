window.onload = function() {
    fetch('https://4o422zw4uh.execute-api.us-east-2.amazonaws.com/prod/recipes')
        .then(response => response.json())
        .then(data => {
            const recipeList = document.getElementById('recipeList');
            const recipes = JSON.parse(data.body);
            recipes.forEach(recipe => {
                const recipeItem = document.createElement('div');
                recipeItem.textContent = `${recipe.name}: ${recipe.instructions}`;
                recipeList.appendChild(recipeItem);
            });
        });
};
