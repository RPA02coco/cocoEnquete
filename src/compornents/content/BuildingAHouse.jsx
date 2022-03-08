import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import MajorItems from '../Box/MajorItems';
import { currentHomeLists, moveInFormLists, moveInNumLists } from '../../constantDefinition/constantDefinition';
import { handleChangePulldwnStr, handleChangeText } from '../../helpers/setValues';
import RadioButton from '../Input/RadioButton';
import { TBwithUnit, TextBox } from '../Input/TextBox';
import { Pulldown } from '../Input/Pulldown';

const BuildingAHouse = ({ form, setForm }) => {
  const changeHandler = (e) => {
    setForm((prev) => {
      if (e.target.name) {
        return handleChangeText(e, prev);  // Radiobutton, textboxに対応
      } else if (e.target.id) {
        return e.target.id.includes('moveInNum') ? handleChangePulldwnStr(e, prev, 'moveInNum') : prev;
      } else {
        return prev;
      }
    });
  };
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
          <RadioButton tgtName='currentHome' tgtArray={currentHomeLists} form={form} tgtLabel='現在のお住まい' onChange={changeHandler} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          {form.currentHome.value.includes('賃貸') &&
            <TBwithUnit tgtName='RentPrice' tgtLabel='賃貸 家賃の月額' form={form} onChange={changeHandler} required={false} unit='万円/月' />}
        </Grid>
        <Pulldown tgtName='moveInNum' tgtArray={moveInNumLists} tgtLabel='入居予定人数' onChange={changeHandler} form={form} />
        <Grid item xs={12} md={12}>
          <RadioButton tgtName='moveInForm' tgtArray={moveInFormLists} form={form} tgtLabel='入居形態' onChange={changeHandler} />
          {form.moveInForm.value.includes('その他') &&
            <TextBox tgtName='mvInFormOthers' tgtLabel='その他 詳細' form={form} onChange={changeHandler} required={false} />}
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