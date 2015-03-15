model.SalesOrder.entityMethods.genSOLines = function() {
    var order = this;
    //this.save( {overrideStamp:true});
    var itemList = ds.Item.query("'Type' === 'Sales'");
    itemList.forEach(function(item) {
        if (!ds.SalesOrderLine.find("'Item.ID'===:1 and 'Order.ID'===:2", item.ID, order.ID)) {
            var SOL = new ds.SalesOrderLine();

			
            SOL.Item = item;
            SOL.Order = order;
            SOL.save();
        }
    });
};
model.SalesOrder.entityMethods.genSOLines.scope = "public";

model.SalesOrder.states = {
    NEW: {
        Label: "New",
        Value: "NEW"
    },
    PRODUCTION_STARTED: {
        Label: "Production Started",
        Value: "PRODUCTION_STARTED"
    }
};

function isStateAllowed(currentState, toState) {
    if (currentState == model.SalesOrder.states.NEW.Value) {

    }
    else if (currentState == model.SalesOrder.states.PRODUCTION_STARTED.Value) {

    }
}

model.SalesOrder.entityMethods.changeState = function(toState) {
    if (isStateAllowed(this.State, toState)) {
        this.State = toState;
        this.save();
    }
};

model.SalesOrder.methods.getNextState = function(currentState) {
    if (isStateAllowed(this.State, toState)) {
        this.State = toState;
        this.save();
    }
};

model.SalesOrder.entityMethods.genPO = function() {
    var x = 0;
     // Add your code here;
};
model.SalesOrder.entityMethods.genPO.scope = "public";

model.SalesOrder.collectionMethods.genPOAll = function() {
    var PO = new ds.ProductionOrder();
	PO.save({overrideStamp:true});
    this.forEach(function(salesOrder) {
        if (!salesOrder.ProductionOrder || !ds.ProductionOrder.find("'ID' === :1 ",salesOrder.ProductionOrder.ID)) {
            salesOrder.ProductionOrder = PO;
            salesOrder.save();
            if (!PO.Time || salesOrder.Time < PO.Time) {
                PO.Time = salesOrder.Time;
            }
            PO.Date = salesOrder.Date;
            PO.save({overrideStamp:true});
            salesOrder.salesOrderLineCollection.forEach(function(salesOrderLine){
            	var POLine = ds.ProductionOrderLine.find("'Item.ID'===:1 and 'Order.ID' === :2",salesOrderLine.Item.ID,PO.ID);
            	if(!POLine){
            		POLine = new ds.ProductionOrderLine();
            		POLine.Order = PO;
            		POLine.Item = salesOrderLine.Item;
            		POLine.Quantity = 0;
            	}
            	POLine.Quantity += salesOrderLine.Quantity;
            	POLine.save({overrideStamp:true});
            });
            
        }
		
    });
    
    SOCollection = this;
    /*this.distinctValues("salesOrderLineCollection.Item", {
        onSuccess: function(event) {
            var item = event.result;
            var POLine = new ds.ProductionOrderLine();
            POLine.Order
            var x = SOCollection.query("'salesOrderLineCollection.Item.ID' === :1",item.ID);
			var y = 0;
        }
    });*/
};
model.SalesOrder.collectionMethods.genPOAll.scope = "public";