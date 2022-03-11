import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BackButton = ({ onClick, disableflg }) => {
  return (
    <Button
      disabled={disableflg}
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
  disableflg: PropTypes.bool,
};

export default BackButton;