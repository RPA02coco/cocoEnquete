import PropTypes from 'prop-types';
import { TextField, InputAdornment } from '@mui/material';

export const errorViewer = (form, tgtName) => {
  let viewerFlg;
  if (form[tgtName].nextClick) {
    viewerFlg = form[tgtName].valueError && form[tgtName].valueError;
  } else {
    viewerFlg = form[tgtName].valueError && (form[tgtName].value !== "") ?
    form[tgtName].valueError :
    false;
  }
  return viewerFlg;
}

const errTextViewer = (form, tgtName) => {
  let viewerText;
  if (form[tgtName].nextClick) {
    viewerText = form[tgtName].valueError && form[tgtName].errorText;
  } else {
    viewerText = form[tgtName].valueError && (form[tgtName].value !== "") ?
    form[tgtName].errorText :
    '';
  }

  return viewerText;
}

export const TextBox = ({ tgtName, form, onChange, required, onBlur }) => {
  return (
    <TextField fullWidth
      label={form[tgtName].label}
      defaultValue={form[tgtName].value === undefined ? '' : form[tgtName].value}
      required={required}
      variant="outlined"
      name={tgtName}
      error={errorViewer(form, tgtName)}
      helperText={errTextViewer(form, tgtName)}
      onInput={onChange}
      onBlur={onBlur}
      sx={{ backgroundColor: '#ffffff' }}
    />
  )
}

TextBox.propTypes = {
  tgtName: PropTypes.string,
  tgtLabel: PropTypes.string,
  form: PropTypes.object,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  required: PropTypes.bool,
};

export const TBwithUnit = ({ tgtName, tgtLabel, form, onChange, required, unit }) => {
  return (
    <TextField fullWidth
      label={tgtLabel}
      defaultValue={form[tgtName].value === undefined ? '' : form[tgtName].value}
      required={required}
      variant="outlined"
      name={tgtName}
      error={form[tgtName].valueError}
      helperText={form[tgtName].valueError && form[tgtName].errorText}
      onChange={onChange}
      sx={{ backgroundColor: '#ffffff' }}
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

