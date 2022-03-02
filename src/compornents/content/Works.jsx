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
        console.log('checkpoint-1', e.target.name);
        return setCheckcboxValue(e, prev);
      } else if (e.target.id) { // プルダウン用
        console.log('checkpoint-2');
        return e.target.id.includes('works') ? setPulldownValue(e, prev, 'works') : setPulldownValue(e, prev, 'annualIncome');
      } else {  // null,undefined対策
        return prev;
      }
    });
  };
  console.log(form);

  {/*
  defaultValue={form.works.value === undefined ? '選択してください' : form.works.value}
  value={form.works.value}
  */}

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
              {form.visitPurpose.value.includes('その他') && item === 'その他' &&
                <TextField fullWidth
                  label="その他詳細"
                  defaultValue={form.visitPurpose.value.indexOf('その他') === -1 ? '' : form.visitPurpose.value[form.visitPurpose.value.indexOf('その他')]}
                  variant="outlined"
                  size="small"
                  name="visitPurposeOther"
                  error={form.visitPurpose.valueError}
                  helperText={form.visitPurpose.valueError && form.visitPurpose.errorText}
                  onChange={changeHandler} />}
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
