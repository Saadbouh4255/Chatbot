# Coulouche-Bot - Le Sage du Dimanche 🤖

Un chatbot humoristique inspiré de Coluche, construit avec Django (backend) et React (frontend).

## 🎭 Pourquoi "Coulouche" ?

Le nom **Coulouche-Bot** est un jeu de mots entre **Coluche** (l'humoriste français légendaire) et **"chouloule"** (un terme familier signifiant "un peu fou", "déjanté", "loufoque").

Ce nom capture parfaitement la personnalité du bot :
- **Drôle mais inutile** - Comme Coluche, il fait rire, mais contrairement à lui, il ne dit rien de sensé
- **Impertinent et tendre** - Un mélange de sarcasme et de tendresse absurde
- **Complètement à côté de la plaque** - La "chouloule" attitude : déconnecté de la réalité, perdu dans ses pensées
- **Obsédé par Monique** - Son ex (une carte graphique CGA) qui l'a quitté pour un Mac, ajoutant une touche de romantisme tragique et délirant

En résumé : **Coulouche = Coluche + Chouloule** 🤪

## 📁 Structure du Projet

```
Chatbot-static/
├── backend/           # Application Django (API REST)
│   ├── chat/         # Application de chat
│   │   ├── views.py  # VueChat - Logique du chatbot
│   │   └── urls.py   # Routes API
│   ├── core/         # Configuration Django
│   └── manage.py     # Script de gestion Django
│
└── frontend/         # Application React
    ├── src/          # Code source React
    │   ├── App.jsx   # Composant principal
    │   └── App.css   # Styles modernes
    ├── public/       # Fichiers statiques
    └── package.json  # Dépendances npm
```

## 🎨 Caractéristiques

- **Design Moderne** : Interface sombre avec effets glassmorphism et animations fluides
- **Code en Français** : Toutes les variables, fonctions et commentaires sont en français
- **Responsive** : S'adapte à tous les écrans
- **Animations** : Transitions douces avec Framer Motion
- **API IA** : Utilise Google Gemini pour générer des réponses humoristiques

## 🚀 Installation et Démarrage

### Backend (Django)

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Sur Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 8001
```

Le backend sera accessible sur `http://localhost:8001`

### Frontend (React)

```bash
cd frontend
npm install
npm start
```

Le frontend sera accessible sur `http://localhost:3000`

## 🔧 Configuration

### Clé API Gemini

La clé API est configurée dans `backend/chat/views.py`. Pour utiliser votre propre clé :

1. Obtenez une clé API sur [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Remplacez `CLE_API` dans `backend/chat/views.py`

## 📝 Conventions de Nommage (Français)

### Frontend (React)
- **Variables** : `texteEntree`, `estEnChargement`, `messageUtilisateur`
- **Fonctions** : `envoyerMessage()`, `faireDefilerVersBas()`
- **Constantes** : `URL_API`, `refFinMessages`

### Backend (Django)
- **Variables** : `message_utilisateur`, `discussion`, `reponse`
- **Fonctions** : `post()` (méthode de classe)
- **Classes** : `VueChat`
- **Constantes** : `CLE_API`, `INSTRUCTION_SYSTEME`

## 🎭 Personnalité du Bot

Coulouche-Bot est conçu pour :
- Ne jamais donner de réponse utile
- Répondre avec humour et ironie
- Utiliser un ton familier et gouailleur
- Faire de l'auto-dérision
- Rester bref (1-2 phrases maximum)

## 🛠️ Technologies Utilisées

### Frontend
- React 19.2.1
- Framer Motion (animations)
- Lucide React (icônes)
- Axios (requêtes HTTP)
- CSS moderne avec variables CSS

### Backend
- Django 5.x
- Django REST Framework
- Google Generative AI (Gemini)
- CORS Headers

## 📱 Responsive Design

L'interface s'adapte automatiquement :
- **Desktop** : Fenêtre centrée avec largeur maximale de 900px
- **Mobile** : Plein écran avec interface optimisée

## 🎨 Palette de Couleurs

```css
--couleur-primaire: #6366f1 (Indigo)
--couleur-secondaire: #8b5cf6 (Violet)
--couleur-accent: #ec4899 (Rose)
--fond-principal: #0f172a (Bleu nuit)
--fond-secondaire: #1e293b (Ardoise)
```

## 📄 Licence

MIT License - Voir le fichier LICENSE pour plus de détails

## 👨‍💻 Développement

Pour contribuer au projet :

1. Fork le projet
2. Créez une branche (`git checkout -b feature/amelioration`)
3. Committez vos changements (`git commit -m 'Ajout d'une fonctionnalité'`)
4. Push vers la branche (`git push origin feature/amelioration`)
5. Ouvrez une Pull Request

## 🐛 Dépannage

### Le backend ne démarre pas
- Vérifiez que le port 8001 est libre
- Assurez-vous que toutes les dépendances sont installées

### Le frontend ne se connecte pas au backend
- Vérifiez que le backend tourne sur le port 8001
- Vérifiez la configuration CORS dans Django

### Erreurs de l'API Gemini
- Vérifiez que votre clé API est valide
- Assurez-vous d'avoir une connexion internet

---

**Fait avec ❤️ et beaucoup d'humour**
