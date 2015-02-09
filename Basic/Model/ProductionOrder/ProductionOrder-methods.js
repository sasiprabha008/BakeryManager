

model.ProductionOrder.methods.generateFromPlannedSalesOrders = function() {
	
	var salesOrders = ds.SalesOrder.query("State == 'planned'");
	var poList = [];
	
	salesOrders.distinctValues("Shop.Factory").forEach(function(factory){
		var po = new ds.ProductionOrder({Factory:factory});
		poList.push(po);
		var soLines = ds.SalesOrderLine.query("Order.Shop.Factory == :1 and Order.State == 'planned'",factory);
		
		soLines.distinctValues("Item").forEach(function(item){
			soLines.query("Item == :1",item).sum("Quantity");
		});
		
	});
	
	 
};
