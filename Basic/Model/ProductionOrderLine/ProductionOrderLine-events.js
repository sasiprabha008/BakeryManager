

model.ProductionOrderLine.events.save = function(event) {
	var mixLine;
	mixLine = this.Order.mixingOrderLineCollection.find("Item == :1",this.Item);
	if(!mixLine){
		mixLine = new ds.MixingOrderLine();
		mixLine.Recipe = ds.Recipe.find("Item == :1",this.Item);
		
	}
	
	
	
};


model.ProductionOrderLine.Quantity.events.set = function(event) {
	var x = this.Order.MixingOrderLine.query();
	ds.MixingOrderLine.query("Item = :1",this.Item);
};
