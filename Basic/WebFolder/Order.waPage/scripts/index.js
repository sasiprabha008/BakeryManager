
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var id_btn_po_clear = {};	// @button
	var id_btn_po_search = {};	// @button
	var btn_clear = {};	// @button
	var id_btn_search = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

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
	WAF.addListener("id_btn_po_clear", "click", id_btn_po_clear.click, "WAF");
	WAF.addListener("id_btn_po_search", "click", id_btn_po_search.click, "WAF");
	WAF.addListener("btn_clear", "click", btn_clear.click, "WAF");
	WAF.addListener("id_btn_search", "click", id_btn_search.click, "WAF");
// @endregion
};// @endlock
