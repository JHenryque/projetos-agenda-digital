import { UserContext } from "../../../config/UserContext";
import style from "../Home.module.css";

export default function CardLembrete({
  handlerEdtion,
  handlerDelete,
}: {
  handlerEdtion: (id: number) => void;
  handlerDelete: (id: number) => void;
}) {
  const { state } = UserContext();

  console.log("status", state.status);
  console.log("lembretes", state.lembretes);

  return (
    <>
      {state.lembretes.map((item) => (
        <div className={style.card_lembretes} key={item.id}>
          <div className={style.acoes}>
            <span onClick={() => handlerEdtion(item.id)}>
              <i className="fa-solid fa-pen"></i>
            </span>
            <span onClick={() => handlerDelete(item.id)}>
              <i className="fa-solid fa-trash"></i>
            </span>
          </div>

          <ul className="texto">
            <li>
              <b>Nome:</b> {item.name}
            </li>
            <li>
              <b>Descrição:</b> {item.descricao}
            </li>
            <li>
              <b>Data:</b> {item.date}
            </li>
          </ul>
        </div>
      ))}
    </>
  );
}
