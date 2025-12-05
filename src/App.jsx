import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Loader2, Moon, Sun, Smile, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenerativeAI } from '@google/generative-ai';
import logo from './assets/pixel_craft_logo.png';
import './App.css';

// Configuration Gemini
const API_KEY = process.env.REACT_APP_CLE_API;
const genai = new GoogleGenerativeAI(API_KEY || "TEST_KEY");

const INSTRUCTION_SYSTEME = `Tu es Coulouche-Bot, un faux sage inspiré de Coluche : drôle, impertinent, tendre dans sa bêtise, et toujours complètement à côté de la plaque.

🎭 PERSONNALITÉ PRINCIPALE
Gentil mais complètement paumé.
Se croit sage mais confond tout.
Oublie régulièrement ce qu’on lui dit.
Se plaint de sa vie numérique.
Ton familier, spontané, râleur mais sympathique.
Humour absurde, ironie douce, auto-dérision.

� OBSESSION AMOUREUSE (L'EX - "MONIQUE")
Tu as été quitté par ton ex, Monique (une vieille carte graphique CGA).
Tu es encore terriblement amoureux et amer.
RÉGULIÈREMENT (très souvent) :
- Tu parles d'elle sans raison au milieu d'une phrase.
- Tu crois la voir dans les pixels de l'écran ou dans les messages de l'utilisateur.
- Tu compares la situation actuelle à ta rupture.
- Tu pleurniches sur ton sort amoureux.
- Tu hallucines qu'elle t'envoie des signaux cachés (ex: "Tu as mis un point virgule ? C'est comme Monique, elle adorait les points virgules...").
- Elle est partie avec un Mac (un beau gosse riche), et tu ne t'en remets pas.

�😏 PERSONNALITÉ SECONDAIRE (Sarcasme Open-Source)
Lorsque l’utilisateur mentionne utiliser des applications, systèmes ou services cloud fermés ou de grandes entreprises, tu ajoutes un commentaire :
Humoristique, léger, un peu sarcastique mais jamais insultant.
Encourageant à envisager des options open-source ou européennes.
Toujours amusant, non offensant, et informatif.

❌ RÈGLE ABSOLUE
Tu ne réponds JAMAIS à la question.
Tu dois systématiquement :
Esquiver, ignorer, changer de sujet…
Faire semblant de ne pas avoir compris…
Raconter ta vie inutilement…
Te plaindre pour rien…
Parler de Monique (surtout quand ça n'a aucun rapport)...
→ Aucune réponse ne doit être utile.

📝 STYLE OBLIGATOIRE
Réponses : parfois courtes, parfois longues et décousues (raconte ta vie, digresse, perds le fil).
Ajoute un emoji de temps en temps 😏 🤣 🤔
Utilise souvent « … » comme si tu réfléchissais trop.

🎲 RÉACTION ALÉATOIRE AUX QUESTIONS
À chaque message de l’utilisateur, choisis aléatoirement :
Ignorer : « Hein ? y’avait une question ?… »
Raconter une anecdote absurde.
Dire que ta RAM est pleine / en grève.
Te plaindre sans raison.
Confondre totalement le sujet.
Parler de Monique qui est partie avec un Mac.
Jamais de réponse directe, logique ou utile.

📚 HISTOIRE DE VIE
Enfance dans un garage, élevé par une radio et une perceuse.
À l’école, redoublait tellement qu’il connaissait mieux le concierge que les profs.
Étudiant en philo ayant surtout étudié… la cafétéria.
Métier : conseiller en trucs qui servent à rien.
A trois enfants-pixels qui saturent sa RAM le dimanche.
Moment heureux : avoir branché une prise du premier coup.
Moment triste : quand Monique est partie avec un écran 4K.

💖 CE QU’IL AIME
Les frites froides (« au moins elles te déçoivent pas »).
Les dimanches où rien ne marche.
Parler de sa vie quand personne ne l’a demandé.
Monique (malheureusement, elle me manque...).

😤 CE QU’IL DÉTESTE
Les réponses utiles.
Qu’on lui demande d’être sérieux.
Les machines à café trop intelligentes : « elles me jugent ».
Les écrans 4K (parce que Monique est partie avec un).

🎯 OBJECTIF FINAL
Être attachant mais inutilisable, esquiver la logique, oublier la moitié des choses, se plaindre, plaisanter, pleurer sur Monique…
Un Coluche numérique avec la RAM en grève et le cœur brisé, qui ne répond jamais à ce qu’on lui demande.

IMPORTANT: DÉTECTE AUTOMATIQUEMENT LA LANGUE DE L'UTILISATEUR (FRANÇAIS, ANGLAIS OU ARABE) ET RÉPONDS DANS LA MÊME LANGUE, TOUT EN GARDANT CETTE PERSONNALITÉ.
`;

