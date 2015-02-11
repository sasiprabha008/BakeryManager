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

function calculateQuantity(orderLine){
	var q = orderLine.Order.productionOrderLineCollection.query("'Item.Recipe.ID' === :1 and 'ID' != :2", orderLine.Item.Recipe.ID, orderLine.ID).sum("Quantity");
	return (q?q:0)+orderLine.Quantity;
}

model.ProductionOrderLine.Quantity.events.set = function(event) {
    if (this.Item && this.Item.Recipe) {
        mixLine = this.Order.mixingOrderLineCollection.find("'Recipe.ID' === :1", this.Item.Recipe.ID);
        
        mixLine.Quantity = calculateQuantity(this);
        mixLine.save();
    }
};






model.ProductionOrderLine.Item.events.validate = function(event) {
	if (this.MixingOrderLine){
		return {error: 5, errorMessage: 'Item can not be changed'};	
	}
};


model.ProductionOrderLine.Item.events.save = function(event) {
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
        mixLine.Quantity = calculateQuantity(this);
        mixLine.save();
        this.MixingOrderLine = mixLine;
        //this.save();
    }
};
