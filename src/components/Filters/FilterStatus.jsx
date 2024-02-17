import PropTypes from 'prop-types';

function FilterStatus ({handleStatus, filterStatus}) {
    return (
            <fieldset className="filter_status">
                <label>Estado:</label>
                <div className="filter_status_radio">
                <input type="radio" id="alive" value="alive"
                checked={filterStatus === true}
                onChange={(ev) => {
                    handleStatus(ev.target.value);
                }}/>
                <label htmlFor="alive">Vivo</label>
                <input type="radio" id="dead" value="dead" checked={filterStatus === false}
                onChange={(ev) => {
                    handleStatus(ev.target.value);
                }}/>
                <label htmlFor="dead">Muerto</label>
                </div>
            </fieldset>
    );
}
FilterStatus.propTypes = {
    handleStatus: PropTypes.func,
    filterStatus: PropTypes.string,
};
export default FilterStatus;