import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const Explanation = ({ children }) => {
  return (
    <Box component="main"
      p={2}
      sx={{
        flexGrow: 1,
        width: { sm: `calc(100% - 16px)` },
        color: '#666666',
        fontSize: '16px',
      }}
    >
      {children}
    </Box>
  )
}

Explanation.propTypes = {
  children: PropTypes.node,
};

export default Explanation;