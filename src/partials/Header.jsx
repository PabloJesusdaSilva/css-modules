import HeaderStyle from "./Header.module.css";

const Header = () => {
  return (
    <header className={HeaderStyle.header}>
        <div className={HeaderStyle.headerContent}>
          <h1 className={HeaderStyle.title}>Codelandia</h1>
          <h2 className={HeaderStyle.subtitle}>Blog</h2>

          <input placeholder="Pesquisa no blog" className={HeaderStyle.input} />
        </div>
    </header>
  );
}

export default Header;