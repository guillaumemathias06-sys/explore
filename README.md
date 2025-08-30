# Explore — Landing Page (React + Vite + Tailwind)

Ce projet contient la page d'atterrissage **Explore** prête à déployer.

## ✨ Déploiement SANS ligne de commande (GitHub + Vercel)

1. Crée un compte **GitHub** (gratuit).
2. Clique **New repository** → nomme-le `explore` → **Create repository**.
3. Clique **Upload files** → glisse/dépose *tout le contenu* de ce dossier (pas le dossier parent).
   - Tu peux d'abord dézipper `explore-site.zip` et ouvrir le dossier `explore-site/`.
   - Sélectionne tous les fichiers et dossiers et dépose-les dans GitHub.
   - Clique **Commit changes**.
4. Va sur **vercel.com** → *New Project* → *Add New...* → choisis ton repo `explore`.
5. Laisse les réglages par défaut : Build command `npm run build`, Output dir `dist`.
6. Clique **Deploy** → quelques minutes → ton site est en ligne 🎉

> Option : connecte ton propre domaine dans Vercel (Settings → Domains).

## 📝 Modifier les textes / tarifs

- Ouvre `src/App.jsx` depuis GitHub (bouton ✏️ sur le fichier pour éditer).
- **Hero** : cherche `Chaque semaine, une` pour changer le titre et le paragraphe.
- **Tarifs** : dans le composant `Pricing`, modifie les valeurs dans `plans` :
  ```js
  {{name: "Essential", price: 29.9, perks: ["..."]}}
  ```
- **FAQ** : plus bas, change les questions/réponses dans le tableau.

Clique **Commit changes** → Vercel reconstruit et met à jour le site automatiquement.

## 🖼️ Mettre des photos

Par défaut, des blocs dégradés sont utilisés. Pour ajouter des images :
1. Ajoute tes images dans `public/images/` (ex: `public/images/yoga.jpg`).
2. Dans `src/App.jsx`, dans la section `Experiences`, remplace la div d'image par :
   ```jsx
   <img src="/images/yoga.jpg" alt="Yoga sunrise plage" className="h-40 w-full object-cover" />
   ```
Commit → Vercel met à jour.

## 📨 Collecter les emails (formulaire)

Les formulaires montrent un message de succès côté front. Pour brancher à un outil :
- **Formspree** : remplace le `<form ... onSubmit=...>` par `action="https://formspree.io/f/XXXX"` + `method="POST"` et enlève le onSubmit.
- **Netlify** : si tu déploies sur Netlify, ajoute `data-netlify="true"` au `<form>` + `name="waitlist"`.

## 🔧 Développement local (optionnel)

Si tu veux lancer en local :
```bash
npm i
npm run dev
```
Ouvre http://localhost:5173

## 🧱 Stack

- Vite + React 18
- TailwindCSS 3
- framer-motion, lucide-react

— Généré le 2025-08-30
