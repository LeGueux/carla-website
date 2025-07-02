# Workflow Git pour le projet Português com Carla

## 1. Récupérer le code depuis Bolt
- Télécharger le ZIP depuis Bolt
- Décompresser dans votre dossier de projet

## 2. Initialiser Git en local
```bash
cd votre-projet-portugais
git init
git add .
git commit -m "Initial commit: Portuguese course website structure"
```

## 3. Connecter à GitHub
```bash
# Si le repo existe déjà
git remote add origin https://github.com/votre-username/votre-repo.git
git branch -M main
git push -u origin main

# Ou créer une branche feature
git checkout -b feature/portuguese-course-structure
git push -u origin feature/portuguese-course-structure
```

## 4. Pour les futures modifications
1. Développer dans Bolt
2. Télécharger les changements
3. Remplacer les fichiers en local
4. Commit et push

## 5. Structure du projet
```
portuguese-course/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── public/
├── package.json
├── astro.config.mjs
└── tailwind.config.js
```

## 6. Commandes utiles
```bash
# Voir les changements
git status
git diff

# Ajouter et committer
git add .
git commit -m "Add new lesson: [description]"

# Pousser vers GitHub
git push

# Créer une nouvelle branche
git checkout -b feature/nouvelle-fonctionnalite
```