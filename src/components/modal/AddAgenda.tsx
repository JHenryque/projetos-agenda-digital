import style from "./modal.module.css";

export default function AddAgenda() {
  return (
    <div className={style.modal}>
      <form action="#" className={style.form_}>
        <h2>Formulario de Agenda</h2>
        <label htmlFor="nome">Nome:</label>
        <input type="text" placeholder="Digite o Nome" />
        <label htmlFor="telefone">Telefone:</label>
        <input type="text" placeholder="Digite o Telefone" />
        <label htmlFor="endereco">Endereço:</label>
        <input type="text" placeholder="Digite o Endereço" />
        <label htmlFor="numero">N°:</label>
        <input type="text" placeholder="Digite o Numero da casa" />
        <label htmlFor="cidade">Cidade:</label>
        <input type="text" placeholder="Digite a Cidade" />
        <label htmlFor="barrio">Barrio:</label>
        <input type="text" placeholder="Digite o Barrio" />
        <label htmlFor="data-agendada">Data Marcada:</label>
        <input type="date" placeholder="Digite a Data Agendada" />
        <label htmlFor="hora">Hora Marcada:</label>
        <input type="time" placeholder="Digite a Hora Marcada" />
        <label htmlFor="observacao">Observação:</label>
        <textarea placeholder="Digite a o Observação"></textarea>
      </form>
    </div>
  );
}
