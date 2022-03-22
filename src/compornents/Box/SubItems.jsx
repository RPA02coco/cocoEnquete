import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const SubItems = ({ Sentence }) => {
  return (
    <Box component="sub"
      p={1}
      sx={{
        flexGrow: 1
        , width: { sm: `calc(100% - 12px)` }
        , backgroundColor: '#e1eebe'
        , color: 'black'
      }}
    >
      {Sentence}
    </Box>
  )
}

SubItems.propTypes = {
  Sentence: PropTypes.string,
};

export default SubItems;