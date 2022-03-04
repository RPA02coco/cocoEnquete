import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

const TextBox = ({ tgtName, tgtLabel, form, onChange, required }) => {
  console.log('textbox');
  return (
    <TextField fullWidth
      label={tgtLabel}
      defaultValue={form[tgtName].value === undefined ? '' : form[tgtName].value}
      required={required}
      variant="outlined"
      size="small"
      name={tgtName}
      error={form[tgtName].valueError}
      helperText={form[tgtName].valueError && form[tgtName].errorText}
      onChange={onChange} />
  )
}

TextBox.propTypes = {
  tgtName: PropTypes.string,
  tgtLabel: PropTypes.string,
  form: PropTypes.object,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};

export default TextBox;