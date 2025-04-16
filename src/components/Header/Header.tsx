import style from "./Header.module.css";
export default function Header() {
  return (
    <header className={style.container_header}>
      <span>
        AGENDA<strong> DIGITAL</strong>
      </span>
      <div className="data-hora">
        <span>DATA: 15/04/2023</span> - <span>HORA: 10:00</span>
      </div>
    </header>
  );
}
