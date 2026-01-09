import { useParams, useNavigate } from "react-router-dom";

export default function OrderPage() {
  // states
  const{prenom} = useParams();
  const navigate = useNavigate();
  // comportements
  const handleLogout = () => {
    navigate ("/")
  };

return (
    <div>
      <h1>Bonjour {prenom} </h1>
  
      <button onClick={handleLogout}>Déconnexion</button>
</div>
  );
}
