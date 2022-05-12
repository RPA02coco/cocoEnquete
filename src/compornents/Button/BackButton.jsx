import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BackButton = ({ onClick, disabled }) => {
  return (
    <Button
      size="large"
      disabled={disabled}
      onClick={onClick}
      variant="outlined"
      startIcon={<ArrowBackIcon />}
      sx={{
        backgroundColor: 'white',
      }}
    >
      戻る
    </Button>
  );
};

BackButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default BackButton;