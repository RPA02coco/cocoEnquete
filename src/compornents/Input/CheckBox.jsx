import PropTypes from 'prop-types';
import { Grid, FormControlLabel, Checkbox } from '@mui/material';

const CheckBox = ({ tgtName, tgtArray, onChange, form, required }) => {
  console.log('checkbox required::', tgtName, required);
  return (
    <>
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
    </>
  )
}

CheckBox.propTypes = {
  tgtName: PropTypes.string,
  tgtArray: PropTypes.array,
  form: PropTypes.object,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};

export default CheckBox;