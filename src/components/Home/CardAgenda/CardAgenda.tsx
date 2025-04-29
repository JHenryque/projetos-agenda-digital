import { Link } from "react-router";
import { UserContext } from "../../../config/UserContext";
import style from "../Home.module.css";
import { useState } from "react";
export default function CardAgenda({
  handlerEdtion,
  handlerDelete,
}: {
  handlerEdtion: (tipo: string) => void;
  handlerDelete: (id: number, tipo: any) => void;
}) {
  const { state } = UserContext();
  const [isBone, setIsBone] = useState<number>(0);

  function hendlerIsDone(id: number) {
    if (isBone !== id) {
      setIsBone(id);
      console.log("isBone ", isBone, id);
    } else {
      console.log("isBone", isBone);
      setIsBone(0);
    }
  }

  return (
    <>
      {state.agendamento.map((item) => (
        <div
          className={
            style.card_agenda + " " + (isBone === item.id ? style.done : "")
          }
          key={item.id}
          onClick={() => hendlerIsDone(item.id)}
        >
          {isBone === item.id ? (
            <div className={style.acoes}>
              <span onClick={() => handlerEdtion(item.tipo)}>
                <Link to={`/edit-agenda/${item.id}`}>
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
              <b>Telefone:</b> {item.telefone}
            </li>
            <li>
              <b>Endereço:</b> {item.endereco}, <b>N°:</b> {item.numero}
            </li>
            <li>
              <b>Cidade: </b> {item.cidade}
            </li>
            <li>
              <b>Barrio: </b> {item.barrio}
            </li>
            <li>
              <b>Data Agendado: </b> {item.data_agendado}
            </li>
            <li>
              <b>Horário:</b> {item.horario}
            </li>
            <li>
              <b>Observação:</b> {item.observacao}
            </li>
          </ul>
        </div>
      ))}
    </>
  );
}
