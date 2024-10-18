import './styles.css';

type CardProps = {
  text: string;
  subtitle: string | { text: string; href: string }; 
  cards: JSX.Element[];
};

function CardContainer({ text, subtitle, cards }: CardProps) {
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
      {typeof subtitle === 'string' ? (
        <p className="package-subtitle">{subtitle}</p>
      ) : (
        <a className="package-subtitle-link" href={subtitle.href}>
          {subtitle.text}
        </a>
      )}
    </div>
  );
}

export default CardContainer;
