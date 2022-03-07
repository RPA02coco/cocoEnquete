import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import MajorItems from '../Box/MajorItems';
import { importantPointLists } from '../../constantDefinition/constantDefinition';
import { setCheckcboxValue, setTextBoxValue } from '../../helpers/setValues';
import { TextBox } from '../Input/TextBox';
import CheckBox from '../Input/CheckBox';

const ImportantPoint = ({ form, setForm }) => {

  const changeHandler = (e) => {
    setForm((prev) => {
      if (e.target.name) {
        return e.target.name === 'impPointOthers' ? setTextBoxValue(e, prev) : setCheckcboxValue(e, prev);
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
        <MajorItems Sentence='家づくりで重要視するものはどれですか？※複数回答可' />
      </Grid>
      <CheckBox tgtName='importantPoint' tgtArray={importantPointLists} onChange={changeHandler} form={form} />
      <Grid item xs={12} md={12}>
        {form.importantPoint.value.includes('その他') &&
          <TextBox tgtName='impPointOthers' tgtLabel='その他詳細' form={form} onChange={changeHandler} required={false} />}
      </Grid>
    </Grid>
  )
}

ImportantPoint.propTypes = {
  form: PropTypes.object,
  setForm: PropTypes.func,
};

export default ImportantPoint;
