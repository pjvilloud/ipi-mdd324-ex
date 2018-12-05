$( document ).ready(function() {
    moment.locale("fr");

    //Bitcoin
    getBitcoinRate();
    $("#getBitcoinRate").click(function(event) {
        getBitcoinRate();
    });
    getNews();
    $("#getNews").click(function(event) {
        getNews();
    });
    getQuote();
    $("#getQuote").click(function(event) {
        getQuote();
    });
    getEphemeride();
});

function getBitcoinRate(){
    $.ajax(
        {
            method: "POST",
            contentType: 'application/json',
            crossDomain: true,
            dataType: 'json',
            url:'https://3zw9c5mdo8.execute-api.eu-west-2.amazonaws.com/default/getBitcoinRate', 
            data: JSON.stringify({
                "bitcoinAmount": parseFloat($("#btcAmount").val()),
                "currencyList":$("#currenciesSelect").val().toString()
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
}

function getNews(){
  $.ajax(
    {
        method: "GET",
        contentType: 'application/json',
        crossDomain: true,
        dataType: 'json',
        url:'https://3zw9c5mdo8.execute-api.eu-west-2.amazonaws.com/default/getNews', 
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).done(function(data) {
        console.log(JSON.stringify(data));
        var str = "<div class='list-group'>";

        $.each( data, function( key, value ) {
          str += '<a href="' + value.link + '" target="_blank" class="list-group-item list-group-item-action flex-column align-items-start"> <div class="d-flex w-100 justify-content-between">';
          str += '<h5 class="mb-1">' + value.title + '</h5>';
          str += "</div>";
          str += '<span class="badge badge-primary">' + moment(value.pubDate).fromNow() + '</span>';
          str += '<p class="mb-1">'+value.description+'</p>';
          str += '</a>';
        });

        str += "</div>";

        $("#actualites").html(str);
    })
    .fail(function(err) {
        console.log(err);
    });
}

function getEphemeride(){
  $.ajax(
    {
        method: "GET",
        contentType: 'application/json',
        crossDomain: true,
        dataType: 'json',
        url:'https://3zw9c5mdo8.execute-api.eu-west-2.amazonaws.com/default/getEphemeride', 
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).done(function(data) {
        console.log(JSON.stringify(data));
        var str = '<div class="alert alert-primary" role="alert"><h3>'+data.dateJour+'</h3></div>';
        str += '<div class="progress"><div class="progress-bar" role="progressbar" style="width: '+Math.round(data.jourAnnee*100/366)+'%;" aria-valuenow="'+data.jourAnnee+'" aria-valuemin="1" aria-valuemax="365">Jour '+data.jourAnnee+'</div></div>';
        str += "<h4><em>"+data.feteDuJour+"</em></h4>";
        str += "<h4>Semaine <span class='badge badge-primary'>"+data.numSemaine+"</span></h4>";
        str += "<h4>"+data.joursRestants+" jour(s) avant la fin de l'année !</h4>";

        $("#ephemeride").html(str);
    })
    .fail(function(err) {
        console.log(err);
    });
}

function getQuote(){
  $.ajax(
    {
        method: "GET",
        contentType: 'application/json',
        crossDomain: true,
        dataType: 'json',
        url:'https://3zw9c5mdo8.execute-api.eu-west-2.amazonaws.com/default/getQuote', 
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).done(function(data) {
        console.log(JSON.stringify(data));
        var str = '<blockquote class="blockquote">';
        str += '<p><em>' + data.quote + '</em></p>';
        str += '<footer>'+data.author+'</footer>';
        str += '</blockquote>';

        $("#citations").html(str);
    })
    .fail(function(err) {
        console.log(err);
    });
}
