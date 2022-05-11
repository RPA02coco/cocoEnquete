import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import makePreviewScreenObj from '../../helpers/makePreviewScreenObj';

const PreviewScreen = ({ form }) => {
  const newObj = makePreviewScreenObj(form);
  console.log('プレビュー中間地点', newObj);

  return (
    <Grid container spacing={2} key={'chk_main'}>
      <Grid item xs={12} md={12}
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - 16px)` },
          color: '#000000',
          fontSize: '20px',
          textAlign: 'center'
        }}
        key={`label_title`}
      >
        ご記入内容の確認
      </Grid>
      {Object.keys(newObj).map((item) => {
        /* console.log('item::', item); */
        return (
          <>
            <Grid item xs={5} md={4}
              sx={{
                flexGrow: 1,
                width: { sm: `calc(100% - 16px)` },
                color: '#666666',
                fontSize: '14px',
              }}
              key={`label_${item}`}
            >
              {form[item].label}
            </Grid>
            <Grid item xs={7} md={8}
              sx={{
                flexGrow: 1,
                width: { sm: `calc(100% - 16px)` },
                color: '#000000',
                fontSize: '16px',
              }}
              key={`content_${item}`}
            >
              {newObj[item].value.map((val, idx) => {
                if (idx > 0) {
                  return (
                    <>
                      <br key={`br_${item}`} />
                      {val}
                    </>
                  )
                } else {
                  return (val === '' ? ' ' : val);
                }
              })}
            </Grid>
          </>
        )
      })}
    </Grid>
  )
}

export default PreviewScreen;

PreviewScreen.propTypes = {
  form: PropTypes.object,
}