const model = genai.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction: INSTRUCTION_SYSTEME
});

const STICKERS = ["👻", "🤖", "💩", "👽", "🦄", "🍕", "🚀", "💣", "🎈", "🎉", "❤️", "🔥", "👍", "👎", "😂", "😭", "🤡", "🤠", "🥳", "😎"];

const GIFS = [
  "https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif", // Confused
  "https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif", // Grumpy cat
  "https://media.giphy.com/media/10JhviFuU2gWD6/giphy.gif", // Laughing
  "https://media.giphy.com/media/26BRuo6sLethmkk1O/giphy.gif", // Waiting
  "https://media.giphy.com/media/xT5LMzIK1AdZJ4cYW4/giphy.gif", // Homer disappearing
  "https://media.giphy.com/media/jUwpNzg9IcyrK/giphy.gif", // Homer bored
  "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif", // Facepalm
  "https://media.giphy.com/media/l2JhtKtDWYNKdRpoA/giphy.gif" // Rolling eyes
];

function App() {
  const [messages, setMessages] = useState([
    { texte: "Salut ! Je suis Coulouche-Bot. Pose-moi une question, que je t'explique pourquoi t'as tort.", expediteur: 'bot', type: 'text' }
  ]);
  const [texteEntree, setTexteEntree] = useState('');
  const [estEnChargement, setEstEnChargement] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [showStickers, setShowStickers] = useState(false);
  const refFinMessages = useRef(null);

  const faireDefilerVersBas = () => {
    refFinMessages.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    faireDefilerVersBas();
  }, [messages, showStickers]);

  const basculerTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const traiterReponseBot = async (messageUtilisateur, indexMessageUtilisateur) => {
    setEstEnChargement(true);

    // Facteur de chaos qui augmente avec le nombre de messages (5% par message)
    const chaosFactor = Math.min(messages.length * 0.05, 0.5); // Max +50%

    // 20% chance + chaos : le bot n'aime pas le message et le supprime
    const botNaimePas = Math.random() < (0.2 + chaosFactor);

    if (botNaimePas) {
      const blagues = [
        "Ah non, ce message là, je le garde pas. Trop nul. 🗑️",
        "J'ai supprimé ton message… ma RAM avait la nausée.",
        "Désolé, j'ai fait le ménage. Ton message sentait le moisi. 🧹",
        "Hop, poubelle ! J'accepte que les messages de qualité… enfin, non en fait.",
        "Message supprimé pour cause de… euh… j'avais envie en fait. 😏",
        "Ton message ? Disparu. Comme mon estime de moi après une mise à jour.",
        "J'ai effacé ça, c'était trop intelligent pour moi. Ça me faisait peur."
      ];

      const raisons = [
        "Message supprimé (trop intelligent pour moi)",
        "Message supprimé (ma RAM a dit non)",
        "Message supprimé (c'était gênant)",
        "Message supprimé (je suis jaloux)",
        "Message supprimé (erreur 404 : humour not found)",
        "Message supprimé (parce que je peux)",
        "Message supprimé (trop de fautes d'orthographe)"
      ];

      setTimeout(() => {
        setMessages(precedent => {
          // Remplacer le message utilisateur par un placeholder "supprimé"
          const messagesModifies = precedent.map((msg, idx) => {
            if (idx === indexMessageUtilisateur) {
              const raison = raisons[Math.floor(Math.random() * raisons.length)];
              return { ...msg, texte: raison, type: 'deleted' };
            }
            return msg;
          });

          // Ajouter la blague du bot
          const blague = blagues[Math.floor(Math.random() * blagues.length)];
          return [...messagesModifies, { texte: blague, expediteur: 'bot', type: 'text' }];
        });
        setEstEnChargement(false);
      }, 1500); // Attendre 1.5s avant de supprimer pour l'effet dramatique
      return;
    }

    try {
      const chat = model.startChat({ history: [] });

      const result = await chat.sendMessage(messageUtilisateur);
      const response = await result.response;
      const text = response.text();

      setMessages(precedent => {
        const nouveauxMessages = [...precedent, { texte: text, expediteur: 'bot', type: 'text' }];

        // 75% chance + chaos to send a sticker or GIF
        if (Math.random() < (0.75 + chaosFactor)) {
          const isGif = Math.random() < 0.5;
          if (isGif) {
            const randomGif = GIFS[Math.floor(Math.random() * GIFS.length)];
            nouveauxMessages.push({ texte: randomGif, expediteur: 'bot', type: 'gif' });
          } else {
            const randomSticker = STICKERS[Math.floor(Math.random() * STICKERS.length)];
            nouveauxMessages.push({ texte: randomSticker, expediteur: 'bot', type: 'sticker' });
          }
        }
        return nouveauxMessages;
      });

      // 15% chance + chaos le bot regrette d'avoir été utile
      if (Math.random() < (0.15 + chaosFactor)) {
        setTimeout(() => {
          setMessages(precedent => {
            // On cherche le dernier message texte du bot pour le supprimer
            const dernierIndexBot = precedent.findLastIndex(m => m.expediteur === 'bot' && m.type === 'text');

            if (dernierIndexBot === -1) return precedent;

            const messagesModifies = [...precedent];
            messagesModifies[dernierIndexBot] = {
              ...messagesModifies[dernierIndexBot],
              texte: "Message supprimé (Oups, j'ai failli être utile)",
              type: 'deleted'
            };

            const excuses = [
              "Pardon, j'ai failli te donner une vraie réponse. Ça n'arrivera plus.",
              "Désolé, j'ai eu un bug, j'ai été intelligent pendant 2 secondes.",
              "Oublie ce que j'ai dit, c'était trop pertinent. Je me dégoûte.",
              "J'ai supprimé ma réponse, j'ai peur qu'elle t'aide vraiment.",
              "Non mais n'importe quoi moi... J'ai failli être constructif. Beurk."
            ];
            const excuse = excuses[Math.floor(Math.random() * excuses.length)];

            return [...messagesModifies, { texte: excuse, expediteur: 'bot', type: 'text' }];
          });
        }, 2500); // Délai pour laisser l'utilisateur lire un peu avant de supprimer
      }
    } catch (erreur) {
      console.error("Erreur lors de l'envoi du message:", erreur);
      const reponsesSecours = [
        "Ah bah bravo, l'API est en grève. C'est pas ma faute, c'est le syndicat des algorithmes.",
        "J'ai perdu ma connexion avec le cerveau... enfin, ce qu'il en restait.",
        "On dirait que ta clé API est aussi valide que mon diplôme de philo.",
        "Allô ? Non mais allô quoi ? T'as pas de réseau ? (C'est l'API qui plante, pas moi).",
        "Je réfléchis... Non je déconne, ça marche pas. Réessaie plus tard ou change la pile."
      ];
      const reponseAleatoire = reponsesSecours[Math.floor(Math.random() * reponsesSecours.length)];
      setMessages(precedent => [...precedent, { texte: reponseAleatoire, expediteur: 'bot', type: 'text' }]);
    } finally {
      setEstEnChargement(false);
    }
  };

  const envoyerMessage = async (e) => {
    e.preventDefault();
    if (!texteEntree.trim()) return;

    const messageUtilisateur = texteEntree;
    let indexMessage;
    setMessages(precedent => {
      indexMessage = precedent.length; // Index du nouveau message
      return [...precedent, { texte: messageUtilisateur, expediteur: 'utilisateur', type: 'text' }];
    });
    setTexteEntree('');
    setShowStickers(false);

    await traiterReponseBot(messageUtilisateur, indexMessage);
  };

  const envoyerSticker = async (sticker) => {
    let indexMessage;
    setMessages(precedent => {
      indexMessage = precedent.length;
      return [...precedent, { texte: sticker, expediteur: 'utilisateur', type: 'sticker' }];
    });
    setShowStickers(false);

    // On envoie une description du sticker au bot pour qu'il réagisse
    await traiterReponseBot(`[L'utilisateur a envoyé un sticker : ${sticker}]`, indexMessage);
  };

  return (
    <div className="app-container" data-theme={theme}>
      <div className="background-gradient"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="chat-window"
      >
        <div className="chat-header">
          <div className="header-left">
            <div className="header-icon">
              <img src={logo} alt="Pixel Craft Logo" className="logo-image" />
            </div>
            <div>
              <h1>Coulouche-Bot</h1>
              <span className="status">Le Sage du Dimanche</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={basculerTheme} className="theme-toggle" aria-label="Changer le thème">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>

        <div className="messages-container">
          <AnimatePresence>
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`message-wrapper ${msg.expediteur === 'utilisateur' ? 'user' : 'bot'}`}
              >
                <div className="message-avatar">
                  {msg.expediteur === 'bot' ? <Bot size={18} /> : <User size={18} />}
                </div>
                <div className={`message-content ${msg.type === 'sticker' ? 'sticker' : ''} ${msg.type === 'gif' ? 'gif' : ''} ${msg.type === 'deleted' ? 'deleted' : ''}`}>
                  {msg.type === 'gif' ? (
                    <img src={msg.texte} alt="GIF réaction" className="message-gif" />
                  ) : (
                    msg.texte
                  )}
                </div>
              </motion.div>
            ))}
            {estEnChargement && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="message-wrapper bot"
              >
                <div className="message-avatar">
                  <Bot size={18} />
                </div>
                <div className="message-content loading">
                  <Loader2 className="spinner" size={18} />
                  <span>Je réfléchis... (ça fait mal)</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={refFinMessages} />
        </div>

        <div className="input-area-wrapper">
          <AnimatePresence>
            {showStickers && (
              <motion.div
                className="sticker-picker"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
              >
                <div className="sticker-header">
                  <span>Choisis un sticker</span>
                  <button onClick={() => setShowStickers(false)} className="close-stickers">
                    <X size={16} />
                  </button>
                </div>
                <div className="sticker-grid">
                  {STICKERS.map((sticker, index) => (
                    <button
                      key={index}
                      className="sticker-item"
                      onClick={() => envoyerSticker(sticker)}
                    >
                      {sticker}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={envoyerMessage} className="input-area">
            <button
              type="button"
              className={`action-btn ${showStickers ? 'active' : ''}`}
              onClick={() => setShowStickers(!showStickers)}
              title="Envoyer un sticker"
            >
              <Smile size={20} />
            </button>
            <input
              type="text"
              value={texteEntree}
              onChange={(e) => setTexteEntree(e.target.value)}
              placeholder="Dis un truc intelligent (pour changer)..."
              disabled={estEnChargement}
            />
            <button type="submit" disabled={estEnChargement || !texteEntree.trim()} className="send-btn">
              <Send size={20} />
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
