import React, { useState } from 'react'


export default function LoginPage() {
  // states
  const [prenom, setPrenom] = useState("Rod");

  // comportements
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bienvenue ${prenom}`);
    // Réinitialiser le formulaire si nécessaire
    setPrenom("");
  };

  // affichage
  return (
    <div>
      <h1>Hello {prenom}</h1>

      <form action="submit" onSubmit={handleSubmit}>
        <h2>Formulaire de contact</h2>
        <input
          type="text"
          placeholder="Entrez votre Prénom..."
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          required
        />
        <button type="submit">Envoyer</button>
      </form>

      <br />
      <h3>Accéder à votre espace</h3>
    </div>
  );
}