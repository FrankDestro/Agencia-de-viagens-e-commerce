import "bootstrap/dist/css/bootstrap.min.css"; // Importa o CSS do Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Importa o JS necessário para o toggle funcionar
import Footer from "../../../Components/Footer";

import Header from "../../../Components/Header";
import "./styles.css";
import SearchTravel from "../../../Components/SearchTravel";

function Home() {
  return (
    <>
      <Header />
      <div className="page-container">
        <SearchTravel />
        <div className="content-wrap"></div>

        <Footer />
      </div>
    </>
  );
}

export default Home;
