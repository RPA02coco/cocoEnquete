import PropTypes from 'prop-types';
import { Grid, FormControlLabel, Checkbox, FormLabel, FormHelperText } from '@mui/material';

const CheckBox = ({ tgtName, tgtLabel, tgtArray, onChange, form, required }) => {
  const errflg = form[tgtName].valueError && form[tgtName].touch;
  return (
    <Grid container className='MuiFormControl-root'>
      <Grid item xs={12} md={12} key={`key_${tgtName}_label`}>
        <FormLabel
          id={tgtName}
          error={errflg ? true : false}
        >
          {tgtLabel}
        </FormLabel>
        {errflg ?
          <FormHelperText
            sx={{ color: '#d32f2f' }}>
            {form[tgtName].errorText}
          </FormHelperText>
          :
          ''
        }
      </Grid>
      {
        tgtArray.map((item, index) => {
          return (
            <Grid item xs={12} md={6} key={`key_${tgtName}${item}`}>
              <FormControlLabel control={
                <Checkbox
                  id={`id_${tgtName}${index}`}
                  value={item}
                  name={tgtName}
                  checked={form[tgtName].value.includes(item)}
                  onChange={onChange}
                  required={required}
                />}
                label={item} />
            </Grid>
          );
        })
      }
    </Grid>
  )
}

CheckBox.propTypes = {
  tgtName: PropTypes.string,
  tgtLabel: PropTypes.string,
  tgtArray: PropTypes.array,
  form: PropTypes.object,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};

export default CheckBox;