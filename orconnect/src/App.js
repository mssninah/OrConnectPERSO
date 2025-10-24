import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import { auth, db, storage } from "./services/firebaseConfig";
function App() {
  console.log("Auth:", auth);
  console.log("DB:", db);
  console.log("Storage:", storage);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>🔥 Orconnect est connecté à Firebase !</h1>
      <p>Ouvre la console pour vérifier la connexion.</p>
    </div>
  );
}

export default App;
