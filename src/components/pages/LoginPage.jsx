import React from 'react'
import React, { useState } from 'react'


export default function LoginPage() {
  // states
  const [prenom, setPrenom] = useState("Rod");

  // comportements
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bienvenu ${prenom}`);
    // Réinitialiser le formulaire si nécessaire
    setPrenom("");
  };

  // affichage
  return (
    <div>
      <h1>Hello {prenom}</h1>

      <form onSubmit={handleSubmit}>
        <h2>Formulaire de contact</h2>
        <input
          type="text"
          placeholder="Entrez votre Prénom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          required
        />
        <button type="submit">Envoyer</button>
      </form>

      <br />
      <h3>Connectez-vous</h3>
    </div>
  );
}