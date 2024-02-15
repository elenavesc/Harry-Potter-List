import PropTypes from 'prop-types';

function FilterName ({handleName, filterName}) {
    const handleEnter = (ev) => {
        if (ev.key === 'Enter'){
            ev.preventDefault();
        }
    };

    return(
    <label>
        Buscar por personaje:
          <input name="name" type="text" id="name" placeholder="Ej. Harry Potter" value={filterName} onChange={(ev) => { 
            handleName(ev.target.value);}}
            onKeyDown= {handleEnter} />
        </label>
        );
}
FilterName.propTypes = {
    handleName: PropTypes.func,
    filterName: PropTypes.string,
};
export default FilterName;