import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const MajorItems = ({ Sentence }) => {
  return (
    <Box component="main"
      sx={{
        flexGrow: 1
        , width: { sm: `calc(100% - 12px)` }
        , backgroundColor: '#9acd32'
      }}
    >
      {Sentence}
    </Box>
  )
}

MajorItems.propTypes = {
  Sentence: PropTypes.string,
};

export default MajorItems;