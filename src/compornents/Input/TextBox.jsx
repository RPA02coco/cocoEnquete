import PropTypes from 'prop-types';
import { TextField, InputAdornment } from '@mui/material';

export const TextBox = ({ tgtName, tgtLabel, form, onChange, required }) => {
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

export const TBwithUnit = ({ tgtName, tgtLabel, form, onChange, required, unit }) => {
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
      onChange={onChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            {unit}
          </InputAdornment>
        ),
      }}
       />
  )
}

TBwithUnit.propTypes = {
  tgtName: PropTypes.string,
  tgtLabel: PropTypes.string,
  form: PropTypes.object,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  unit: PropTypes.string,
};

