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
          label={tgtLabel}
          onChange={onChange}
        >
          {tgtArray.map((item) => {
            return <MenuItem value={item} key={`key_${tgtName}${item}`}>{item}</MenuItem>
          })}
        </Select>
      </FormControl>
      {/* <Autocomplete
        disablePortal
        size='small'
        defaultValue={form[tgtName].value === undefined ? '' : form[tgtName].value}
        value={form[tgtName]?.value ?? ""}
        id={tgtName}
        onChange={onChange}
        options={tgtArray}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={tgtLabel} name={tgtName} />}
      /> */}
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
  // console.log('pulldwnobjの値 : ', Object.keys(tgtObj).find((item) => tgtObj[item] === form[tgtName].value));
  return (
    <Grid item xs={12} md={12}>
      <FormControl fullWidth>
        <InputLabel id={`${tgtName}-label`}>{tgtLabel}</InputLabel>
        <Select
          labelId={`${tgtName}-label`}
          id={tgtName}
          value={form[tgtName].value ? '' : Object.keys(tgtObj).find((item) => tgtObj[item] === form[tgtName].value)}
          label={tgtLabel}
          onChange={onChange}
        >
          {Object.keys(tgtObj).map((item) => {
            return <MenuItem value={item} key={`key_${tgtName}${item}`}>{item}</MenuItem>
          })}
        </Select>
      </FormControl>
      {/* <Autocomplete
        disablePortal
        size='small'
        value={Object.keys(tgtObj).find((item) => tgtObj[item] === form[tgtName].value)}
        id={tgtName}
        onChange={onChange}
        options={Object.keys(tgtObj)}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={tgtLabel} name={tgtName} />}
      /> */}
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