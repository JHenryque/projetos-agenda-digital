import style from "./modal.module.css";

export default function AddLembrete() {
  return (
    <div className={style.modal}>
      <form action="#" className={style.form_}>
        <h2>Formulario de Lembrete</h2>
        <label htmlFor="">Nome:</label>
        <input type="text" placeholder="Digite o nome" />
        <label htmlFor="">Descrição:</label>
        <textarea placeholder="Digite a descrição"></textarea>
        <label htmlFor="">Data:</label>
        <input type="date" placeholder="Digite a data" />
      </form>
    </div>
  );
}
