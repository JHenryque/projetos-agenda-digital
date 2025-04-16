import style from "./Home.module.css";

export default function Home() {
  return (
    <section className={style.container_home}>
      <fieldset className={style.lembretes}>
        <legend>Lembretes</legend>

        <div className={style.card_lembretes}>
          <div className={style.acoes}>
            <span>
              <i className="fa-solid fa-pen"></i>
            </span>
            <span>
              <i className="fa-solid fa-trash"></i>
            </span>
          </div>

          <ul>
            <li>
              <b>Nome:</b> Aula de react
            </li>
            <li>
              <b>Descrição:</b> Aula de react
            </li>
            <li>
              <b>Data:</b> 15/04/2023
            </li>
          </ul>
        </div>
        <div className={style.card_lembretes}>
          <div className={style.acoes}>
            <span>
              <i className="fa-solid fa-pen"></i>
            </span>
            <span>
              <i className="fa-solid fa-trash"></i>
            </span>
          </div>

          <ul>
            <li>
              <b>Nome:</b> Aula de react
            </li>
            <li>
              <b>Descrição:</b> Aula de react
            </li>
            <li>
              <b>Data:</b> 15/04/2023
            </li>
          </ul>
        </div>
        <div className={style.card_lembretes}>
          <div className={style.acoes}>
            <span>
              <i className="fa-solid fa-pen"></i>
            </span>
            <span>
              <i className="fa-solid fa-trash"></i>
            </span>
          </div>

          <ul>
            <li>
              <b>Nome:</b> Aula de react
            </li>
            <li>
              <b>Descrição:</b> Aula de react
            </li>
            <li>
              <b>Data:</b> 15/04/2023
            </li>
          </ul>
        </div>
      </fieldset>

      <div className="list_agenda">
        <fieldset className={style.agenda}>
          <legend>Agendados</legend>

          <div className={style.card_agenda}>
            <div className={style.acoes}>
              <span>
                <i className="fa-solid fa-pen"></i>
              </span>
              <span>
                <i className="fa-solid fa-trash"></i>
              </span>
            </div>

            <ul className="texto">
              <li>
                <b>Nome:</b> Do cliente
              </li>
              <li>
                <b>Telefone:</b> (99) 99999-9999
              </li>
              <li>
                <b>Endereço:</b> Rua do cliente <b>N°:</b> 205
              </li>
              <li>
                <b>Cidade: </b> Garanhuns
              </li>
              <li>
                <b>Barrio: </b> Boa Vista
              </li>
              <li>
                <b>Data Agendado: </b> 15/04/2025
              </li>
              <li>
                <b>Horário:</b> 08:00 - 09:00
              </li>
              <li>
                <b>Observação:</b> Observação do cliente
              </li>
            </ul>
          </div>
          <div className={style.card_agenda}>
            <div className={style.acoes}>
              <span>
                <i className="fa-solid fa-pen"></i>
              </span>
              <span>
                <i className="fa-solid fa-trash"></i>
              </span>
            </div>

            <ul className="texto">
              <li>
                <b>Nome:</b> Do cliente
              </li>
              <li>
                <b>Telefone:</b> (99) 99999-9999
              </li>
              <li>
                <b>Endereço:</b> Rua do cliente <b>N°:</b> 205
              </li>
              <li>
                <b>Cidade: </b> Garanhuns
              </li>
              <li>
                <b>Barrio: </b> Boa Vista
              </li>
              <li>
                <b>Data Agendado: </b> 15/04/2025
              </li>
              <li>
                <b>Horário:</b> 08:00 - 09:00
              </li>
              <li>
                <b>Observação:</b> Observação do cliente
              </li>
            </ul>
          </div>
        </fieldset>
      </div>
    </section>
  );
}
