model.ProductionOrderLine.events.save = function(event) {
    /*if (this.Item && this.Item.Recipe) {
        var mixLine;
		
        mixLine = this.Order.mixingOrderLineCollection.find("'Recipe.ID' === :1", this.Item.Recipe.ID);
        if (!mixLine) {
            mixLine = new ds.MixingOrderLine();
            mixLine.Order = this.Order;
            mixLine.Recipe = this.Item.Recipe;
            

        }
        //mixLine.Quantity -= event.dataSource.getAttribute("Quantity").getOldValue();
        //mixLine.Quantity = this.Order.productionOrderLineCollection.query("Item.Recipe == :1", this.Item.Recipe).sum("Quantity");
        mixLine.Quantity = this.Order.productionOrderLineCollection.sum("Quantity");
        mixLine.save();
        this.MixingOrderLine = mixLine;
    }*/
};



model.ProductionOrderLine.Quantity.events.set = function(event) {
    if (this.Item && this.Item.Recipe) {
        mixLine = this.Order.mixingOrderLineCollection.find("'Recipe.ID' === :1", this.Item.Recipe.ID);
        mixLine.Quantity = this.Order.productionOrderLineCollection.sum("Quantity");
        mixLine.save();
    }
};





model.ProductionOrderLine.Item.events.set = function(event) {
	if (!this.MixingOrderLine && this.Item && this.Item.Recipe) {
        var mixLine;
		
        mixLine = this.Order.mixingOrderLineCollection.find("'Recipe.ID' === :1", this.Item.Recipe.ID);
        if (!mixLine) {
            mixLine = new ds.MixingOrderLine();
            mixLine.Order = this.Order;
            mixLine.Recipe = this.Item.Recipe;
            

        }
        //mixLine.Quantity -= event.dataSource.getAttribute("Quantity").getOldValue();
        //mixLine.Quantity = this.Order.productionOrderLineCollection.query("Item.Recipe == :1", this.Item.Recipe).sum("Quantity");
        mixLine.Quantity = this.Order.productionOrderLineCollection.sum("Quantity");
        mixLine.save();
        this.MixingOrderLine = mixLine;
    }
};
