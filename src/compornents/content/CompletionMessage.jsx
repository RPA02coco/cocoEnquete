import PropTypes from 'prop-types';
import { Grid, Box } from '@mui/material';
import MajorItems from '../Box/MajorItems';

const CompletionMessage = () => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={12}>
        <Box component="main"
          sx={{
            flexGrow: 1
            , width: { sm: `calc(100% - 12px)` }
            , backgroundColor: '#9acd32'
            , textAlign: 'center'
            , padding: '10%'
          }}
        >
          {`これでアンケートの入力は完了です。
        ご協力ありがとうございました。`}
        </Box>
      </Grid>
    </Grid>
  )
}

CompletionMessage.propTypes = {
  event: PropTypes.object,
};

export default CompletionMessage;
