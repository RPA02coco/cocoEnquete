import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const Question = ({ Sentence }) => {
  return (
    <Box component="sub"
      p={1}
      sx={{
        flexGrow: 1,
        width: { sm: `calc(100% - 16px)` },
        color: '#666666',
        fontSize: '16px'
      }}
    >
      {Sentence}
    </Box>
  )
}

Question.propTypes = {
  Sentence: PropTypes.string,
};

export default Question;