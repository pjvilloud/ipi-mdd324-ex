$( document ).ready(function() {
    //Bitcoin


    $.ajax(
    	{
            method: "POST",
            contentType: 'application/json',
            crossDomain: true,
            dataType: 'json',
    		url:'https://3zw9c5mdo8.execute-api.eu-west-2.amazonaws.com/default/getBitcoinRate', 
    		data: JSON.stringify({
                "bitcoinAmount": 5,
                "currencyList":"USD,EUR"
            }), 
    		headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
    		},
    		success: function(data, textStatus, xhr) {
    	    	/*optional stuff to do after success */
                console.log(JSON.stringify(data));
                var str = "<h2>" + data.bitcoinAmount + " <i class='fa fa-btc'></i> correspond à </h2><ul class='list-group'>";

                $.each( data.currenciesEquivalent, function( cur, amount ) {
                  str += "<li class='list-group-item'>"+ amount + " <i class='fa fa-" + cur.toLowerCase() +"'></i></li>";
                });

                str += "</ul>";

    	    	$("#bitcoin").html(str);
    	    }
		}
	);
});