import { useState } from "react";

function App() {
  // states
  const [prenom, setPrenom] = useState("Rod");

  // comportements

  // affichage

  return (
    <div>
      <h1> Bienvue chez nous {prenom}</h1>
      <h3> Connectez-vous</h3>
    </div>
  );
}
export default App;
