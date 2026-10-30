# Éphér 2.0 — site vitrine

Page de présentation statique (HTML, CSS, JS sans dépendance, polices embarquées) : motion design, comparatif Free / Premium / Entreprise et tarifs. L'application elle-même est dans le dépôt `epher-2`.

## Voir le site
- En local : `python3 -m http.server 8000` puis http://localhost:8000
- En ligne : GitHub Pages, déployé à chaque push sur `main` (Settings → Pages → Source : **GitHub Actions**). Adresse : `https://melanieroy6.github.io/epher-vitrine/`

## À renseigner avant la mise en ligne publique
Dans `assets/site.js` : `APP_URL` (adresse de l'application, utilisée par les boutons « Commencer » / « Choisir Premium ») et `CONTACT_EMAIL` (bouton « Nous contacter »).
Dans `index.html` : le pied de page affiche `[MENTIONS LÉGALES] · [CONTACT]` à remplacer par de vraies pages (mentions légales, CGV, confidentialité).

## Détails
- Animations en CSS pur ; `prefers-reduced-motion` coupe toutes les animations.
- Contenu aligné sur les offres de l'application : Premium 2,99 € / mois, 3 utilisateurs vous compris ; Entreprise dès 9,99 € / mois (fonctions « Bientôt » non développées).
- Politique de sécurité du contenu (CSP) en balise `<meta>` : aucun script ni police externe.
- Design : thème « almanach » (Bricolage Grotesque, Instrument Sans, IBM Plex Mono).
