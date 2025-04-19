import { UserContext } from "../../../config/UserContext";
import style from "../Home.module.css";

export default function CardLembrete() {
  const { state } = UserContext();

  return (
    <div className={style.card_lembretes}>
      <div className={style.acoes}>
        <span>
          <i className="fa-solid fa-pen"></i>
        </span>
        <span>
          <i className="fa-solid fa-trash"></i>
        </span>
      </div>

      {state.lembretes.map((item) => (
        <ul className="texto" key={item.id}>
          <li>
            <b>Nome:</b> {item.nome}
          </li>
          <li>
            <b>Descrição:</b> {item.descricao}
          </li>
          <li>
            <b>Data:</b> {item.data}
          </li>
        </ul>
      ))}
    </div>
  );
}
