import React, { useState } from "react";

export default function LoginForm() {
  // states
  const [prenom, setPrenom] = useState("Rod");

  // comportements
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bienvenue ${prenom}`);
    // Réinitialiser le formulaire si nécessaire
    setPrenom("");
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Hello {prenom}</h1>
      <h2>Formulaire de contact</h2>
      <input
        type="text"
        placeholder="Entrez votre Prénom..."
        value={prenom}
        onChange={(e) => setPrenom(e.target.value)}
        required
      />
      <button type="submit">Envoyer</button>
      <br />
      <h3>Accéder à votre espace</h3>
    </form>
  );
}
