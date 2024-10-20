import "bootstrap/dist/css/bootstrap.min.css"; // Importa o CSS do Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Importa o JS necessário para o toggle funcionar
import Footer from "../../../Components/Footer";

import Card from "../../../Components/Card";
import CardContainer from "../../../Components/CardContainer";
import Header from "../../../Components/Header";
import SearchTravel from "../../../Components/SearchTravel";
import "./styles.css";

function Home() {
  const travelData1 = {
    image:
      "https://img.freepik.com/fotos-gratis/paisagem-natural_181624-30165.jpg?t=st=1729446185~exp=1729449785~hmac=e335cd69ab504ebc64fe248785065fa570aa3f3e1501e776a1b9e1889c45e429&w=1800",
    title: "Santiago",
    description: "Saindo de São paulo",
    going: "16/11/2024",
    back: "19/12/2024",
    price: "A partir de R$ 999,00",
    installment: "4x",
    priceInstallment: "R$ 327,49",
  };

  return (
    <>
      <Header />
      <div className="page-container">
        <SearchTravel />
        <div className="content-wrap">
          <CardContainer
            text="Pacote e Ofertas"
            subtitle=""
            cards={[
              <Card {...travelData1} />,
              <Card {...travelData1} />,
              <Card {...travelData1} />,
              <Card {...travelData1} />,
              <Card {...travelData1} />,
              <Card {...travelData1} />,
              <Card {...travelData1} />,
              <Card {...travelData1} />,
            ]}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
