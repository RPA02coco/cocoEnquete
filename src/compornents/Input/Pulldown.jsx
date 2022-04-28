import PropTypes from 'prop-types';
import { Select, Grid, FormControl, InputLabel, MenuItem, FormHelperText } from '@mui/material';

export const Pulldown = ({ tgtName, tgtArray, tgtLabel, onChange, form, required }) => {
  const errflg = form[tgtName].valueError && form[tgtName].touch;
  console.log('form[tgtName]?.value', form[tgtName].value);
  return (
    <Grid item xs={12} md={12}>
      <FormControl
        fullWidth
        error={errflg ? true : false}
      >
        <InputLabel id={`${tgtName}-label`}>{tgtLabel}</InputLabel>
        <Select
          labelId={`${tgtName}-label`}
          id={tgtName}
          value={form[tgtName]?.value ?? ""}
          name={tgtName}
          label={tgtLabel}
          error={errflg}
          onChange={onChange}
          sx={{ backgroundColor: '#ffffff' }}
          required={required}
          native={true}
        >
          {tgtArray.map((item) => {
            return <option value={item} key={`key_${tgtName}${item}`}>{item}</option>
          })}
        </Select>
      </FormControl>
      {errflg ?
        <FormHelperText
          sx={{ color: '#d32f2f' }}>
          {form[tgtName].errorText}
        </FormHelperText>
        :
        ''
      }
    </Grid>
  )
}

Pulldown.propTypes = {
  tgtName: PropTypes.string,
  tgtArray: PropTypes.array,
  tgtLabel: PropTypes.string,
  onChange: PropTypes.func,
  form: PropTypes.object,
  required: PropTypes.bool,
};

export const PulldownObj = ({ tgtName, tgtObj, tgtLabel, onChange, form }) => {
  return (
    <Grid item xs={12} md={12}>
      <FormControl fullWidth>
        <InputLabel id={`${tgtName}-label`}>{tgtLabel}</InputLabel>
        <Select
          labelId={`${tgtName}-label`}
          id={tgtName}
          value={form[tgtName].value.min === '' ? '' : Object.keys(tgtObj).find((item) => tgtObj[item] === form[tgtName].value)}
          name={tgtName}
          label={tgtLabel}
          onChange={onChange}
          sx={{ backgroundColor: '#ffffff' }}
          native={true}
        >
          {Object.keys(tgtObj).map((item) => {
            return <option value={item} key={`key_${tgtName}${item}`}>{item}</option>
          })}
        </Select>
      </FormControl>
    </Grid>
  )
}

PulldownObj.propTypes = {
  tgtName: PropTypes.string,
  tgtObj: PropTypes.object,
  tgtLabel: PropTypes.string,
  onChange: PropTypes.func,
  form: PropTypes.object,
};