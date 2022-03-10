import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import MajorItems from '../Box/MajorItems';
import { informationSourceLists } from '../../constantDefinition/constantDefinition';
import { Pulldown } from '../Input/Pulldown';
import { handleChangePulldwnStr } from '../../helpers/setValues';

const InformationGathering2 = ({ form, setForm }) => {
  const pulldownChange = (e) => {
    const name = e.target.id.includes('firstOpportunity') ? 'firstOpportunity' : 'bestOpportunity';
    setForm((prev) => {
      return {
        ...prev,
        [name]: { ...prev[name], value: handleChangePulldwnStr(e) },
      }
    })
  }
  console.log(form);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <MajorItems Sentence='情報収集について教えてください' />
      </Grid>
      <Grid item xs={12} ms={12}>
        <Pulldown
          tgtName='firstOpportunity' tgtArray={informationSourceLists} onChange={pulldownChange} form={form}
          tgtLabel='当社のことを知るきっかけとなった一番最初の情報源' />
      </Grid>
      <Grid item xs={12} ms={12}>
        <Pulldown
          tgtName='bestOpportunity' tgtArray={informationSourceLists} onChange={pulldownChange} form={form}
          tgtLabel='本日のご来場の決め手となった情報源' />
      </Grid>
    </Grid>
  );
};

InformationGathering2.propTypes = {
  form: PropTypes.object,
  setForm: PropTypes.func,
};

export default InformationGathering2;