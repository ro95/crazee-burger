import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "src/components/layout/Navbar";

export default function OrderPage() {
  // states
  const{prenom} = useParams();


return (
  <div>
    <Navbar>
      <h1>Bonjour {prenom} </h1>

      <Link to="/">Déconnexion</Link>
    </Navbar>
  </div>
);
}