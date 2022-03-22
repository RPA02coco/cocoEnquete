import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const SubmitButton = () => {
  return (
    <Button
      size="large"
      type='submit'
      variant="contained"
      startIcon={<ExitToAppIcon />}
      fullWidth
    >
      完了
    </Button>
  );
};

SubmitButton.propTypes = {
  onClick: PropTypes.func,
};

export default SubmitButton;