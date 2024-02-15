import FilterGender from "./FilterGender";
import FilterHouse from "./FilterHouse";
import FilterName from "./FilterName";
import '../../scss/layout/Filters.scss';
import PropTypes from 'prop-types';

function Filters({
    handleName,
    filterName,
    handleHouse,
    handleGender,
    filterGender,
    handleReset,

}) {
    return (
        <form>
            <FilterName handleName={handleName} filterName={filterName}/>
            <FilterHouse handleHouse={handleHouse}/>
            <div className="filters_container">
                <FilterGender handleGender={handleGender} filterGender={filterGender}/>
            </div>
        <button className="resetbtn" onClick={(ev) =>{
            handleReset(ev);
        } }>Reset</button>
        </form>
        
    );
}

Filters.propTypes = {
    handleName: PropTypes.func,
    filterName: PropTypes.string.isRequired,
    handleHouse: PropTypes.func,
    handleGender: PropTypes.func,
    filterGender: PropTypes.string,
    handleReset: PropTypes.func,
  };
  
  export default Filters;