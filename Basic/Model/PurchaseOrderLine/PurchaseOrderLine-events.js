

model.PurchaseOrderLine.Amount.onGet = function() {
	return this.Quantity*this.Price;
};
