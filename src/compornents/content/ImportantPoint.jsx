import PropTypes from 'prop-types';
import { Grid, FormControlLabel, Checkbox } from '@mui/material';
import MajorItems from '../Box/MajorItems';
import { importantPointLists } from '../constantDefinition/constantDefinition';
import { setCheckcboxValue } from '../helpers/setValues';

const ImportantPoint = ({ form, setForm }) => {

  const changeHandler = (e) => {    
    setForm((prev)  => {
      if (e.target.name) {  // チェックボックス用
        return setCheckcboxValue(e, prev);
      } else {
        return prev;
      }
    });
  };
  console.log(form);
  console.log('form.importantPoint.value : ', form.importantPoint.value);
  
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <MajorItems Sentence='本日、当社にご来場いただいた目的は何ですか？※複数回答可' />
      </Grid>
      {importantPointLists.map((item, index) => {
        return (
          <Grid item xs={6} md={4} key={`key_importantPoint${item}`}>
            <FormControlLabel control={
              <Checkbox
                id={`id_importantPoint${index}`}
                value={item}
                name={'importantPoint'}
                checked={form.importantPoint.value.includes(item)}
                onChange={changeHandler}
              />}
              label={item} />
          </Grid>
        );
      })
      }
    </Grid >
  )
}

ImportantPoint.propTypes = {
  form: PropTypes.object,
  setForm: PropTypes.func,
};

export default ImportantPoint;
