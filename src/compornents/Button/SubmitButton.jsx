import PropTypes from 'prop-types';
import {Button} from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const SubmitButton = () => {
  return (
    <Button
      type='submit'
      variant="contained"
      startIcon={<ExitToAppIcon />}
    >
      完了
    </Button>
  );
};

SubmitButton.propTypes = {
  onClick: PropTypes.func,
};

export default SubmitButton;