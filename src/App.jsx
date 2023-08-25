import Card from "./components/Card";
import Header from "./partials/Header";

import AppStyles from "./App.module.css";

const App = () => {
  return (
    <>
      <Header />

      <main className={AppStyles.container}>
        <Card
          data="02 de Jul, 2022" 
          title="Agora é oficial: o Windows 11 está vindo!"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis." 
          />
        <Card
          data="02 de Jul, 2022" 
          title="Tim Berners-Lee vai leiloar código-fonte da web"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero." 
          />
        <Card
          data="02 de Jul, 2022" 
          title="Tem Firefox novo no pedaço e você vai querer migrar"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis." 
        />
      </main>
    </>
  );
}

export default App;
