

model.ProductionOrder.methods.generateFromPlannedSalesOrders = function() {
	
	var salesOrders = ds.SalesOrder.query("State == 'planned'");
	var poList = [];
	
	salesOrders.distinctValues("Shop.Factory").forEach(function(factory){
		poList.push(new ds.ProductionOrder({Factory:factory}));
		ds.SalesOrderLine.query("");
	});
	salesOrders.
	 
};
