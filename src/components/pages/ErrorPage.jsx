import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  const handleGohome = () => {
    navigate("/")
  };

  return (
    <div>
      <h1>Error PAGE GET OUT</h1>
      <button onClick={handleGohome}>Retourner à la page d'accueil</button>
    </div>
  );

}