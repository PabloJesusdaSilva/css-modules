import headerStyle from "./Header.module.css";

const Header = () => {
  return (
    <header className={headerStyle.header}>
        <div className={headerStyle.headerContent}>
          <h1 className={headerStyle.title}>Codelandia</h1>
          <h2 className={headerStyle.subtitle}>Blog</h2>

          <input placeholder="Pesquisa no blog" className={headerStyle.input} />
        </div>
    </header>
  );
}

export default Header;