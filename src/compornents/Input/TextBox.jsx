import PropTypes from 'prop-types';
import { TextField, InputAdornment } from '@mui/material';
import './TextBox.css';

export const errorViewer = (form, tgtName) => {
  let viewerFlg;
  if (form[tgtName].touch) {
    viewerFlg = form[tgtName].valueError;
  } else {
    viewerFlg = form[tgtName].valueError && (form[tgtName].value !== "") ? form[tgtName].valueError : false;
  }
  return viewerFlg;
}

export const errTextViewer = (form, tgtName) => {
  let viewerText;
  if (form[tgtName].touch) {
    viewerText = form[tgtName].valueError && form[tgtName].errorText;
  } else {
    viewerText = form[tgtName].valueError && (form[tgtName].value !== "") ? form[tgtName].errorText : '';
  }

  return viewerText;
}

const TextBoxContent = ({ tgtName, tgtLabel, form, onChange, required, onBlur }) => {
  const errflg = form[tgtName].valueError && form[tgtName].touch;
  // console.log('form[tgtName].value',form[tgtName].value, form);
  return (
    <TextField fullWidth
      label={tgtLabel}
      value={form[tgtName].value}
      required={required}
      variant="outlined"
      name={tgtName}
      id={tgtName}
      error={errflg}
      helperText={errflg ? form[tgtName].errorText : ''}
      onChange={onChange}
      onBlur={onBlur}
      sx={{ backgroundColor: '#ffffff' }}
    />
  )
}

TextBoxContent.propTypes = {
  tgtName: PropTypes.string,
  tgtLabel: PropTypes.string,
  form: PropTypes.object,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  required: PropTypes.bool,
};

export const TextBox = ({ tgtName, tgtLabel, form, onChange, required, onBlur }) => {
  return (
    <TextBoxContent
      tgtName={tgtName}
      tgtLabel={tgtLabel}
      form={form}
      onChange={onChange}
      required={required}
      onBlur={onBlur} />
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

