# Cours du Bitcoin

Convertisseur de devises en Bitcoin

## Requête HTTP

`POST /bitcoin`

```json
{
    "bitcoinAmount": 3,
    "currencyList": "EUR,USD"
}
```

Pour récupérer le cours du Bitcoin, https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=EUR,USD

## Réponse HTTP

```json
{
    "bitcoinAmount":3.0,
    "currenciesEquivalent":{
        "EUR":8962.74,
        "USD":10225.14
    }
}
```

Dans `currencyList`, on met la liste des monnaires à partir de leur code (on peut en mettre autant qu'on veut, séparés par des virgules). Liste complète des codes pour information : https://www.xe.com/iso4217.php
