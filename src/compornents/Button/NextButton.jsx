import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const NextButton = ({ onClick, disabled }) => {
  return (
    <>
      <Button
        size="large"
        disabled={disabled}
        onClick={onClick}
        variant="contained"
        startIcon={<ArrowForwardIcon />}
      >
        次へ
      </Button>
    </>
  );
};

NextButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default NextButton;