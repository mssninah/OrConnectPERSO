# OrConnect

**OrConnect** est un réseau social pour les orpailleurs, développé avec **React** pour le front-end et **Firebase** pour l'authentification, la base de données, le stockage et l'hébergement.

---

## 📦 Prérequis

* Node.js (v16 ou supérieur)
* npm (inclus avec Node.js)
* Compte Firebase

---

## 🚀 Installation

1. **Cloner le projet**

```bash
git clone https://github.com/mssninah/OrConnectPERSO.git
cd orconnect
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Configurer Firebase**

* Crée un projet Firebase sur [Firebase Console](https://console.firebase.google.com/)
* Active Authentication (Email & Password)
* Crée Firestore Database
* Active Storage pour les images/fichiers
* Copie la configuration Firebase et crée `src/services/firebaseConfig.js` :

```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "TON_API_KEY",
  authDomain: "ton-projet.firebaseapp.com",
  projectId: "ton-projet",
  storageBucket: "ton-projet.appspot.com",
  messagingSenderId: "xxxx",
  appId: "xxxx"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
```

---

## 🏗️ Lancer le projet en développement

```bash
npm start
```

* Ouvre le navigateur sur `http://localhost:3000`
* Tu peux naviguer entre les pages Login, Register, Feed, Profile, Admin

---

## 📁 Structure du projet

```
src/
├── components/  (boutons, cartes, formulaires)
├── pages/       (Login, Register, Profile, Feed, Admin)
├── services/    (firebaseConfig.js)
├── context/     (user context)
├── assets/      (images, icônes)
└── App.js
```

---

## ⚡ Déploiement avec Firebase Hosting

1. Installer Firebase CLI si ce n'est pas fait :

```bash
npm install -g firebase-tools
```

2. Se connecter à Firebase :

```bash
firebase login
```

3. Initialiser Firebase Hosting :

```bash
firebase init hosting
```

4. Déployer le site :

```bash
firebase deploy
```

* Le site sera accessible via l'URL Firebase ou ton domaine personnalisé si configuré.

---

## 💡 Astuces

* Teste chaque fonctionnalité en local avant de déployer
* Utilise Git pour versionner ton projet
* Suis le Todo list 10 jours pour organiser ton travail
* Configure correctement les règles de sécurité Firestore pour protéger les données
