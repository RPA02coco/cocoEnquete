import PropTypes from 'prop-types';
import { Grid, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import MajorItems from '../Box/MajorItems';
import { currentHomeLists } from '../../constantDefinition/constantDefinition';
import { setRadio } from '../../helpers/setValues';

const BuildingAHouse = ({ form, setForm }) => {
  const changeHandler = (e) => {
    console.log(e);
    setForm((prev) => {
      if (e.target.name) {
        if (e.target.name === 'currentHome') {
          return setRadio(e, prev);
        }
      }
    });
  };
  console.log(form);

  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <MajorItems Sentence='◆家づくりのご計画について教えてください' />
      </Grid>
      <Grid item xs={12} md={12}>
        <FormLabel id="currentHome-radio-buttons-group-label">現在のお住まい</FormLabel>
      </Grid>
      <RadioGroup
        aria-labelledby="currentHome-radio-buttons-group-label"
        defaultValue="female"
        row='true'
        name="currentHome-radio-buttons-group"
      >
        {currentHomeLists.map((item, index) => {
          return (
            <Grid item xs={6} md={4} key={`key_currentHomeLists${item}`}>
              <FormControlLabel value={item} labelPlacement='end' control={
                <Radio
                  id={`id_currentHome${index}`}
                  checked={form.currentHome.value.includes(item)}
                  onChange={changeHandler}
                  value={item}
                  name="currentHome"
                />}
                label={item} />
            </Grid>
          );
        })}
      </RadioGroup>
      
    </Grid >
  )
}

BuildingAHouse.propTypes = {
  form: PropTypes.object,
  setForm: PropTypes.func,
};

export default BuildingAHouse;