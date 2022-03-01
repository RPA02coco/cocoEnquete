import PropTypes from 'prop-types';
import {Button} from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const SubmitButton = ({onClick}) => {
  return (
    <Button
      onClick={onClick}
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