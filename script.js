$( document ).ready(function() {
    //Bitcoin

    $.ajax(
    	{
    		url:'https://3zw9c5mdo8.execute-api.eu-west-2.amazonaws.com/default/getbitcoinrate', 
    		data: {bitcoinAmount: 5,currencyList:"USD,EUR"}, 
    		headers: {
    			'Access-Control-Allow-Origin': "*"
    		},
    		success: function(data, textStatus, xhr) {
		    	/*optional stuff to do after success */
		    	$("#bitcoin").html(data);
		    }
		}
	);
});