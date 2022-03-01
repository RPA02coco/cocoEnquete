import PropTypes from 'prop-types';
import {Button} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const NextButton = ({onClick}) => {
  return (
    <Button
      onClick={onClick}
      variant="outlined"
      startIcon={<ArrowForwardIcon />}
    >
      次へ
    </Button>
  );
};

NextButton.propTypes = {
  onClick: PropTypes.func,
};

export default NextButton;