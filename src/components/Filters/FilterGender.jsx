import PropTypes from 'prop-types';

function FilterGender ({handleGender, filterGender}) {
    return (
            <fieldset className="filter_gender">
                <label>Género:</label>
                <div className="filter_gender_radio">
                <input type="radio" id="male" value="male"
                checked={filterGender === 'male'}
                onChange={(ev) => {
                    handleGender(ev.target.value);
                }}/>
                <label htmlFor="male">Hombre</label>
                <input type="radio" id="female" value="female" checked={filterGender === 'female'}
                onChange={(ev) => {
                    handleGender(ev.target.value);
                }}/>
                <label htmlFor="female">Mujer</label>
                </div>
            </fieldset>
    );
}
FilterGender.propTypes = {
    handleGender: PropTypes.func,
    filterGender: PropTypes.string,
};
export default FilterGender;
