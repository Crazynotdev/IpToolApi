
<h1 align="center">🌍 IPTool API</h1>

<p align="center">
  Une API Node.js simple pour obtenir des informations sur l'adresse IP d'un utilisateur.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-4.9.x-blue?logo=typescript" />
  <img src="https://img.shields.io/badge/Node.js-18.x-green?logo=node.js" />
  <img src="https://img.shields.io/badge/Express.js-4.x-white?logo=express" />
  <img src="https://img.shields.io/badge/Open%20Source-Yes-brightgreen?style=flat-square&logo=github" />
</p>

---


<img src="https://media.giphy.com/media/fAnEC88LccN7a/giphy.gif" width="80"/>
<img src="https://media.giphy.com/media/fsEaZldNC8A1PJ3mwp/giphy.gif" width="80"/>
<img src="https://media.giphy.com/media/UVG0BN8TOMKkPOJS6e/giphy.gif" width="80"/>



🚀 Fonctionnalité

- 🔍 Obtenir la ville, pays et ISP d'une IP
- 🔐 Détecte l'IP même derrière un proxy
- 💻 Récupère l'User-Agent automatiquement
- ⚡️ Rapide, léger, sans DB

---

📦 Installation

```bash
git clone https://github.com/ton-user/iptool-api.git
cd iptool-api
npm install
```

---

⚙️ Démarrage

*Développement :*

```bash
npm run dev
```

*Production :*

```bash
npm run build
npm start
```

---

🔧 Variables d'environnement

Crée un fichier `.env` :

```env
PORT=3000
IP_API=https://ipapi.co/
```

---

📌 Exemple d'appel API

```http
GET /api/ip
```

*Réponse :*

```json
{
  "ip": "8.8.8.8",
  "user_agent": "Mozilla/5.0...",
"city": "Mountain View",
  "country": "United States",
  "isp": "Google LLC",
  "is_proxy": false
}
```

---

💡 Utilisation possible

- Systèmes d'analyse de trafic
- Vérification géographique
- Sécurité et logs

---

🧠 Dépendances principales

- Express
- Axios
- dotenv
- TypeScript

---

🛠 Structure

```
├── src/
│   ├── controllers/
│   │   └── ipController.ts
│   ├── routes/
│   │   └── ip.ts
│   ├── utils/
│   │   └── fetchIPData.ts
│   ├── app.ts
│   └── server.ts
├── .env
├── package.json
├── tsconfig.json
```

---

✨ Contribuer

1. Fork 🍴
2. Code 💻
3. Pull Request 🚀

---

👨‍💻 Auteur

Créé avec ❤️ par Crazy – libre à l’usage, à l’extension et aux idées.

---
