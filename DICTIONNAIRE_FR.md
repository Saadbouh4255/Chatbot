# 🇫🇷 Dictionnaire de Traduction - Conventions de Nommage

Ce document liste toutes les traductions utilisées dans le projet Coulouche-Bot.

## 📋 Table des Matières
1. [Variables Frontend](#variables-frontend)
2. [Fonctions Frontend](#fonctions-frontend)
3. [Variables Backend](#variables-backend)
4. [Classes Backend](#classes-backend)
5. [Variables CSS](#variables-css)
6. [Termes Généraux](#termes-généraux)

---

## Variables Frontend

### React Components (App.jsx)

| Anglais | Français | Type | Description |
|---------|----------|------|-------------|
| `messages` | `messages` | Array | Liste des messages (déjà en français) |
| `inputText` | `texteEntree` | String | Texte saisi par l'utilisateur |
| `isLoading` | `estEnChargement` | Boolean | État de chargement |
| `messagesEndRef` | `refFinMessages` | Ref | Référence pour le scroll |
| `userMessage` | `messageUtilisateur` | String | Message de l'utilisateur |
| `response` | `reponse` | Object | Réponse de l'API |
| `error` | `erreur` | Object | Erreur éventuelle |

### Propriétés d'Objets

| Anglais | Français | Type | Description |
|---------|----------|------|-------------|
| `text` | `texte` | String | Contenu du message |
| `sender` | `expediteur` | String | Émetteur du message |
| `'user'` | `'utilisateur'` | String | Type: utilisateur |
| `'bot'` | `'bot'` | String | Type: bot |

### index.js

| Anglais | Français | Type | Description |
|---------|----------|------|-------------|
| `root` | `racine` | ReactDOM.Root | Racine de l'application |
| `reportWebVitals` | `rapporterVitauxWeb` | Function | Fonction de reporting |

### reportWebVitals.js

| Anglais | Français | Type | Description |
|---------|----------|------|-------------|
| `onPerfEntry` | `surEntreePerf` | Function | Callback de performance |

---

## Fonctions Frontend

| Anglais | Français | Description |
|---------|----------|-------------|
| `scrollToBottom()` | `faireDefilerVersBas()` | Fait défiler vers le bas |
| `sendMessage()` | `envoyerMessage()` | Envoie un message |
| `reportWebVitals()` | `rapporterVitauxWeb()` | Rapporte les vitaux web |

---

## Variables Backend

### views.py

| Anglais | Français | Type | Description |
|---------|----------|------|-------------|
| `API_KEY` | `CLE_API` | String | Clé API Gemini |
| `SYSTEM_INSTRUCTION` | `INSTRUCTION_SYSTEME` | String | Instructions du système |
| `model` | `modele` | GenerativeModel | Modèle IA |
| `user_message` | `message_utilisateur` | String | Message de l'utilisateur |
| `chat` | `discussion` | Chat | Session de chat |
| `response` | `reponse` | Response | Réponse générée |
| `request` | `requete` | Request | Requête HTTP |

### urls.py

| Anglais | Français | Type | Description |
|---------|----------|------|-------------|
| `urlpatterns` | `modeles_url` | List | Patterns d'URL (puis assigné à urlpatterns) |

---

## Classes Backend

| Anglais | Français | Type | Description |
|---------|----------|------|-------------|
| `ChatView` | `VueChat` | APIView | Vue de chat Django |

### Méthodes

| Anglais | Français | Description |
|---------|----------|-------------|
| `post(request)` | `post(requete)` | Méthode POST |

---

## Variables CSS

### index.css

| Anglais | Français | Description |
|---------|----------|-------------|
| `--bg-color` | `--couleur-fond` | Couleur de fond |
| `--text-color` | `--couleur-texte` | Couleur du texte |
| `--primary-color` | `--couleur-primaire` | Couleur primaire |
| `--secondary-color` | `--couleur-secondaire` | Couleur secondaire |
| `--accent-color` | `--couleur-accent` | Couleur d'accent |
| `--glass-bg` | `--fond-verre` | Fond glassmorphism |
| `--glass-border` | `--bordure-verre` | Bordure glassmorphism |
| `--message-user-bg` | `--fond-message-utilisateur` | Fond message utilisateur |
| `--message-bot-bg` | `--fond-message-bot` | Fond message bot |

### App.css

| Anglais | Français | Description |
|---------|----------|-------------|
| `--primary-color` | `--couleur-primaire` | Couleur primaire |
| `--secondary-color` | `--couleur-secondaire` | Couleur secondaire |
| `--accent-color` | `--couleur-accent` | Couleur d'accent |
| `--main-bg` | `--fond-principal` | Fond principal |
| `--secondary-bg` | `--fond-secondaire` | Fond secondaire |
| `--card-bg` | `--fond-carte` | Fond de carte |
| `--primary-text` | `--texte-primaire` | Texte primaire |
| `--secondary-text` | `--texte-secondaire` | Texte secondaire |
| `--tertiary-text` | `--texte-tertiaire` | Texte tertiaire |
| `--border` | `--bordure` | Bordure |
| `--main-shadow` | `--ombre-principale` | Ombre principale |
| `--elevated-shadow` | `--ombre-elevee` | Ombre élevée |

---

## Termes Généraux

### Types de Données

| Anglais | Français |
|---------|----------|
| String | Chaîne |
| Number | Nombre |
| Boolean | Booléen |
| Array | Tableau |
| Object | Objet |
| Function | Fonction |
| Ref | Référence |

### Actions

| Anglais | Français |
|---------|----------|
| send | envoyer |
| receive | recevoir |
| load | charger |
| scroll | défiler |
| click | cliquer |
| hover | survoler |
| focus | focaliser |
| blur | flouter |
| submit | soumettre |
| validate | valider |
| error | erreur |
| success | succès |

### États

| Anglais | Français |
|---------|----------|
| loading | en chargement |
| loaded | chargé |
| error | erreur |
| success | succès |
| pending | en attente |
| active | actif |
| inactive | inactif |
| disabled | désactivé |
| enabled | activé |

### Éléments UI

| Anglais | Français |
|---------|----------|
| button | bouton |
| input | entrée / saisie |
| message | message |
| chat | discussion |
| user | utilisateur |
| bot | bot |
| avatar | avatar |
| header | en-tête |
| footer | pied de page |
| container | conteneur |
| wrapper | enveloppe |
| window | fenêtre |

### Propriétés CSS

| Anglais | Français |
|---------|----------|
| color | couleur |
| background | fond |
| border | bordure |
| shadow | ombre |
| text | texte |
| primary | primaire |
| secondary | secondaire |
| accent | accent |
| main | principal |
| glass | verre |

---

## 📝 Règles de Nommage

### Variables
- **camelCase** pour JavaScript: `texteEntree`, `estEnChargement`
- **snake_case** pour Python: `message_utilisateur`, `discussion`
- **kebab-case** pour CSS: `--couleur-primaire`, `--fond-verre`

### Fonctions
- **camelCase** pour JavaScript: `envoyerMessage()`, `faireDefilerVersBas()`
- **snake_case** pour Python: `post()`, `get()`

### Classes
- **PascalCase** pour React et Django: `App`, `VueChat`

### Constantes
- **UPPER_SNAKE_CASE**: `CLE_API`, `INSTRUCTION_SYSTEME`, `URL_API`

### Booléens
- Préfixe `est` pour les états: `estEnChargement`, `estActif`
- Préfixe `a` pour les propriétés: `aErreur`, `aReussi`

---

## 🎯 Exemples d'Utilisation

### Frontend (React)
```javascript
// Variables
const texteEntree = '';
const estEnChargement = false;
const messageUtilisateur = 'Bonjour';

// Fonctions
const envoyerMessage = async () => {
  // ...
};

const faireDefilerVersBas = () => {
  // ...
};

// Objets
const message = {
  texte: 'Salut !',
  expediteur: 'utilisateur'
};
```

### Backend (Python)
```python
# Variables
message_utilisateur = request.data.get('message')
discussion = modele.start_chat(history=[])
reponse = discussion.send_message(message_utilisateur)

# Constantes
CLE_API = "..."
INSTRUCTION_SYSTEME = "..."

# Classes
class VueChat(APIView):
    def post(self, requete):
        # ...
```

### CSS
```css
/* Variables */
:root {
  --couleur-primaire: #6366f1;
  --couleur-secondaire: #8b5cf6;
  --fond-principal: #0f172a;
  --texte-primaire: #f1f5f9;
}

/* Classes (restent en anglais pour compatibilité) */
.chat-window {
  background: var(--fond-principal);
  color: var(--texte-primaire);
}
```

---

## 🔄 Correspondances Complètes

### Flux de Message

```
Utilisateur tape → texteEntree
Utilisateur envoie → envoyerMessage()
Création objet → { texte: ..., expediteur: 'utilisateur' }
Ajout à → messages
Envoi API → message_utilisateur
Traitement → discussion.send_message()
Réponse → reponse.text
Création objet → { texte: ..., expediteur: 'bot' }
Ajout à → messages
Affichage → message-content
```

---

**Version**: 1.0
**Date**: 2025-12-04
**Langue**: Français 🇫🇷
