import { Chip, Stack, TableContainer, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const PreviewScreen = ({ form }) => {
  const newObj = (
    Object.keys(form).reduce((accu, curr) => {
      let newLabel = '';
      let newValue = [];
      if (curr === 'annualIncome' || curr === 'budget' || curr === 'ownResources') {
        // objから選択肢を表示する処理
      } else {
        newLabel = form[curr].label;
        newValue = newValue.concat(form[curr].value);
        const addObj = { [curr]: { label: newLabel, value: newValue } }
        accu = { ...accu, ...addObj }
      }
      return accu;
    }, {})
  )

  console.log('プレビュー中間地点', newObj);

  return (
    <Stack
      direction='column'
      alignItems='center'
      justifyContent='space-around'
      spacing={2}
    >
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
      >
        <Chip label='設問' key={`key_QuestionTitle_label`} color="primary" variant="outlined" />
        <Chip label='記載・選択内容' key={`key_SelectTitle_label`} color="primary" variant="outlined" />
      </Stack>
      {Object.keys(newObj).map((item) => {
        return (
          <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={2}
            key={`key_${item}_label`}
          >
            {form[item].label} : {newObj[item].value.map((val) => { return val })}
          </Stack>
        )
      })}
    </Stack>
  )
  /* return (
    Object.keys(newObj).map((item) => {
      return (
        <>
          <Chip label={form[item].label} key={`key_${item}_label`} color="primary" variant="outlined" />
          {newObj[item].value.map((val) => {
            console.log('val', val);
            return (
              <Typography variant="body1" key={`key_${item}_${val}_value`} gutterBottom>{val}</Typography>
            )
          })}
        </>
      )
    })
  ) */
}

export default PreviewScreen;

PreviewScreen.propTypes = {
  form: PropTypes.object,
}