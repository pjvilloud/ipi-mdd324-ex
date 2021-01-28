# Actualités

Renvoyer les 10 dernières actualités du site Le Monde.

## Requete HTTP

`GET /actus` 

Pour récupérer les actus au format RSS, https://www.lemonde.fr/rss/une.xml.

## Réponse HTTP

On retourne les 10 premières actus (il n'y en a qu'une seule dans l'exemple ci-dessous) au format suivant :

```json
[
    {
        "link":"https://www.lemonde.fr/societe/live/2018/12/08/gilets-jaunes-suivez-en-direct-la-journee-d-action-du-8-decembre-a-paris-et-en-france_5394372_3224.html?xtor=RSS-3208", 
        "title":"« Gilets jaunes » : suivez en direct la journée du 8 décembre à Paris et en France", 
        "description":"Dans la capitale, une multitude de sites ont été fermés pour la mobilisation du samedi 8 décembre. Des mesures exceptionnelles, après les violences du 1er décembre.", 
        "pubDate":"Sat, 08 Dec 2018 05:09:58 +0100"
     }
]
```
