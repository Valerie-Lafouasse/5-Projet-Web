# Trombinoscope de promotion — ENI EDWM2605FT

Application web permettant de visualiser les apprenants d'une promotion de formation Développeur Web et Web Mobile (ENI), avec plusieurs modes d'affichage et une carte de géolocalisation.

## Fonctionnalités

- **Affichage double** : vue liste (tableau) ou vue carte (vignettes), au choix
- **Carte interactive** : géolocalisation de chaque apprenant via Leaflet et OpenStreetMap
- **Préférences persistantes** : thème clair/sombre et mode d'affichage sauvegardés via `localStorage`
- **Chargement dynamique des données** : les informations des 24 apprenants sont chargées depuis un fichier JSON via `fetch`
- **Responsive** : conception mobile-first, adaptée aux écrans desktop via media queries

## Stack technique

- HTML5 / CSS3 (sans framework CSS)
- JavaScript vanilla (sans framework)
- [Leaflet.js](https://leafletjs.com/) pour la cartographie interactive
- LocalStorage pour la persistance des préférences utilisateur

Choix de ne pas utiliser de framework front (React, Vue...) pour ce projet, dans l'objectif de consolider les fondamentaux JS.

## Voir le projet en ligne

👉 [Lien du site (GitHub Pages)](https://valerie-lafouasse.github.io/5-Projet-Web/)

## Lancer le projet en local

1. Télécharger ce dépôt au format ZIP depuis GitHub ou le cloner avec Git : `git clone https://github.com/Valerie-Lafouasse/5-Projet-Web.git`
2. Ouvrir `index.html` dans un navigateur

## Ce que j'ai appris avec ce projet

- Manipulation du DOM et gestion d'événements (`click`, `change`)
- Gestion de la persistance de données côté client avec `localStorage`
- Intégration d'une librairie externe (Leaflet) et compréhension de son fonctionnement (objet global, tiles, marqueurs)
- Différence entre chargement de script bloquant/différé (`defer`) et son impact sur la manipulation du DOM
- Débogage (console, network, vérification de l'existence des éléments avant manipulation)
- Spécificité CSS et cascade (gestion du thème sombre sur plusieurs composants)

## Pistes d'amélioration

- Modale de détail apprenant au clic sur "Détails" (en cours)
- Image avatar par défaut si non renseignée dans le JSON
- Nettoyage de code (fonctionnalités testées puis abandonnées, encore commentées)

## Auteur

Valérie Lafouasse — en formation Titre Professionnel Développeur Web et Web Mobile (ENI)