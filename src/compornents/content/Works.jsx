import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import { workLists, incomeLists, visitPurposeLists } from '../../constantDefinition/constantDefinition';
import { setCheckcboxValue, setPulldownValue, setPulldownObj, setTextBoxValue } from '../../helpers/setValues';
import MajorItems from '../Box/MajorItems';
import { Pulldown, PulldownObj } from '../Input/Pulldown';
import CheckBox from '../Input/CheckBox';
import { TextBox } from '../Input/TextBox';

const Works = ({ form, setForm }) => {

  const changeHandler = (e) => {
    setForm((prev) => {
      if (e.target.name) {  // チェックボックス用
        return e.target.name === 'vstPrpsOthers' ? setTextBoxValue(e, prev) : setCheckcboxValue(e, prev);
      } else if (e.target.id) { // プルダウン用
        return e.target.id.includes('works') ? setPulldownValue(e, prev, 'works') : setPulldownObj(e, prev, incomeLists, 'annualIncome');
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
          <MajorItems Sentence='世帯主様について教えてください' />
        </Grid>
        <Grid item xs={12} md={6}>
          <Pulldown tgtName='works' tgtArray={workLists} tgtLabel='ご職業' onChange={changeHandler} form={form} />
        </Grid>
        <Grid item xs={12} md={6}>
          <PulldownObj tgtName='annualIncome' tgtObj={incomeLists} tgtLabel='ご年収' onChange={changeHandler} form={form} />
        </Grid>
        <Grid item xs={12} md={12}>
          <MajorItems Sentence='本日、当社にご来場いただいた目的は何ですか？※複数回答可' />
        </Grid>
      </Grid>
      <Grid container>
        <CheckBox tgtName='visitPurpose' tgtArray={visitPurposeLists} onChange={changeHandler} form={form} />
        <Grid item xs={12} md={12}>
          {form.visitPurpose.value.includes('その他') &&
            <TextBox tgtName='vstPrpsOthers' tgtLabel='その他詳細' form={form} onChange={changeHandler} required={false} />}
        </Grid>
      </Grid>
    </>
  );
};

Works.propTypes = {
  form: PropTypes.object,
  setForm: PropTypes.func,
};

export default Works;
