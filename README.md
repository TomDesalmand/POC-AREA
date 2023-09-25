# Projet Login Page React, React Native et Node.js avec Docker Compose

Ce dépôt GitHub contient un exemple de mise en œuvre d'une page de connexion utilisant React pour le web, React Native pour les appareils mobiles et Node.js pour le backend. Il utilise Docker Compose pour créer un environnement de développement et de déploiement cohérent pour ces trois composants.

## Table des matières

- [Aperçu](#aperçu)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Utilisation](#utilisation)

## Aperçu

Cette application de démonstration présente une page de connexion simple avec les fonctionnalités suivantes :

- Saisie du nom d'utilisateur et du mot de passe
- Validation des données de connexion par token

L'application est conçue pour fonctionner de manière transparente sur le web et les appareils mobiles grâce à l'utilisation de React et React Native. Le backend est géré par Node.js, qui gère les requêtes d'authentification et renvoie des réponses appropriées.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre système :

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Git](https://git-scm.com/)
- [NodeJS](https://nodejs.org/en/download/package-manager)

## Installation

1. Clonez ce dépôt sur votre système local en utilisant la commande suivante :

   ```bash
   git clone https://git@github.com:TomDesalmand/POC-AREA.git
   ```

## Utilisation

Suivez ces étapes pour exécuter l'application avec Docker Compose :

1. Construisez et lancer les conteneurs Docker en utilisant Docker Compose :

   ```bash
   docker-compose up --build
   ```

   L'application frontend React sera accessible à l'adresse [http://localhost:3000](http://localhost:3000).

   L'application React Native peut être exécutée sur un émulateur Android ou iOS en utilisant les commandes
   ```bash
   npm start
   ```
   ```bash
   npm run android
   ```

   Le backend Node.js sera accessible à l'adresse [http://localhost:3001](http://localhost:3001).
