import PropTypes from 'prop-types';
import { Autocomplete, TextField, Grid } from '@mui/material';

export const Pulldown = ({ tgtName, tgtArray, tgtLabel, onChange, form }) => {
  return (
    <Grid item xs={12} md={12}>
      <Autocomplete
        disablePortal
        size='small'
        defaultValue={form[tgtName].value === undefined ? '' : form[tgtName].value}
        id={tgtName}
        onChange={onChange}
        options={tgtArray}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={tgtLabel} name={tgtName} />}
      />
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
  let setDefValue = [''];
  if (form[tgtName].value && form[tgtName].value !== '') {
    setDefValue = Object.keys(tgtObj).filter((item) => tgtObj[item] === form[tgtName].value);
  }
  // console.log('setValue : ', setDefValue);
  return (
    <Grid item xs={12} md={12}>
      <Autocomplete
        disablePortal
        size='small'
        value={setDefValue[0]}
        id={tgtName}
        onChange={onChange}
        options={Object.keys(tgtObj)}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={tgtLabel} name={tgtName} />}
      />
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