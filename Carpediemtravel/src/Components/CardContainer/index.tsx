import './styles.css';


type CardProps = {
    text: string;
    cards: JSX.Element[];
  };
  
  function CardContainer({ text, cards }: CardProps) {
    return (
      <div className="container-package">
        <p className="package-title">{text}</p>
        <div className="content-container">
          {cards.map((card, index) => (
            <div key={index} className="card-item">
              {card}
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default CardContainer;
  