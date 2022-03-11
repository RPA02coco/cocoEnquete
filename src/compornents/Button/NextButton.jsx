import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ErrorMessage from '../Box/ErrorMessage';

const NextButton = ({ onClick, disableflg }) => {
  return (
    <>
      <Button
        disabled={disableflg}
        onClick={onClick}
        variant="outlined"
        startIcon={<ArrowForwardIcon />}
      >
        次へ
      </Button>
      <br />
      {disableflg && <ErrorMessage Sentence='入力エラーがあります。ご確認ください。' />}
    </>
  );
};

NextButton.propTypes = {
  onClick: PropTypes.func,
  disableflg: PropTypes.bool,
};

export default NextButton;