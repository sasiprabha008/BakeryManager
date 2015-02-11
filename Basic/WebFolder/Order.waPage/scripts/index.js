
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button7 = {};	// @button
	var productionOrderLineCollectionEvent = {};	// @dataSource
// @endregion// @endlock

// eventHandlers// @lock

	button7.click = function button7_click (event)// @startlock
	{// @endlock
		ar onSuccessFunction = function (event)
         {
            alert('success');
            alert(event.result);
            alert(event.result.error);
            alert(event.result.errorMessage);
            source.project.all();
        }
        var onErrorFunction = function (event)
        {
            alert('Failed to call the method');
            alert(event.result.errorMessage);  // I don't know if this would tell you why
        }
        var n = appName;
        source.productionOrder.callMethod({method: "generateMixingOrder", onSuccess: onSuccessFunction, onError: onErrorFunction }, n);
	};// @lock

	productionOrderLineCollectionEvent.onElementSaved = function productionOrderLineCollectionEvent_onElementSaved (event)// @startlock
	{// @endlock
		sources.mixingOrderLineCollection.clientRefresh();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button7", "click", button7.click, "WAF");
	WAF.addListener("productionOrderLineCollection", "onElementSaved", productionOrderLineCollectionEvent.onElementSaved, "WAF");
// @endregion
};// @endlock
