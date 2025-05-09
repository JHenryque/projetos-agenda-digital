import { Link } from "react-router";
import { UserContext } from "../../../config/UserContext";
import style from "../Home.module.css";
import { useState } from "react";

export default function CardLembrete({
  handlerEdtion,
  handlerDelete,
}: {
  handlerEdtion: (typo: string) => void;
  handlerDelete: (id: number, tipo: any) => void;
}) {
  const { state } = UserContext();
  const [isBone, setIsBone] = useState<number>(0);

  function hendlerIsDone(id: number) {
    if (isBone !== id) {
      setIsBone(id);
    } else {
      console.log("isBone", isBone);
      setIsBone(0);
    }
  }

  return (
    <>
      {state.lembretes.map((item) => (
        <div
          className={
            style.card_lembretes + " " + (isBone === item.id ? style.done : "")
          }
          key={item.id}
          onClick={() => hendlerIsDone(item.id)}
        >
          {isBone === item.id ? (
            <div className={isBone === item.id ? style.acoes : ""}>
              <span onClick={() => handlerEdtion(item.tipo)}>
                <Link to={`/edit-lembrete/${item.id}`}>
                  <i className="fa-solid fa-pen"></i>
                </Link>
              </span>
              <span onClick={() => handlerDelete(item.id, item.tipo)}>
                <i className="fa-solid fa-trash"></i>
              </span>
            </div>
          ) : (
            ""
          )}
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
