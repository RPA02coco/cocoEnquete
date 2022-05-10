import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import { workLists, incomeLists, visitPurposeLists } from '../../constantDefinition/constantDefinition';
import { handleChangeCheckbox, handleChangePulldwnObj, handleChangePulldwnStr, handleChangeText } from '../../helpers/setValues';
import { Pulldown, PulldownObj } from '../Input/Pulldown';
import CheckBox from '../Input/CheckBox';
import { TextBox } from '../Input/TextBox';
import errorJudgement from '../../helpers/errorJudgment';
import Question from '../Box/Question';

const Works = ({ form, setForm }) => {
  const textBoxChange = (e) => {
    const newValue = handleChangeText(e);
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: {
          ...prev[e.target.name],
          value: newValue,
          valueError: errorJudgement('vstPrpsOthers', newValue)
        },
      }
    })
  }

  const CheckBoxChange = (e) => {
    setForm((prev) => {
      if (e.target.name === 'visitPurpose') {
        let newForm = {};
        if (prev.visitPurpose.value.includes('その他') === false && e.target.value === 'その他') {
          const newValue1 = handleChangeCheckbox(e, prev);
          newForm = {
            ...prev,
            [e.target.name]: {
              ...prev[e.target.name],
              value: newValue1,
              valueError: errorJudgement(e.target.name, newValue1)
            },
            ['vstPrpsOthers']: {
              ...prev['vstPrpsOthers'],
              value: prev.vstPrpsOthers.value,
              valueError: errorJudgement('vstPrpsOthers', prev.vstPrpsOthers.value)
            },
          }
        } else {
          newForm = {
            ...prev,
            [e.target.name]: {
              ...prev[e.target.name],
              value: handleChangeCheckbox(e, prev),
              valueError: errorJudgement(e.target.name, handleChangeCheckbox(e, prev))
            },
          }
        }
        return newForm;
      }
    })
  }

  const pulldownChange = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: { ...prev[e.target.name], value: handleChangePulldwnStr(e) },
      }
    })
  }

  const pulldownObjChange = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: { ...prev[e.target.name], value: handleChangePulldwnObj(e, incomeLists) },
      }
    })
  }
  // console.log(form);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Question Sentence='世帯主様について教えてください' />
        </Grid>
        <Grid item xs={12} md={6}>
          <Pulldown tgtName='works' tgtArray={workLists} tgtLabel='ご職業' onChange={pulldownChange} form={form} required={false} />
        </Grid>
        <Grid item xs={12} md={6}>
          <PulldownObj tgtName='annualIncome' tgtObj={incomeLists} tgtLabel='ご年収' onChange={pulldownObjChange} form={form} />
        </Grid>
        <Grid item xs={12} md={12}>
        </Grid>
      </Grid>
      <Grid container>
        <CheckBox
          tgtName='visitPurpose' tgtArray={visitPurposeLists} onChange={CheckBoxChange} form={form} required={true}
          tgtLabel='【必須】本日、当社にご来場いただいた目的は何ですか？※複数回答可' />
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          {form.visitPurpose.value.includes('その他') &&
            <TextBox
              tgtName='vstPrpsOthers'
              tgtLabel='【必須】その他詳細'
              form={form}
              onChange={textBoxChange}
              required={form.visitPurpose.value.includes('その他') ? true : false}
              type='text'
              placeholder=''
            />}
        </Grid>
        <Grid item xs={12} md={12}></Grid>
      </Grid>
    </>
  );
};

Works.propTypes = {
  form: PropTypes.object,
  setForm: PropTypes.func,
};

export default Works;
