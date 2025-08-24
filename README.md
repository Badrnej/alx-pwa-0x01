# CineSeek - API Explorer: Mastering RESTful Connections

## API Overview

L'API MoviesDatabase est une API complète qui fournit des données mises à jour pour plus de 9 millions de titres (films, séries et épisodes) et 11 millions d'acteurs/membres d'équipe. Cette API offre une collection d'informations détaillées sur les films, séries TV et acteurs, incluant les URLs de bandes-annonces YouTube, les récompenses, les biographies complètes et de nombreuses autres informations utiles. Les titres récents sont mis à jour chaque semaine, tandis que les évaluations et épisodes sont mis à jour quotidiennement.

## Version

L'API MoviesDatabase utilise la version actuelle disponible sur RapidAPI. Elle est maintenue de manière continue avec des mises à jour hebdomadaires pour les nouveaux titres et des mises à jour quotidiennes pour les évaluations.

## Available Endpoints

### Titles
- **GET /titles** - Retourne un tableau de titres selon les filtres/paramètres de tri fournis
- **GET /titles/{id}** - Retourne un titre spécifique selon son ID IMDB
- **GET /titles/{id}/ratings** - Retourne les évaluations et le nombre de votes d'un titre
- **GET /titles/series/{id}** - Retourne un tableau d'épisodes d'une série en ordre croissant
- **GET /titles/seasons/{id}** - Retourne le nombre de saisons d'une série
- **GET /titles/series/{id}/{season}** - Retourne les épisodes d'une saison spécifique
- **GET /titles/episode/{id}** - Retourne les détails d'un épisode spécifique
- **GET /titles/x/upcoming** - Retourne un tableau de titres à venir

### Search
- **GET /titles/search/keyword/{keyword}** - Recherche de titres par mot-clé
- **GET /titles/search/title/{title}** - Recherche de titres par titre ou partie de titre
- **GET /titles/search/akas/{aka}** - Recherche de titres par nom alternatif (AKAs)

### Actors
- **GET /actors** - Retourne un tableau d'acteurs selon les filtres fournis
- **GET /actors/{id}** - Retourne les détails d'un acteur spécifique

### Utils
- **GET /title/utils/titleType** - Retourne un tableau des types de titres
- **GET /title/utils/genres** - Retourne un tableau des genres
- **GET /title/utils/lists** - Retourne un tableau des listes disponibles

## Request and Response Format

### Structure de Requête Typique
```
GET https://moviesdatabase.p.rapidapi.com/titles?year=2024&sort=year.decr&limit=12&page=1
Headers:
  x-rapidapi-host: moviesdatabase.p.rapidapi.com
  x-rapidapi-key: YOUR_API_KEY_HERE
```

### Structure de Réponse Typique
```json
{
  "results": [
    {
      "id": "tt0000270",
      "titleText": {
        "text": "The Great Train Robbery"
      },
      "primaryImage": {
        "url": "https://image.url"
      },
      "releaseYear": {
        "year": 1903
      },
      "titleType": {
        "text": "movie"
      },
      "genres": ["Action", "Adventure"],
      "runtime": {
        "seconds": 720
      }
    }
  ],
  "page": 1,
  "next": "/titles?page=2",
  "entries": 12
}
```

## Authentication

L'API MoviesDatabase utilise l'authentification par clé API via les en-têtes de requête:

- **Méthode**: Clé API dans l'en-tête
- **En-têtes requis**:
  - `x-rapidapi-host`: moviesdatabase.p.rapidapi.com
  - `x-rapidapi-key`: VOTRE_CLE_API_ICI

La clé API doit être stockée dans les variables d'environnement pour la sécurité et ne jamais être exposée côté client.

## Error Handling

### Codes d'Erreur Courants
- **200**: Succès - Requête traitée avec succès
- **400**: Bad Request - Paramètres de requête invalides
- **401**: Unauthorized - Clé API manquante ou invalide
- **403**: Forbidden - Quota API dépassé ou accès refusé
- **404**: Not Found - Ressource non trouvée
- **429**: Too Many Requests - Limite de taux dépassée
- **500**: Internal Server Error - Erreur serveur

### Gestion des Erreurs dans le Code
```typescript
try {
  const response = await fetch(url, {
    headers: {
      'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com',
      'x-rapidapi-key': process.env.MOVIE_API_KEY
    }
  });
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const data = await response.json();
  return data;
} catch (error) {
  console.error('API request failed:', error);
  // Gérer l'erreur appropriée
}
```

## Usage Limits and Best Practices

### Limites d'Utilisation
- **Limite par défaut**: 10 résultats par page (maximum 50)
- **Limitation de taux**: Dépend du plan d'abonnement RapidAPI
- **Quota mensuel**: Selon le plan choisi

### Meilleures Pratiques
1. **Pagination**: Utilisez la pagination pour limiter la taille des requêtes
2. **Cache côté client**: Mise en cache des réponses lorsque c'est approprié
3. **Gestion des erreurs**: Implémentez une gestion robuste des erreurs
4. **Variables d'environnement**: Stockez la clé API de manière sécurisée
5. **Paramètres info**: Utilisez le paramètre `info` pour récupérer uniquement les données nécessaires
6. **Filtrage**: Utilisez les paramètres de filtrage (année, genre, type) pour des requêtes plus efficaces
7. **Routes API côté serveur**: Protégez l'exposition de la clé API en utilisant des routes API Next.js
8. **Limites de frontières d'erreur**: Implémentez des limites d'erreur pour une défaillance gracieuse

### Exemples de Paramètres de Requête Optimisés
- `info=mini_info` - Pour les informations de base uniquement
- `limit=12` - Limite raisonnable pour la pagination
- `sort=year.decr` - Tri par année décroissante
- `genre=Action` - Filtrage par genre spécifique
- `year=2024` - Filtrage par année spécifique
