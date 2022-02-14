import PropTypes from 'prop-types';
import {Button} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './NextButton.css';

const BackButton = ({onClick}) => {
  return (
    <Button className='backButton'
      onClick={onClick}
      variant="contained"
      startIcon={<ArrowBackIcon />}
    >
      戻る
    </Button>
  );
};

BackButton.propTypes = {
  event: PropTypes.object,
};

export default BackButton;