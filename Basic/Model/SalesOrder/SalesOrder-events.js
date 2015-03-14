model.SalesOrder.events.init = function(event) {
    
    
};





model.SalesOrder.events.save = function(event) {
    if (!this.Date) {
        this.Date = new Date();
    }
    if (!this.OrderNo) {
        this.OrderNo = 'SO_' + this.ID;
    }
    if (!this.State) {
        this.State = model.SalesOrder.states.NEW.Value;
    }
    //this.save();
};


model.SalesOrder.State.events.set = function(event) {

};


model.SalesOrder.State.events.validate = function(event) {
    //var c = ds.SalesOrder.State.getOldValue();
    //this.changeState(this.State);
};
model.SalesOrder.State.events.save = function(event) {

};