import PropTypes from 'prop-types';
import { Autocomplete, TextField } from '@mui/material';

const Pulldown = ({ tgtName, tgtArray, tgtLabel ,onChange }) => {
  return (
    <Autocomplete
      disablePortal
      size='small'
      id={tgtName}
      onChange={onChange}
      options={tgtArray}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={tgtLabel} name={tgtName} />}
    />
  )
}

Pulldown.propTypes = {
  tgtName: PropTypes.string,
  tgtArray: PropTypes.array,
  tgtLabel: PropTypes.string,
  onChange: PropTypes.func,
};

export default Pulldown;