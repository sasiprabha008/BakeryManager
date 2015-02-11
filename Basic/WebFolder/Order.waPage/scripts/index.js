
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var btn_clear = {};	// @button
	var id_btn_search = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	btn_clear.click = function btn_clear_click (event)// @startlock
	{// @endlock
		
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
		
		var query_str = '';
		for(i = 0;i<query_array.length;i++){
			
			query_str = query_str+(i!=0?'and ':'')+query_array[i];
			
		}
		sources.salesOrder.query(query_str);
	};// @lock


// @region eventManager// @startlock
	WAF.addListener("btn_clear", "click", btn_clear.click, "WAF");
	WAF.addListener("id_btn_search", "click", id_btn_search.click, "WAF");
// @endregion
};// @endlock
