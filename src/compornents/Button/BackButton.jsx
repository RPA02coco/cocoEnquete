import PropTypes from 'prop-types';
import {Button} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BackButton = ({onClick}) => {
  return (
    <Button className='pr-4'
      onClick={onClick}
      variant="contained"
      startIcon={<ArrowBackIcon />}
    >
      戻る
    </Button>
  );
};

BackButton.propTypes = {
  onClick: PropTypes.func,
};

export default BackButton;