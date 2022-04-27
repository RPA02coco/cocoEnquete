import PropTypes from 'prop-types';
import { Grid, FormLabel, RadioGroup, FormControlLabel, Radio, FormHelperText } from '@mui/material';

const RadioButton = ({ tgtName, tgtArray, form, tgtLabel, onChange, required }) => {
  const errflg = form[tgtName].valueError && form[tgtName].touch;
  return (
    <div className='MuiFormControl-root'>
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
      <Grid item xs={12} md={12}>
        <RadioGroup
          aria-labelledby={tgtName}
          defaultValue={tgtArray[0]}
          row={true}
          name={`${tgtName}-radio-buttons-group`}
        >
          {tgtArray.map((item, index) => {
            return (
              <Grid item xs={6} md={4} key={`key_${tgtArray}${item}`}>
                <FormControlLabel value={item} labelPlacement='end' control={
                  <Radio
                    id={`id_${tgtName}${index}`}
                    checked={form[tgtName].value.includes(item)}
                    onChange={onChange}
                    value={item}
                    name={tgtName}
                    required={required}
                  />}
                  label={item} />
              </Grid>
            );
          })}
        </RadioGroup>
      </Grid>
      {/* </Grid> */}
    </div >
  )
}

RadioButton.propTypes = {
  tgtName: PropTypes.string,
  tgtArray: PropTypes.array,
  form: PropTypes.object,
  tgtLabel: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};

export default RadioButton;