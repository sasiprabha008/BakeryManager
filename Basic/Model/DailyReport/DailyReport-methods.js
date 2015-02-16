



model.DailyReport.methods.update = function(order) {
	var report;
	report = ds.DailyReport.query("'Shop' === :1 and 'Date' === :2",order.Shop,order.Date);
	if(!report){
		
		report = new ds.DailyReport();
		report.Shop = order.Shop;
		report.Date = order.Date;
		report.Sent = 0;
		report.Scrap = 0;
		report.Remain = 0;
		report.save();
	}
	
	if(order.getName == ds.SalesOrder.getName){
		report.Sent += order.Quantity;
		
	}else if(order.getName == ds.ReturnOrder.getName){
		report.Scrap += order.Scrap;
		report.Remain += order.Keep;
		
	}
	
	
};
