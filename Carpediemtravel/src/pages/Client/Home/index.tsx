import "bootstrap/dist/css/bootstrap.min.css"; // Importa o CSS do Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Importa o JS necessário para o toggle funcionar
import Card from "../../../Components/Card";
import CardContainer from "../../../Components/CardContainer";
import CardDestinos from "../../../Components/CardDestinos";
import Footer from "../../../Components/Footer";
import Header from "../../../Components/Header";
import SearchTravel from "../../../Components/SearchTravel";

import "./styles.css";
import CarrouselParks from "../../../Components/CarrouselParks";

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
          <CardContainer
            text="Destinos mais procurados"
            subtitle="Ver mais destinos..."
            cards={[
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
                  <CardDestinos
                    image="https://i0.wp.com/turismo.eurodicas.com.br/wp-content/uploads/2023/06/legoland-park.jpg?w=750&ssl=1"
                    title="Monique"
                    description="Lorem ipsum dolor sit amet."
                    key={1}
                  />
                  <CardDestinos
                    image="https://i0.wp.com/turismo.eurodicas.com.br/wp-content/uploads/2023/06/legoland-park.jpg?w=750&ssl=1"
                    title="Monique"
                    description="Lorem ipsum dolor sit amet."
                    key={2}
                  />
                  <CardDestinos
                    image="https://i0.wp.com/turismo.eurodicas.com.br/wp-content/uploads/2023/06/legoland-park.jpg?w=750&ssl=1"
                    title="Monique"
                    description="Lorem ipsum dolor sit amet."
                    key={3}
                  />
                  <CardDestinos
                    image="https://i0.wp.com/turismo.eurodicas.com.br/wp-content/uploads/2023/06/legoland-park.jpg?w=750&ssl=1"
                    title="Monique"
                    description="Lorem ipsum dolor sit amet."
                    key={4}
                  />
                </div>
              </>,
            ]}
          />
          <CarrouselParks />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
