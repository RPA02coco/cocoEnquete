import { Divider, Grid, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import makePreviewScreenObj from '../../helpers/makePreviewScreenObj';

const PreviewScreen = ({ form }) => {
  const newObj = makePreviewScreenObj(form);
  // console.log('プレビュー中間地点', newObj);

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={2}
      key={`labelTitle`}
    >
      ご記入内容の確認
      <br />
      {Object.keys(newObj).map((item) => {
        /* console.log('item::', item); */
        return (
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            key={`listsValues_${item}`}
          >
            <Stack
              direction="row"
              justifyContent="space-around"
              alignItems="flex-end"
              spacing={1}
              key={`labelGroup_${item}`}
            >
              <Typography
                variant='caption'
                sx={{ color: 'gray' }}
                key={`label_${item}`}>
                {form[item].label.replace('【必須】', '') + ' '}
              </Typography>
              {(form[item].label.indexOf('【必須】') !== -1) &&
                <Typography
                  variant='caption'
                  sx={{
                    borderRadius: '5px',
                    padding: '1px',
                    backgroundColor: 'red',
                    color: 'white'
                  }}
                  key={`label_${item}_required`}>
                  必須
                </Typography>}
            </Stack>

            {newObj[item].value.map((val) => {
              const newVal = (val === '' ? ' ' : val);
              return <Typography key={`${item}_${val}`}>{newVal}</Typography>;
            })}
          </Stack>
        )
      })}
    </Stack>
  )
}

export default PreviewScreen;

PreviewScreen.propTypes = {
  form: PropTypes.object,
}