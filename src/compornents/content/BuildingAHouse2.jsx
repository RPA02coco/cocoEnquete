import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import {
  budgetLists, landExistenceLists, ownResourcesLists,
  documentRequestLists, siteBrowsingLists
} from '../../constantDefinition/constantDefinition';
import { handleChangeText, handleChangePulldwnObj } from '../../helpers/setValues';
import RadioButton from '../Input/RadioButton';
import { TBwithUnit, TextBox } from '../Input/TextBox';
import { PulldownObj } from '../Input/Pulldown';
import Question from '../Box/Question';

const BuildingAHouse2 = ({ form, setForm }) => {
  const textRadioChange = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: { ...prev[e.target.name], value: handleChangeText(e) },
      }
    })
  }

  const pulldownObjChange = (e) => {
    const tgtArray = e.target.name === 'budget' ? budgetLists : ownResourcesLists;
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: { ...prev[e.target.name], value: handleChangePulldwnObj(e, tgtArray) },
      }
    })
  }
  // console.log(form);
  const landLabel = form.landExistence.value === 'あり' ? '' : '希望';

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Question Sentence='家づくりのご計画について教えてください' />
        </Grid>
        <Grid item xs={12} md={6}>
          <PulldownObj tgtName='budget' tgtObj={budgetLists} form={form} tgtLabel='建物予算' onChange={pulldownObjChange} />
        </Grid>
        <Grid item xs={12} md={6}>
          <PulldownObj tgtName='ownResources' tgtObj={ownResourcesLists} form={form} tgtLabel='自己資金' onChange={pulldownObjChange} />
        </Grid>
        <Grid item xs={12} md={12}>
          <RadioButton tgtName='landExistence' tgtArray={landExistenceLists} form={form} tgtLabel='建物用土地の有無' onChange={textRadioChange} required={false} />
        </Grid>
        <Grid item xs={12} md={4}>
          <TBwithUnit
            tgtName='areaOfLand'
            tgtLabel={`${landLabel}面積`}
            form={form}
            onChange={textRadioChange}
            required={false}
            unit='坪'
            type='number'
            inputmode='decimal'
            placeholder=''
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextBox
            tgtName='locationOfLand'
            tgtLabel={`${landLabel}所在地`}
            form={form}
            onChange={textRadioChange}
            required={false}
            type='text'
            placeholder='愛知県豊田市元宮町'
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Question Sentence='情報収集について教えてください' />
        </Grid>
        <Grid item xs={12} md={12}>
          <RadioButton
            tgtName='siteBrowsing'
            tgtArray={siteBrowsingLists}
            form={form}
            tgtLabel='当社のホームページをご覧になったことはありますか？'
            onChange={textRadioChange}
            required={false}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <RadioButton
            tgtName='documentRequest'
            tgtArray={documentRequestLists}
            form={form}
            tgtLabel='当社に資料請求をしていただいたことはありますか？'
            onChange={textRadioChange}
            required={false}
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
