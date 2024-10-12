import { Outlet } from "react-router-dom";
import Header from "../../../Components/Header";
import SubMenu from "../../../Components/NavbarMenus";
import TravelCarousel from "../../../Components/TravelCarrousel";
import SearchTravel from "../../../Components/SearchTravel";
import './styles.css';
import TravelCard from "../../../Components/CardTravel";
import Footer from "../../../Components/Footer";



function Home() {

  const travelData = {
    image: 'https://investnews.com.br/wp-content/uploads/2024/02/viagem_3-1200x800.png', // Substitua pelo URL da imagem desejada
    title: 'Viagem para a Praia',
    description: 'Aproveite dias ensolarados na praia com pacotes imperdíveis!',
    price: 'A partir de R$ 999,00',
  };

  return (
    <div>
    <Header />
    <SubMenu />
    <TravelCarousel />
    <div className="search-travel-container">
      <SearchTravel />
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <TravelCard {...travelData} />
      <TravelCard {...travelData} />
      <TravelCard {...travelData} />
      <TravelCard {...travelData} />
      <TravelCard {...travelData} />
      <TravelCard {...travelData} />
      <TravelCard {...travelData} />
      <TravelCard {...travelData} />
      <TravelCard {...travelData} />
      <TravelCard {...travelData} />
      <TravelCard {...travelData} />
      <TravelCard {...travelData} />
      <TravelCard {...travelData} />
      {/* Você pode adicionar mais TravelCard aqui */}
    </div>
    </div>
    <Outlet />
    <Footer/>
  </div>
  );
}

export default Home;
