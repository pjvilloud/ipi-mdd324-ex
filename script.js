var bitCoinUrl = 'https://3zw9c5mdo8.execute-api.eu-west-2.amazonaws.com/default/getBitcoinRate';
var newsUrl = 'https://3zw9c5mdo8.execute-api.eu-west-2.amazonaws.com/default/getNews';
var ephemerideUrl = 'https://3zw9c5mdo8.execute-api.eu-west-2.amazonaws.com/default/getEphemeride';
var quoteUrl = 'https://3zw9c5mdo8.execute-api.eu-west-2.amazonaws.com/default/getQuote';
var weatherUrl = 'https://3zw9c5mdo8.execute-api.eu-west-2.amazonaws.com/default/getWeather';
var horoscopeUrl = 'https://3zw9c5mdo8.execute-api.eu-west-2.amazonaws.com/default/getHoroscope';
var cinemaUrl = 'https://3zw9c5mdo8.execute-api.eu-west-2.amazonaws.com/default/getCinema';
var covidUrl = 'https://3zw9c5mdo8.execute-api.eu-west-2.amazonaws.com/default/getcovid19';

weatherUrl = 'https://b1vyhmmalk.execute-api.us-east-2.amazonaws.com/prod/meteo';

newsUrl = 'https://eva70g18gk.execute-api.us-east-2.amazonaws.com/prod/actus';
bitCoinUrl = 'https://i63gcfz1q5.execute-api.us-east-2.amazonaws.com/prod/bitcoin';
var bitCoinUrl2 = 'https://a64hys4qz9.execute-api.us-east-2.amazonaws.com/prod/bitcoin';
quoteUrl = 'https://f1dqua3n1f.execute-api.us-east-2.amazonaws.com/prod/citation';
ephemerideUrl = 'https://c4zc4m4wxf.execute-api.us-east-2.amazonaws.com/prod/ephemeride';
horoscopeUrl = 'https://66dvqxttq2.execute-api.us-east-2.amazonaws.com/prod/horoscope';
cinemaUrl = 'https://hmmzmoupfi.execute-api.us-east-2.amazonaws.com/prod/films';

/*var bitCoinUrl = 'https://395ghwfs0j.execute-api.us-east-1.amazonaws.com/dev/bitcoin';
var newsUrl = 'https://qzaiescaud.execute-api.us-east-1.amazonaws.com/prod/actus';
var ephemerideUrl = 'https://04bfz6xqq1.execute-api.us-east-1.amazonaws.com/prod/ephemeride';
var quoteUrl = 'https://52au35z76d.execute-api.us-east-1.amazonaws.com/Prod/citations';
var weatherUrl = 'https://bizquto4m7.execute-api.us-east-1.amazonaws.com/prod/meteo';
var horoscopeUrl = 'https://f961k09q32.execute-api.eu-west-2.amazonaws.com/default/horoscope';
var cinemaUrl = 'https://2tk7oifquc.execute-api.us-east-1.amazonaws.com/default/mdd324-cinema';*/

$( document ).ready(function() {
    moment.locale("fr");

    //Bitcoin
    getBitcoinRate();
    $("#getBitcoinRate").click(function(event) {
        getBitcoinRate();
    });
    getBitcoinRate2();
    $("#getBitcoinRate2").click(function(event) {
        getBitcoinRate2();
    });
    getNews();
    $("#getNews").click(function(event) {
        getNews();
    });
    getQuote();
    $("#getQuote").click(function(event) {
        getQuote();
    });
    getWeather();
    $("#getWeather").click(function(event) {
        event.preventDefault();
        getWeather();
    });
    getEphemeride();
    $("#getHoroscope").click(function(event) {
        event.preventDefault();
        getHoroscope();
    });
    
    getCinema();
    $("#getCinema").click(function(event) {
        event.preventDefault();
        getCinema();
    });
});

function getBitcoinRate(){

    $.ajax(
        {
            method: "POST",
            contentType: 'application/json',
            crossDomain: true,
            dataType: 'json',
            url:bitCoinUrl, 
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

function getBitcoinRate2(){

    $.ajax(
        {
            method: "POST",
            contentType: 'application/json',
            crossDomain: true,
            dataType: 'json',
            url:bitCoinUrl2, 
            data: JSON.stringify({
                "bitcoinAmount": parseFloat($("#btcAmount2").val()),
                "currencyList":$("#currenciesSelect2").val().toString()
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

                $("#bitcoin2").html(str);
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
        url:newsUrl, 
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
        url:ephemerideUrl, 
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
        method: "POST",
        data: JSON.stringify({
            "cle": "test",
        }), 
        contentType: 'application/json',
        crossDomain: true,
        dataType: 'json',
        url:quoteUrl, 
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).done(function(data) {
        console.log(JSON.stringify(data));
        var str = '<blockquote class="blockquote">';
        str += '<p><em>' + data.citation + '</em></p>';
        str += '<footer>'+data.auteur+'</footer>';
        str += '</blockquote>';

        $("#citations").html(str);
    })
    .fail(function(err) {
        console.log(err);
    });
}

function getWeather(){
    $.ajax(
    {
        method: "POST",
        data: JSON.stringify({
            "city": $("#lieuInput").val(),
        }), 
        contentType: 'application/json',
        crossDomain: true,
        dataType: 'json',
        url:weatherUrl, 
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).done(function(data) {
        var str = '<div class="alert alert-primary" role="alert"><h3>'+data.temps+'&nbsp;<span class="float-right" style="margin-top:-8px"><i class="owf-2x owf owf-'+data.icon+'"></i></h3></div>';
        str += '<h4 class="text-center">Température : <b>' + data.temp +'°</b></h4>';
        str += '<h4 class="text-info text-center">Humidité : ' + data.humidite +'%</h4>';
        str += '<h4 class="text-warning text-center">Soleil : Lever à ' + data.lever +', coucher à ' + data.coucher +'</h4>';
        $("#previsions").html(str);
    })
    .fail(function(err) {
        console.log(err);
    });
}

function getHoroscope(){
    $.ajax(
    {
        method: "POST",
        data: JSON.stringify({
            "signe": $("#signeSelect").val(),
        }), 
        contentType: 'application/json',
        crossDomain: true,
        dataType: 'json',
        url:horoscopeUrl, 
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).done(function(data) {
        $("#horoscope").html(data.horoscope);
    })
    .fail(function(err) {
        console.log(err);
    });
}


function getCinema(){
    $.ajax(
    {
        method: "GET",
        contentType: 'application/json',
        crossDomain: true,
        dataType: 'json',
        url:cinemaUrl, 
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).done(function(data) {
        console.log(data);
        var str = '<div class="row">';
        $.each(data.films, function(index, val) {
             str += '<div class="card col-sm-6"><div class="card-body"><h5 class="card-title">'+val.titre+'</h5><span class="badge badge-info">'+val.categorie+'</span> <p class="card-text">'+val.description+'</p></div></div>'
        });
        str += "</div";
        $("#cinema").html(str);
    })
    .fail(function(err) {
        console.log(err);
    });
}


