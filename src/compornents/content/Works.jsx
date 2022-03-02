import PropTypes from 'prop-types';
import { Grid, Checkbox, FormControlLabel, Autocomplete, TextField } from '@mui/material';
import { workLists, annualIncomeLists, visitPurposeLists } from '../constantDefinition/constantDefinition';
import { setCheckcboxValue, setPulldownValue, setPulldownObj } from '../helpers/setValues';
import MajorItems from '../Box/MajorItems';

const Works = ({ form, setForm }) => {
  const changeHandler = (e) => {
    console.log('setform-name', e);
    setForm((prev) => {
      if (e.target.name) {  // チェックボックス用
        return setCheckcboxValue(e, prev);
      } else if (e.target.id) { // プルダウン用
        if (e.target.id === "") {
          return prev;
        } else {
          return e.target.id.includes('works') ? setPulldownValue(e, prev) : setPulldownObj(e, prev);
        }
      } else {  // null,undefined対策
        return prev;
      }
    });
  };
  console.log(form);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <MajorItems Sentence='◆世帯主様について教えてください' />
        </Grid>
        <Grid item xs={12} md={6}>
          <Autocomplete
            disablePortal
            size='small'
            id="works"
            value={form.works.value}
            onChange={changeHandler}
            options={workLists}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="ご職業" name="works" />}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Autocomplete
            disablePortal
            size='small'
            id="annualIncome"
            value={form.annualIncome.value}
            onChange={changeHandler}
            options={annualIncomeLists}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="ご年収" name="annualIncome" />}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <MajorItems Sentence='本日、当社にご来場いただいた目的は何ですか？※複数回答可' />
        </Grid>
      </Grid>
      <Grid container>
        {visitPurposeLists.map((item, index) => {
          return (
            <Grid item xs={12} md={6} key={`key_visitPurpose${item}`}>
              <FormControlLabel control={
                <Checkbox
                  id={`id_visitPurpose${index}`}
                  value={item}
                  name={'visitPurpose'}
                  checked={form.visitPurpose.value.includes(item)}
                  onChange={changeHandler}
                />}
                label={item} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

Works.propTypes = {
  form: PropTypes.object,
  setForm: PropTypes.func,
};

export default Works;
