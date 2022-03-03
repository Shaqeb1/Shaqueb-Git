const recipeContainer = document.querySelector('.recipe');
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
// https://forkify-api.herokuapp.com/v2
// API KEY - 7457ba1e-9e2c-46c7-af7c-292206f4c8a5
// https://forkify-api.herokuapp.com/api/v2/recipes/:id
const showRecipe = async function() {
    try {
        const res = await fetch('');
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        let { recipe  } = data.data;
        recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients
        };
    } catch (err) {
        alert(err);
    }
};

//# sourceMappingURL=index.62406edb.js.map
