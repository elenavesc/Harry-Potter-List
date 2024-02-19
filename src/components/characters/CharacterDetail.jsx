import { Link, useParams } from "react-router-dom";
import CardDetail from "./CardDetail";
import PropTypes from "prop-types";

function CharacterDetail({ data }) {
  const { urlId } = useParams();

  const cardData = data.find((char) => char.id === urlId);
  if (!cardData) {
    return (
      <section className="cardDetail_page">
        <Link to="/">
          <button className="cardDetail_page_btn">Volver</button>
        </Link>
        <p className="character__notFound">
          No existe ningún personaje con ese nombre
        </p>
      </section>
    );
  }

  return (
    <section className="cardDetail_page">
      <Link to="/">
        <button className="cardDetail_page_btn">Volver</button>
      </Link>
      <CardDetail data={cardData} />
    </section>
  );
}
CharacterDetail.propTypes = {
  data: PropTypes.array,
};

export default CharacterDetail;
