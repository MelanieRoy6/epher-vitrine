// Configuration : adresse de l'application et contact. À modifier une fois l'application en ligne.
const APP_URL = '';            // ex. 'https://app.epher.fr' (laisser vide = lien vers #tarifs)
const CONTACT_EMAIL = '';      // ex. 'contact@epher.fr'

document.querySelectorAll('[data-app]').forEach((a) => {
  if (APP_URL) a.href = APP_URL.replace(/\/$/, '') + a.dataset.app;
});
document.querySelectorAll('[data-contact]').forEach((a) => {
  if (CONTACT_EMAIL) a.href = 'mailto:' + CONTACT_EMAIL;
});

// Date du jour dans le héros (le texte statique sert de repli).
const now = new Date();
const start = new Date(now.getFullYear(), 0, 0);
const doy = Math.floor((now - start - (now.getTimezoneOffset() - start.getTimezoneOffset()) * 60000) / 86400000);
const label = now.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
const el = document.getElementById('today');
if (el) el.textContent = `Jour n° ${doy} · ${label}`;
