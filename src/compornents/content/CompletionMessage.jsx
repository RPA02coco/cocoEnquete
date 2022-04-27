import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import Information from '../Box/Information';

const CompletionMessage = () => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={12}>
        <Information Sentence='アンケートは以上となります。' />
        <Information Sentence='ご協力いただきありがとうございました。' />
      </Grid>
    </Grid>
  )
}

CompletionMessage.propTypes = {
  event: PropTypes.object,
};

export default CompletionMessage;
