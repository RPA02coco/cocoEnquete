import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import MajorItems from '../Box/MajorItems';
import { informationSourceLists } from '../../constantDefinition/constantDefinition';
import CheckBox from '../Input/CheckBox';
import SubItems from '../Box/SubItems';
import { TextBox, TBwithUnit } from '../Input/TextBox';
import { handleChangeText, handleChangeCheckbox } from '../../helpers/setValues';

const InformationGathering = ({ form, setForm }) => {
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
        [e.target.name]: { ...prev[e.target.name], value: handleChangeCheckbox(e, prev) }
      }
    })
  }
  console.log(form);

  const searchWords = (tgtArray, words) => {
    return tgtArray.find(value => value.indexOf(words) !== -1);
  }

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={12}>
          <MajorItems Sentence='情報収集について教えてください' />
        </Grid>
        <SubItems Sentence='当社の情報を収集する際に利用した情報源は何ですか？ ※複数回答可' />
        <CheckBox tgtName='informationSource' tgtArray={informationSourceLists} onChange={checkboxChange} form={form} />
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} ms={12}>
          {searchWords(form.informationSource.value, '夢のおてつだい') &&
            <TextBox tgtName='yumePersonInCharge' tgtLabel='担当者の名前' form={form} onChange={textChange} required={false} />}
        </Grid>
        <Grid item xs={12} ms={12}>
          {searchWords(form.informationSource.value, '知人') &&
            <TBwithUnit tgtName='introducer' tgtLabel='ご紹介者様' form={form} onChange={textChange} required={false} unit='様' />}
        </Grid>
      </Grid>
    </>
  );
};

InformationGathering.propTypes = {
  form: PropTypes.object,
  setForm: PropTypes.func,
};

export default InformationGathering;