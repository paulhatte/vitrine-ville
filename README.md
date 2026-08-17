# vitrine-ville

Site vitrine modèle pour communes, basé sur la maquette **Mairie de Vézac** (Périgord Noir).

Démo déployée sur [ville.rodium.fr](https://ville.rodium.fr).

## Stack

- **Next.js 16** (App Router, export statique)
- **React 19** + TypeScript
- Styles inline fidèles à la maquette HTML d'origine
- Polices Google : Bricolage Grotesque, Instrument Sans

## Pages

| Route | Contenu |
|-------|---------|
| `/` | Accueil |
| `/actualites` | Liste filtrable des actualités |
| `/article` | Articles détaillés (ancres hash) |
| `/agenda` | Agenda de l'été |
| `/evenement` | Fiches événements |
| `/vie-municipale` | Conseil, arrêtés, budget |
| `/demarches` | Démarches administratives |
| `/vezac-pratique` | Infos pratiques + réservation salle |
| `/decouvrir` | Patrimoine et tourisme |
| `/signalement` | Formulaire de signalement |
| `/contact` | Coordonnées et pages légales |

## Développement local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Régénérer depuis la maquette HTML

Si une nouvelle version du bundle `.html` est fournie :

```bash
python3 scripts/convert-maquette.py
```

Puis adapter manuellement les pages interactives dans `src/components/pages/` si le contenu DC a changé.

## Déploiement

Le projet est configuré pour Vercel. Domaine cible : `ville.rodium.fr`.

```bash
npm run build
```

## Structure

```
src/
├── app/              # Routes Next.js
├── components/       # Header, Footer, pages interactives
├── content/html/     # HTML statique converti depuis la maquette
├── data/             # Articles, événements
└── lib/              # Routes, interactions DC, lecture HTML
public/assets/        # Images extraites du bundle
scripts/              # Conversion maquette → projet
```

## Crédits

Maquette : commune de Vézac (démonstration Rodium).  
Photos d'illustration : Wikimedia Commons (voir pied de page du site).
