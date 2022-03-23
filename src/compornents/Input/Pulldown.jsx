import PropTypes from 'prop-types';
import { Select, Grid, FormControl, InputLabel, MenuItem, Autocomplete, TextField } from '@mui/material';

export const Pulldown = ({ tgtName, tgtArray, tgtLabel, onChange, form }) => {
  return (
    <Grid item xs={12} md={12}>
      <FormControl fullWidth>
        <InputLabel id={`${tgtName}-label`}>{tgtLabel}</InputLabel>
        <Select
          labelId={`${tgtName}-label`}
          id={tgtName}
          value={form[tgtName]?.value ?? ""}
          name={tgtName}
          label={tgtLabel}
          onChange={onChange}
          sx={{ backgroundColor: '#ffffff' }}
        >
          {tgtArray.map((item) => {
            return <MenuItem value={item} key={`key_${tgtName}${item}`}>{item}</MenuItem>
          })}
        </Select>
      </FormControl>
    </Grid>
  )
}

Pulldown.propTypes = {
  tgtName: PropTypes.string,
  tgtArray: PropTypes.array,
  tgtLabel: PropTypes.string,
  onChange: PropTypes.func,
  form: PropTypes.object,
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
        >
          {Object.keys(tgtObj).map((item) => {
            return <MenuItem value={item} key={`key_${tgtName}${item}`}>{item}</MenuItem>
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