import CardStyle from "./Card.module.css";

const Card = ({ data, title, description }) => {
  return (
    <div className={CardStyle.card}>
      <spa className={CardStyle.data}>{data}</spa>

      <h2 className={CardStyle.title}>{title}</h2>
      <p className={CardStyle.description}>{description}</p>
    </div>
  );
}

export default Card;