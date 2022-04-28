import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import { Pulldown } from '../Input/Pulldown';
import { handleChangePulldwnStr } from '../../helpers/setValues';
import Question from '../Box/Question';

const InformationGathering2 = ({ form, setForm }) => {
  const pulldownChange = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: { ...prev[e.target.name], value: handleChangePulldwnStr(e) },
      }
    })
  }

  const newArray = form.informationSource.value.length < 1 ?
    ['該当なし']
    : ['選択してください'].concat(form.informationSource.value);

  // console.log(form);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <Question Sentence='情報収集について教えてください' />
      </Grid>
      <Grid item xs={12} ms={12}>
        <Pulldown
          tgtName='firstOpportunity' tgtArray={newArray} onChange={pulldownChange} form={form}
          tgtLabel='当社のことを知るきっかけとなった一番最初の情報源' required={false} />
      </Grid>
      <Grid item xs={12} ms={12}>
        <Pulldown
          tgtName='bestOpportunity' tgtArray={newArray} onChange={pulldownChange} form={form}
          tgtLabel='本日のご来場の決め手となった情報源' required={false} />
      </Grid>
    </Grid>
  );
};

InformationGathering2.propTypes = {
  form: PropTypes.object,
  setForm: PropTypes.func,
};

export default InformationGathering2;