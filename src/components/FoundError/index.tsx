import { Link } from "react-router";

export default function FoundError() {
  return (
    <div>
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
