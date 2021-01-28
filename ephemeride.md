# Ephéméride

Afficher l'éphéméride du jour (date, fête, nombre de jours écoulés dans l'année, nombre de jours restants avant la fin de l'année, numéro de semaine).

## Requête HTTP

`GET /ephemeride`

Pour récupérer les Saint/Saintes : https://raw.githubusercontent.com/theofidry/ephemeris/master/src/ephemeris.json

## Réponse HTTP

```json
{
    "dateJour":"samedi 8 décembre 2018",
    "feteDuJour":" Fête de l'Immaculée Conception",
    "jourAnnee":342,
    "joursRestants":23,
    "numSemaine":49
}
```

Utiliser la classe `LocalDate` de Java.