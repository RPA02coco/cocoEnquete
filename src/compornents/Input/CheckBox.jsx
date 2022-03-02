import PropTypes from 'prop-types';
import { TextField, Grid, FormControlLabel, Checkbox } from '@mui/material';

const CheckBox = ({ tgtName, tgtArray ,onChange, form}) => {
  {tgtArray.map((item, index) => {
    return (
      <Grid item xs={12} md={6} key={`key_${tgtName}${item}`}>
        <FormControlLabel control={
          <Checkbox
            id={`id_${tgtName}${index}`}
            value={item}
            name={tgtName}
            checked={form[tgtName].value.includes(item)}
            onChange={onChange}
          />}
          label={item} />
        {form.tgtName.value.includes('その他') && item === 'その他' &&
          <TextField fullWidth
            label="その他詳細"
            defaultValue={form.tgtName.value.indexOf('その他') === -1 ? '' : form.tgtName.value[form.tgtName.value.indexOf('その他')]}
            variant="outlined"
            size="small"
            name={`${tgtName}Other`}
            error={form.tgtName.valueError}
            helperText={form.tgtName.valueError && form.tgtName.errorText}
            onChange={onChange} />}
      </Grid>
    );
  })}
}

CheckBox.propTypes = {
  tgtName: PropTypes.string,
  tgtArray: PropTypes.array,
  form: PropTypes.object,
  onChange: PropTypes.func,
};

export default CheckBox;