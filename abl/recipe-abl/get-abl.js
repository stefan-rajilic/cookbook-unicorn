const RecipeDao = require("../../dao/recipe-dao");
const path = require("path");

let dao = new RecipeDao(
  path.join(__dirname, "..", "..", "storage", "recipes.json")
);

// console.log(recipeList);

function GetAbl(req, res) {
  const recipe = dao.get(req.params.id);
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(400).json({ error: "Recipe does not exist" });
  }
}

module.exports = GetAbl;
