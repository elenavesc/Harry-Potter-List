import CharacterCard from './CharacterCard';
import '../../scss/layout/CharacterLIst.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CharacterList({ data, filterName }) {
  if (data.length === 0) {
    return (
      <p className="character_notFound">
        No existe ningún personaje que se llame {filterName}
      </p>
    );
  }

  const dataList = data.map((char) => {
    return (
      <li key={char.id} className={`character_list_card ${char.house}`}>
        <Link to={`/details/${char.id}`} className="link">
          <CharacterCard data={char} style="card" />
        </Link>
      </li>
    );
  });
  return (
    <section className="character">
      <ul className="character_list">{dataList}</ul>
    </section>
  );
}

CharacterList.propTypes = {
  data: PropTypes.array,
  filterName: PropTypes.string,
};

export default CharacterList;