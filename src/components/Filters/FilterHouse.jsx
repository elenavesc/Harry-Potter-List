import PropTypes from 'prop-types';
function FilterHouse ({handleHouse}) {
    return(

        <label className='name'>Selecciona la casa:
          <select className='name'
          onChange={(ev) => {
            handleHouse(ev.target.value);
          } }>
            <option value=''>Todas</option>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Ravenclaw">Ravenclaw</option>
          </select>
        </label>
    );
}
FilterHouse.propTypes = {
    handleHouse: PropTypes.func,
};

export default FilterHouse;