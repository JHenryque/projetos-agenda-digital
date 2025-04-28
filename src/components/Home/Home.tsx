import CardAgenda from "./CardAgenda/CardAgenda";
import CardLembrete from "./CardLembrete/CardLembrete";
import { UserContext } from "../../config/UserContext";
import style from "./Home.module.css";
import Loader from "../FullPageLoader/FullPageLoader";

export default function Home() {
  const { state, dispatch } = UserContext();

  function handlerEdtion(id: number) {
    if (confirm(`Deseja editar? ${id}`)) {
      console.log("vc clicou para editar", id);
    }
  }

  function handlerDelete(id: number, tipo: string) {
    if (confirm(`Deseja deletar?`)) {
      if (tipo === "lembrete") {
        dispatch({ type: "setDeleteLembrete", payload: id });
      } else {
        dispatch({ type: "setDeleteAgendamento", payload: id });
      }
    }
    dispatch({ type: "setStatus", payload: "ready" });
    return id;
  }

  return (
    <section className={style.container_home}>
      {state.status === "fetching" ? (
        <Loader />
      ) : state.status === "error" ? (
        <h2>Erro ao carregar os dados</h2>
      ) : (
        <>
          {state.lembretes.length > 0 ? (
            <>
              <fieldset className={style.lembretes}>
                <legend>Lembretes</legend>
                <CardLembrete
                  handlerEdtion={handlerEdtion}
                  handlerDelete={handlerDelete}
                />
              </fieldset>
            </>
          ) : (
            <h2>Lembretes Vazios</h2>
          )}

          <div className="list_agenda">
            {state.agendamento.length > 0 ? (
              <fieldset className={style.agenda}>
                <legend>Agenda</legend>

                <CardAgenda
                  handlerEdtion={handlerEdtion}
                  handlerDelete={handlerDelete}
                />
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
