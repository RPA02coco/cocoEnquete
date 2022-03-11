import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const ErrorMessage = ({ Sentence }) => {
  return (
    <Box
      sx={{
        flexGrow: 1
        , width: { sm: `calc(100% - 8px)` }
        , color: 'red'
        , fontSize: '8px'
      }}
    >
      {Sentence}
    </Box>
  )
}

ErrorMessage.propTypes = {
  Sentence: PropTypes.string,
};

export default ErrorMessage;