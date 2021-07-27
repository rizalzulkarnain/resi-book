import PropTypes from 'prop-types';
import { SearchFormContainer } from '../../styles';

const SearchForm = ({ handleOnChange, str }) => {
  return (
    <SearchFormContainer>
      <form>
        <label>Search : </label>
        <input
          type="text"
          onChange={handleOnChange}
          value={str}
          placeholder="Product Name..."
        />
      </form>
    </SearchFormContainer>
  );
};

SearchForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  str: PropTypes.string.isRequired,
};

export default SearchForm;
