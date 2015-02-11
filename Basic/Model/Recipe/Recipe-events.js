

model.Recipe.Weight.onGet = function() {
	return this.recipeLineCollection.sum("Weight");
};
