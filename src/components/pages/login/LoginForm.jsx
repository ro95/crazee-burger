import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function LoginForm() {
  // states
  const [prenom, setPrenom] = useState("Rod");
  const Navigate = useNavigate();

  // comportements
  const handleSubmit = (e) => {
    e.preventDefault();
    if (prenom) {
      Navigate(`/order/${prenom}`)
    }
   
    setPrenom("");
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous!</h1>
      <h2>Connectez-vous</h2>
      <input
        type="text"
        placeholder="Entrez votre Prénom..."
        value={prenom}
        onChange={(e) => setPrenom(e.target.value)}
        required
      />
      <button type="submit">Accéder à votre espace</button>
   
    </form>
  );
}
