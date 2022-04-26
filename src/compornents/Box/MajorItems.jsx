import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const MajorItems = ({ Sentence }) => {
  return (
    <Box component="main"
      p={1}
      sx={{
        flexGrow: 1
        , width: { sm: `calc(100% - 12px)` }
        , backgroundColor: '#1976d2'
        , color: "white"
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