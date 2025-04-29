import CardAgenda from "./CardAgenda/CardAgenda";
import CardLembrete from "./CardLembrete/CardLembrete";
import { UserContext } from "../../config/UserContext";
import style from "./Home.module.css";
import Loader from "../FullPageLoader/FullPageLoader";
import { useEffect, useState } from "react";
import EditeLembrete from "../modal/EditeLembrete";
import EditeAgenda from "../modal/EditeAgenda";

export default function Home() {
  const { state, dispatch } = UserContext();
  const [editLembrete, setEditLembrete] = useState(false);
  const [editAgenda, setEditAgenda] = useState(false);

  function handlerEdtion(tipo: string) {
    if (confirm(`Deseja editar?`)) {
      if (tipo === "lembrete") {
        setEditLembrete(true);
      } else {
        setEditAgenda(true);
      }
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

  useEffect(() => {
    localStorage.setItem("lembretes", JSON.stringify(state.lembretes));
    localStorage.setItem("agendamento", JSON.stringify(state.agendamento));
  }, [state.lembretes, state.agendamento]);

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
                {editLembrete && <EditeLembrete />}
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
                {editAgenda && <EditeAgenda />}
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
