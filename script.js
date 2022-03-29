var bitCoinUrl = 'https://3zw9c5mdo8.execute-api.eu-west-2.amazonaws.com/default/getBitcoinRate';
var newsUrl = 'https://3zw9c5mdo8.execute-api.eu-west-2.amazonaws.com/default/getNews';
var ephemerideUrl = 'https://3zw9c5mdo8.execute-api.eu-west-2.amazonaws.com/default/getEphemeride';
var quoteUrl = 'https://3zw9c5mdo8.execute-api.eu-west-2.amazonaws.com/default/getQuote';
var weatherUrl = 'https://3zw9c5mdo8.execute-api.eu-west-2.amazonaws.com/default/getWeather';
var horoscopeUrl = 'https://3zw9c5mdo8.execute-api.eu-west-2.amazonaws.com/default/getHoroscope';
var cinemaUrl = 'https://3zw9c5mdo8.execute-api.eu-west-2.amazonaws.com/default/getCinema';
var covidUrl = 'https://3zw9c5mdo8.execute-api.eu-west-2.amazonaws.com/default/getcovid19';

ephemerideUrl = 'https://zyy86tqa0k.execute-api.us-east-1.amazonaws.com/prod/ephemeride';
newsUrl = '';
horoscopeUrl = 'https://0c2ujdebf2.execute-api.us-east-1.amazonaws.com/horoscope';
//weatherUrl = 'https://lgf41gmp4c.execute-api.us-east-1.amazonaws.com/meteo';
weatherUrl = 'https://lgf41gmp4c.execute-api.us-east-1.amazonaws.com/meteo';
var weatherUrl2 = 'https://ftvd0dvohh.execute-api.us-east-1.amazonaws.com/meteo';
bitCoinUrl = 'https://vixb312alc.execute-api.us-east-1.amazonaws.com/prod/bitcoin';
var bitcoinUrl2 = 'https://6jlo2ofkff.execute-api.us-east-1.amazonaws.com/prod/bitcoin';
cinemaUrl = 'https://qlyqjipa58.execute-api.us-east-1.amazonaws.com/prod/films';
quoteUrl = 'https://7ykj046w26.execute-api.us-east-1.amazonaws.com/citation';

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
    getWeather2();
    $("#getWeather2").click(function(event) {
        event.preventDefault();
        getWeather2();
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
    getCovid();
    $("#getCovid").click(function(event) {
        event.preventDefault();
        getCovid();
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
                "currencies":$("#currenciesSelect").val().toString()
            }), 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Origin': 'https://pjvilloud.github.io'
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
                "currencies":$("#currenciesSelect2").val().toString()
            }), 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Origin': 'https://pjvilloud.github.io'
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
        method: "GET",
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
        str += '<p><em>' + data.quote + '</em></p>';
        str += '<footer>'+data.author+'</footer>';
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

function getWeather2(){
    $.ajax(
    {
        method: "POST",
        data: JSON.stringify({
            "city": $("#lieuInput2").val(),
        }), 
        contentType: 'application/json',
        crossDomain: true,
        dataType: 'json',
        url:weatherUrl2, 
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).done(function(data) {
        var str = '<div class="alert alert-primary" role="alert"><h3>'+data.temps+'&nbsp;<span class="float-right" style="margin-top:-8px"><i class="owf-2x owf owf-'+data.icon+'"></i></h3></div>';
        str += '<h4 class="text-center">Température : <b>' + data.temp +'°</b></h4>';
        str += '<h4 class="text-info text-center">Humidité : ' + data.humidite +'%</h4>';
        str += '<h4 class="text-warning text-center">Soleil : Lever à ' + data.lever +', coucher à ' + data.coucher +'</h4>';
        $("#previsions2").html(str);
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
        $.each(data, function(index, val) {
             str += '<div class="card col-sm-6"><div class="card-body"><h5 class="card-title">'+val.titre+'</h5><span class="badge badge-info">'+val.categorie+'</span> <p class="card-text">'+val.description+'</p></div></div>'
        });
        str += "</div";
        $("#cinema").html(str);
    })
    .fail(function(err) {
        console.log(err);
    });
}

function getCovid(){

    $.ajax(
        {
            method: "GET",
            contentType: 'application/json',
            crossDomain: true,
            dataType: 'json',
            url:covidUrl, 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            success: function(data, textStatus, xhr) {
                console.log(JSON.stringify(data));
                $("#covidDate").html(data.date);
                $("#covidVax").html(data.nbVaccines);
            }
        }
    );
}

