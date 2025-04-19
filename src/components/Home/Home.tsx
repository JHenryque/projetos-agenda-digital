import CardAgenda from "./CardAgenda/CardAgenda";
import CardLembrete from "./CardLembrete/CardLembrete";
import { UserContext } from "../../config/UserContext";
import style from "./Home.module.css";
import Loader from "../FullPageLoader/FullPageLoader";

export default function Home() {
  const { state } = UserContext();

  return (
    <section className={style.container_home}>
      {state.status === "fetching" ? (
        <Loader />
      ) : state.status === "error" ? (
        <h2>Erro ao carregar os dados</h2>
      ) : (
        <>
          {state.lembretes.length != 0 ? (
            <>
              <fieldset className={style.lembretes}>
                <legend>Lembretes</legend>
                <CardLembrete />
              </fieldset>
            </>
          ) : (
            <h2>Lembretes Vazios</h2>
          )}

          <div className="list_agenda">
            {state.array.length != 0 ? (
              <fieldset className={style.agenda}>
                <legend>Agenda</legend>

                <CardAgenda />
                <CardAgenda />
                <CardAgenda />
                <CardAgenda />
                <CardAgenda />
                <CardAgenda />
              </fieldset>
            ) : (
              <h2>Agenda Vazia</h2>
            )}
          </div>
        </>
      )}
    </section>
  );
}
