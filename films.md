# Films

Retourner les films prochainement diffusés selon le site Allocine.

## Requête HTTP

`GET /films`

Pour récupérer les films prochainement (?) diffusés au format RSS, http://rss.allocine.fr/ac/cine/prochainement?format=xml

## Réponse HTTP

```json
{
    "films":[
        {
            "categorie":"Animation",
            "description":"<p>À la suite d’une chute lors de la cueillette du gui,...",
            "titre":"Astérix - Le Secret de la Potion Magique"
        },
        {
        	
        }
    ]
}
```
