import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import MajorItems from '../Box/MajorItems';
import { informationSourceLists } from '../../constantDefinition/constantDefinition';
import CheckBox from '../Input/CheckBox';
import SubItems from '../Box/SubItems';
import { Pulldown } from '../Input/Pulldown';
import { TextBox, TBwithUnit } from '../Input/TextBox';
import { handleChangeText, handleChangePulldwnObj } from '../../helpers/setValues';

const InformationGathering = ({ form, setForm }) => {
  const changeHandler = (e) => {
    setForm((prev) => {
      if (e.target.name) {
        return handleChangeText(e, prev);  // Radiobutton, textboxに対応
      } else if (e.target.id) {
        return e.target.id.includes('budget') ? handleChangePulldwnObj(e, prev, budgetLists, 'budget') : handleChangePulldwnObj(e, prev, ownResourcesLists, 'ownResources');
      } else {
        return prev;
      }
    });
  };
  console.log(form);

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={12}>
          <MajorItems Sentence='情報収集について教えてください' />
        </Grid>
        <SubItems Sentence='当社の情報を収集する際に利用した情報源は何ですか？ ※複数回答可' />
        <CheckBox tgtName='informationSource' tgtArray={informationSourceLists} onChange={changeHandler} form={form} />
      </Grid>
      <Grid container spacing={2}>
        {form.moveInForm.value.includes('夢のおてつだい') &&
          <TextBox tgtName='yumePersonInCharge' tgtLabel='担当者' form={form} onChange={changeHandler} required={false} />}
        {form.moveInForm.value.includes('知人') &&
          <TBwithUnit tgtName='introducer' tgtLabel='ご紹介者様' form={form} onChange={changeHandler} required={false} unit='様' />}
        <Grid item xs={12} ms={12}>
          <Pulldown
            tgtName='firstOpportunity' tgtArray={informationSourceLists} onChange={changeHandler} form={form}
            tgtLabel='当社のことを知るきっかけとなった一番最初の情報源' />
        </Grid>
        <Grid item xs={12} ms={12}>
          <Pulldown
            tgtName='bestOpportunity' tgtArray={informationSourceLists} onChange={changeHandler} form={form}
            tgtLabel='本日のご来場の決め手となった情報源' />
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