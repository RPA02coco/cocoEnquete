import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import MajorItems from '../Box/MajorItems';
import { importantPointLists } from '../../constantDefinition/constantDefinition';
import { handleChangeCheckbox, handleChangeText } from '../../helpers/setValues';
import { TextBox } from '../Input/TextBox';
import CheckBox from '../Input/CheckBox';

const ImportantPoint = ({ form, setForm }) => {
  const textChange = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: { ...prev[e.target.name], value: handleChangeText(e) },
      }
    })
  }

  const checkboxChange = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: { ...prev[e.target.name], value: handleChangeCheckbox(e, prev)}
      }
    })
  }
  console.log(form);

  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <MajorItems Sentence='家づくりで重要視するものはどれですか？※複数回答可' />
      </Grid>
      <CheckBox tgtName='importantPoint' tgtArray={importantPointLists} onChange={checkboxChange} form={form} />
      <Grid item xs={12} md={12}>
        {form.importantPoint.value.includes('その他') &&
          <TextBox tgtName='impPointOthers' tgtLabel='その他詳細' form={form} onChange={textChange} required={false} />}
      </Grid>
    </Grid>
  )
}

ImportantPoint.propTypes = {
  form: PropTypes.object,
  setForm: PropTypes.func,
};

export default ImportantPoint;
