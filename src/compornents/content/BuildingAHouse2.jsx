import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import MajorItems from '../Box/MajorItems';
import {
  budgetLists, landExistenceLists, moveInSeasonLists, ownResourcesLists,
  documentRequestLists, siteBrowsingLists
} from '../../constantDefinition/constantDefinition';
import { handleChangePulldwnObj, handleChangeText } from '../../helpers/setValues';
import RadioButton from '../Input/RadioButton';
import { TBwithUnit, TextBox } from '../Input/TextBox';
import { PulldownObj } from '../Input/Pulldown';

const BuildingAHouse2 = ({ form, setForm }) => {
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
  const landLabel = form.landExistence.value === 'あり' ? '' : '希望';

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={12}>
          <MajorItems Sentence='家づくりのご計画について教えてください' />
        </Grid>
        <Grid item xs={12} md={12}>
          <RadioButton tgtName='moveInSeason' tgtArray={moveInSeasonLists} form={form} tgtLabel='入居希望時期' onChange={changeHandler} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <PulldownObj tgtName='budget' tgtObj={budgetLists} form={form} tgtLabel='建物予算' onChange={changeHandler} />
        </Grid>
        <Grid item xs={12} md={12}>
          <PulldownObj tgtName='ownResources' tgtObj={ownResourcesLists} form={form} tgtLabel='自己資金' onChange={changeHandler} />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={12}>
          <RadioButton tgtName='landExistence' tgtArray={landExistenceLists} form={form} tgtLabel='建物用土地の有無' onChange={changeHandler} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <TBwithUnit tgtName='areaOfLand' tgtLabel={`${landLabel}面積`} form={form} onChange={changeHandler} required={false} unit='坪' />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextBox tgtName='locationOfLand' tgtLabel={`${landLabel}所在地`} form={form} onChange={changeHandler} required={false} />
        </Grid>
        <Grid item xs={12} md={12}>
          <MajorItems Sentence='情報収集について教えてください' />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={12}>
          <RadioButton
            tgtName='siteBrowsing'
            tgtArray={siteBrowsingLists}
            form={form}
            tgtLabel='当社のホームページをご覧になったことはありますか？'
            onChange={changeHandler}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <RadioButton
            tgtName='documentRequest'
            tgtArray={documentRequestLists}
            form={form}
            tgtLabel='当社に資料請求をしていただいたことはありますか？'
            onChange={changeHandler}
          />
        </Grid>
      </Grid>
    </>
  )
}

BuildingAHouse2.propTypes = {
  form: PropTypes.object,
  setForm: PropTypes.func,
};

export default BuildingAHouse2;
