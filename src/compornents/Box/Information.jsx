import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const Information = ({ Sentence }) => {
  return (
    <Box component="main"
      p={1}
      sx={{
        flexGrow: 1,
        width: { sm: `calc(100% - 12px)` },
        color: "#666666",
        fontSize: '18px'
      }}
    >
      {Sentence}
    </Box>
  )
}

Information.propTypes = {
  Sentence: PropTypes.string,
};

export default Information;