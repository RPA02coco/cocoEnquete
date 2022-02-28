import PropTypes from 'prop-types';
import {Button} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const NextButton = ({onClick}) => {
  return (
    <Button className='pl-4'
      onClick={onClick}
      variant="contained"
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