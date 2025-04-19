import style from "./Header.module.css";
export default function Header() {
  const data = new Date();
  const horas = data.getHours() + ":" + data.getMinutes();

  return (
    <header className={style.container_header}>
      <span>
        AGENDA<strong> DIGITAL</strong>
      </span>
      <div className="data-hora">
        <span>DATA: {data.toLocaleDateString()}</span> {" - "}
        <span>HORA: {horas}</span>
      </div>
    </header>
  );
}
