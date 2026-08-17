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
vercel --prod --yes
```

## Analytics et UTM (campagnes courrier)

Le site intègre **Vercel Web Analytics** (`@vercel/analytics`) : sans cookie, conforme RGPD.

1. Activer **Web Analytics** dans [Vercel → vitrine-ville → Analytics](https://vercel.com/rodium/vitrine-ville/analytics) si ce n'est pas déjà fait.
2. Les visites avec paramètres UTM déclenchent aussi un événement `utm_visit` (`source`, `medium`, `campaign`, `content`, `term`).
3. Les UTM sont mémorisés en `sessionStorage` pour la session (voir `src/lib/utm.ts`).

Exemple d'URL de test (convention Merci Facteur) :

```
https://vitrine-ville.vercel.app/?utm_source=merci_facteur&utm_medium=courrier&utm_campaign=prospection_vitrines_2026&utm_content=demo_labaroche&utm_term=68
```

Filtres utiles dans le dashboard Vercel : onglet **Events** → `utm_visit`, ou pages vues avec query string UTM.

### Notification Slack (#rodium-bot)

À chaque **premier atterrissage UTM** (scan QR / lien courrier), un message part dans le canal configuré via `SLACK_WEBHOOK_URL` :

1. Créer ou réutiliser un **incoming webhook** Slack pointant vers `#rodium-bot`.
2. Ajouter la variable sur Vercel (projet `vitrine-ville`) :

```bash
vercel env add SLACK_WEBHOOK_URL production
```

3. Redéployer : `vercel --prod --yes`

Un seul ping par session navigateur (pas de spam à chaque page). Le message inclut campagne, `utm_content` (ex. `demo_labaroche`), page d'atterrissage et référent.


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
