import PropTypes from 'prop-types';
import { Grid, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import SubItems from '../Box/SubItems';

const RadioButton = ({ tgtName, tgtArray, form, tgtLabel, onChange }) => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} md={12}>
        <FormLabel id={`${tgtName}-radio-buttons-group-label`}>
          <SubItems Sentence={tgtLabel} />
        </FormLabel>
      </Grid>
      <Grid item xs={12} md={12}>
        <RadioGroup
          aria-labelledby={`${tgtName}-radio-buttons-group-label`}
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
                  />}
                  label={item} />
              </Grid>
            );
          })}
        </RadioGroup>
      </Grid>
    </Grid>
  )
}

RadioButton.propTypes = {
  tgtName: PropTypes.string,
  tgtArray: PropTypes.array,
  form: PropTypes.object,
  tgtLabel: PropTypes.string,
  onChange: PropTypes.func,
};

export default RadioButton;