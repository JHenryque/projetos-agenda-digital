import { Link } from "react-router";
import "../../index.css";

export default function FoundError() {
  return (
    <div className="not-found">
      <h1>
        <i>STATUS:</i> 404
      </h1>
      <h2>Página Não Encontrado!! 🚫</h2>
      <p>
        Clique a <Link to={"/"}>Aqui</Link> para voltar
      </p>
    </div>
  );
}
