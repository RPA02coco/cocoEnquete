import PropTypes from 'prop-types';

  const CheckBox = ({id, value, checked, onChange, name}) => {
    return (
      <input
        id={id}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        value={value}
      />
    )
  }
  
  CheckBox.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    name:PropTypes.string,
};

export default CheckBox;