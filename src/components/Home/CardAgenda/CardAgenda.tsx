import { UserContext } from "../../../config/UserContext";
import style from "../Home.module.css";
export default function CardAgenda() {
  const { state } = UserContext();

  console.log(state.array.length != 0);

  return (
    <div className={style.card_agenda}>
      <div className={style.acoes}>
        <span>
          <i className="fa-solid fa-pen"></i>
        </span>
        <span>
          <i className="fa-solid fa-trash"></i>
        </span>
      </div>

      {state.array.map((item) => (
        <ul className="texto" key={item.id}>
          <li>
            <b>Nome:</b> {item.nome}
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
      ))}
    </div>
  );
}
