import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import MajorItems from '../Box/MajorItems';
import { currentHomeLists, moveInFormLists, moveInNumLists } from '../../constantDefinition/constantDefinition';
import { handleChangePulldwnStr, handleChangeText } from '../../helpers/setValues';
import RadioButton from '../Input/RadioButton';
import { TBwithUnit, TextBox } from '../Input/TextBox';
import { Pulldown } from '../Input/Pulldown';

const BuildingAHouse = ({ form, setForm }) => {
  const TextRadioChange = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: { ...prev[e.target.name], value: handleChangeText(e, prev) },
      }
    })
  }

  const PulldownChange = (e, currentValue) => {
    setForm((prev) => {
      return {
        ...prev,
        ['moveInNum']: { ...prev['moveInNum'], value: currentValue },
      }
    })
  }
  console.log(form);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <MajorItems Sentence='家づくりのご計画について教えてください' />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={12}>
          <RadioButton tgtName='currentHome' tgtArray={currentHomeLists} form={form} tgtLabel='現在のお住まい' onChange={TextRadioChange} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          {form.currentHome.value.includes('賃貸') &&
            <TBwithUnit tgtName='rentPrice' tgtLabel='賃貸 家賃の月額' form={form} onChange={TextRadioChange} required={false} unit='万円/月' />}
        </Grid>
        <Pulldown tgtName='moveInNum' tgtArray={moveInNumLists} tgtLabel='入居予定人数' onChange={PulldownChange} form={form} />
        <Grid item xs={12} md={12}>
          <RadioButton tgtName='moveInForm' tgtArray={moveInFormLists} form={form} tgtLabel='入居形態' onChange={TextRadioChange} />
          {form.moveInForm.value.includes('その他') &&
            <TextBox tgtName='mvInFormOthers' tgtLabel='その他 詳細' form={form} onChange={TextRadioChange} required={false} />}
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