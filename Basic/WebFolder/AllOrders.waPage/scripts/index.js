


WAF.onAfterInit = function onAfterInit() {// @lock
	
	function genPO() {

	    var lines = [];
	    //		for(i = 0;i<lines.length;i++){
	    //				
	    //		}
	    sources.salesOrder.toArray("",{onSuccess: function(event)  // asynchronous call
    { 
        var myArray = event.result;
        var display
        for(i = 0;i<myArray.length;i++){
        		
        }
    }});
	}
	
	
	function prepareSOPrint() {
		var SO = sources.salesOrder;
		SO.Shop.load({
    onSuccess: function(event) // only if there is a current entity in the person datasource
    {
        var Shop = event.entity.Name.value;
        
        var SOLine = [];
	SOLine.push([{
	                        text: '#',
	                        style: 'tableHeader'
	                    }, {
	                        text: 'Item',
	                        style: 'tableHeader'
	                    }, {
	                        text: 'Quantity',
	                        style: 'tableHeader'
	                    }]);

	sources.salesOrderLine.getValues("'Item.Name','Quantity'","'Order.ID'===:1",{onSuccess:function(event) {
		var LineNo = 1;
		event.result.forEach(function(line){
			SOLine.push([(LineNo++)+'', line.Item.Name, line.Quantity+'']);
		});
		
		
		
		
		var dd = {
        content: [

        {
            text: 'Order No: ' + SO.OrderNo,
            margin: [0, 0, 0, 0]
        }, 
        {
            text: 'Shop : '+Shop,
            margin: [0, 0, 0, 0]
        }, 
        {
            text: 'Date : '+SO.Date.toLocaleDateString("en-GB"),
            margin: [0, 0, 0, 0]
        },
        {
            text: 'Time :' +SO.Time,
            margin: [0, 0, 0, 0]
        },
        {
            style: 'tableExample',
            table: {
                headerRows: 1,
                widths: [10, '*', 200],
                body: SOLine
            },
            layout: {
                hLineWidth: function(i, node) {
                    return (i <= 1 || i === node.table.body.length) ? 0.5 : 0.5;
                },
                vLineWidth: function(i, node) {
                    return (i === 0 || i === node.table.widths.length) ? 0.5 : 0.5;
                },
                hLineColor: function(i, node) {
                    return (i <= 1 || i === node.table.body.length) ? 'black' : 'gray';
                },
                vLineColor: function(i, node) {
                    return (i === 0 || i === node.table.widths.length) ? 'black' : 'black';
                },
                // paddingLeft: function(i, node) { return 4; },
                // paddingRight: function(i, node) { return 4; },
                // paddingTop: function(i, node) { return 2; },
                // paddingBottom: function(i, node) { return 2; }
            }
        }],
        styles: {
            header: {
                fontSize: 12,
                bold: true,
                margin: [0, 0, 0, 10]
            },
            subheader: {
                fontSize: 12,
                bold: true,
                margin: [0, 10, 0, 5]
            },
            tableExample: {
                margin: [0, 5, 0, 15]
            },
            tableHeader: {
                bold: true,
                fontSize: 11,
                color: 'black'
            }
        },
        defaultStyle: {
        	fontSize: 10
            // alignment: 'justify'
        }

    };
		pdfMake.createPdf(dd).open();
	}},SO.ID);
    }
});
	
	
	
	
    

}

// @region namespaceDeclaration// @startlock
	var button_saveSOLine = {};	// @button
	var genProdOrder_btn = {};	// @button
	var btn_print_so = {};	// @button
	var documentEvent = {};	// @document
	var id_btn_ro_clear = {};	// @button
	var id_btn_ro_search = {};	// @button
	var id_btn_po_clear = {};	// @button
	var id_btn_po_search = {};	// @button
	var btn_clear = {};	// @button
	var id_btn_search = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button_saveSOLine.touchend = function button_saveSOLine_touchend (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

	button_saveSOLine.click = function button_saveSOLine_click (event)// @startlock
	{// @endlock
		button_createSOLine.focus();s
	};// @lock


	
	genProdOrder_btn.click = function genProdOrder_btn_click (event)// @startlock
	{// @endlock
		
		var x = sources.salesOrder;
	};// @lock

	btn_print_so.click = function btn_print_so_click (event)// @startlock
	{// @endlock
		
		prepareSOPrint();
		
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		
	};// @lock

	id_btn_ro_clear.click = function id_btn_ro_clear_click (event)// @startlock
	{// @endlock
		$$('id_qry_ro_date').clear();
		$$('id_qry_ro_shop').setValue('');
		$$('id_qry_ro_time').clear();
		qry_ro_time ='';
		qry_ro_date ='';
		qry_ro_shop ='';
	};// @lock

	id_btn_ro_search.click = function id_btn_ro_search_click (event)// @startlock
	{// @endlock
		//alert('aaa1'+ qry_so_date);
		var query_array = [];
		if(qry_ro_time != ''){
			
			query_array.push('Time === '+qry_ro_time);
		}
		if(qry_ro_date){
			
			query_array.push('Date >= '+qry_ro_date[0].toISOString()+' and Date <= '+qry_ro_date[1].toISOString());
		}
		if(qry_ro_shop){
			
			query_array.push('Shop.ID === '+qry_ro_shop);
		}
		
		var query_str = '';
		for(i = 0;i<query_array.length;i++){
			
			query_str = query_str+(i!=0?'and ':'')+query_array[i];
			
		}
		sources.returnOrder.query(query_str);
	};// @lock

	id_btn_po_clear.click = function id_btn_po_clear_click (event)// @startlock
	{// @endlock
		$$('id_qry_po_date').clear();
		$$('id_qry_po_shop').setValue('');
		$$('id_qry_po_time').clear();
		qry_po_time ='';
		qry_po_date ='';
		qry_po_shop ='';
	};// @lock

	id_btn_po_search.click = function id_btn_po_search_click (event)// @startlock
	{// @endlock
		//alert('aaa1'+ qry_so_date);
		var query_array = [];
		if(qry_po_time != ''){
			
			query_array.push('Time === '+qry_po_time);
		}
		if(qry_po_date){
			
			query_array.push('Date >= '+qry_po_date[0].toISOString()+' and Date <= '+qry_po_date[1].toISOString());
		}
		if(qry_po_shop){
			
			query_array.push('Factory.ID === '+qry_po_shop);
		}
		
		var query_str = '';
		for(i = 0;i<query_array.length;i++){
			
			query_str = query_str+(i!=0?'and ':'')+query_array[i];
			
		}
		sources.productionOrder.query(query_str);
	};// @lock

	btn_clear.click = function btn_clear_click (event)// @startlock
	{// @endlock
		$$('id_qry_so_date').clear();
		$$('id_qry_so_shop').setValue('');
		$$('id_qry_so_time').clear();
		qry_so_time ='';
		qry_so_date ='';
		qry_so_shop ='';
	};// @lock

	id_btn_search.click = function id_btn_search_click (event)// @startlock
	{// @endlock
		//alert('aaa1'+ qry_so_date);
		var query_array = [];
		if(qry_so_time != ''){
			
			query_array.push('Time === '+qry_so_time);
		}
		if(qry_so_date){
			
			query_array.push('Date >= '+qry_so_date[0].toISOString()+' and Date <= '+qry_so_date[1].toISOString());
		}
		if(qry_so_shop){
			
			query_array.push('Shop.ID === '+qry_so_shop);
		}
		
		var query_str = '';
		for(i = 0;i<query_array.length;i++){
			
			query_str = query_str+(i!=0?'and ':'')+query_array[i];
			
		}
		
		sources.salesOrder.query(query_str);
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button_saveSOLine", "touchend", button_saveSOLine.touchend, "WAF");
	WAF.addListener("button_saveSOLine", "click", button_saveSOLine.click, "WAF");
	WAF.addListener("genProdOrder_btn", "click", genProdOrder_btn.click, "WAF");
	WAF.addListener("btn_print_so", "click", btn_print_so.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("id_btn_ro_clear", "click", id_btn_ro_clear.click, "WAF");
	WAF.addListener("id_btn_ro_search", "click", id_btn_ro_search.click, "WAF");
	WAF.addListener("id_btn_po_clear", "click", id_btn_po_clear.click, "WAF");
	WAF.addListener("id_btn_po_search", "click", id_btn_po_search.click, "WAF");
	WAF.addListener("btn_clear", "click", btn_clear.click, "WAF");
	WAF.addListener("id_btn_search", "click", id_btn_search.click, "WAF");
// @endregion
};// @endlock
