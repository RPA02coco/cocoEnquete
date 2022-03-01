import PropTypes from 'prop-types';
import {Button} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BackButton = ({onClick}) => {
  return (
    <Button
      onClick={onClick}
      variant="outlined"
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