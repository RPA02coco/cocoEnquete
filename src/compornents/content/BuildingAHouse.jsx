import PropTypes from 'prop-types';
import { FormLabel, Grid, RadioGroup } from '@mui/material';
import Question from '../Box/Question';
import { currentHomeLists, moveInFormLists, moveInNumLists, moveInSeasonLists } from '../../constantDefinition/constantDefinition';
import { handleChangePulldwnStr, handleChangeText } from '../../helpers/setValues';
import RadioButton from '../Input/RadioButton';
import { TBwithUnit, TextBox } from '../Input/TextBox';
import { Pulldown } from '../Input/Pulldown';
import errorJudgement from '../../helpers/errorJudgment';

const BuildingAHouse = ({ form, setForm }) => {
  const TextRadioChange = (e) => {
    const value = handleChangeText(e);
    setForm((prev) => {
      let newForm = {};
      if (e.target.name === 'moveInForm' && (prev.moveInForm.value.includes('その他') === false && e.target.value === 'その他')) {
        newForm = {
          ...prev,
          [e.target.name]: {
            ...prev[e.target.name],
            value: value,
            valueError: errorJudgement(e.target.name, value),
          },
          ['mvInFormOthers']: {
            ...prev['mvInFormOthers'],
            value: prev.mvInFormOthers.value,
            valueError: errorJudgement('mvInFormOthers', prev.mvInFormOthers.value)
          },
        }
      } else {
        newForm = {
          ...prev,
          [e.target.name]: {
            ...prev[e.target.name],
            value: value,
            valueError: errorJudgement(e.target.name, value),
          },
        }
      }
      return newForm;
    });
  }

  const PulldownChange = (e) => {
    setForm((prev) => {
      const value = handleChangePulldwnStr(e);
      return {
        ...prev,
        [e.target.name]: {
          ...prev[e.target.name],
          value: value,
          valueError: errorJudgement(e.target.name, value),
        },
      }
    })
  }

  const textRadioChange = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: { ...prev[e.target.name], value: handleChangeText(e) },
      }
    })
  }
  // console.log(form);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Question Sentence='家づくりのご計画について教えてください' />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={12}>
          <RadioButton tgtName='currentHome' tgtArray={currentHomeLists} form={form} tgtLabel='現在のお住まい' onChange={TextRadioChange} required={false} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          {form.currentHome.value.includes('賃貸') &&
            <TBwithUnit
              tgtName='rentPrice'
              tgtLabel='賃貸 家賃の月額'
              form={form}
              onChange={TextRadioChange}
              required={false}
              unit='万円/月'
              type='number'
              placeholder=''
            />}
        </Grid>
        <Grid item xs={12} md={6}>
          <Pulldown tgtName='moveInNum' tgtArray={moveInNumLists} tgtLabel='【必須】入居予定人数' onChange={PulldownChange} form={form} required={true} />
        </Grid>
        <Grid item xs={12} md={12}>
          <RadioButton tgtName='moveInForm' tgtArray={moveInFormLists} form={form} tgtLabel='【必須】入居形態' onChange={TextRadioChange} required={true} />
          {form.moveInForm.value.includes('その他') &&
            <TextBox
              tgtName='mvInFormOthers'
              tgtLabel='入居形態詳細'
              form={form}
              onChange={TextRadioChange}
              required={form.moveInForm.value.includes('その他') ? true : false}
              type='text'
              placeholder=''
            />}
        </Grid>
        <Grid item xs={12} md={12}>
          <RadioButton tgtName='moveInSeason' tgtArray={moveInSeasonLists} form={form} tgtLabel='入居希望時期' onChange={textRadioChange} required={false} />
        </Grid>
      </Grid >
    </>
  )
}

BuildingAHouse.propTypes = {
  form: PropTypes.object,
  setForm: PropTypes.func,
};

export default BuildingAHouse;