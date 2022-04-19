import PropTypes from 'prop-types';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { ja } from 'date-fns/locale';
import { DatePicker, LocalizationProvider } from "@mui/lab"
import { Grid, TextField } from '@mui/material';
import { errorViewer, errTextViewer } from './TextBox';
import { AttentionSeeker } from 'react-awesome-reveal';

const DateContent = ({ form, tgtName, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ja}>
      <DatePicker className='inputdates'
        label={form[tgtName].label}
        id={tgtName}
        value={form[tgtName].value}
        defaultValue={form[tgtName].value === '' ? '' : form[tgtName].value}
        mask="____年__月__日"
        inputFormat="yyyy年MM月dd日"
        views={['year', 'month', 'day']}
        onChange={onChange}
        variant="outlined"
        renderInput={(params) => <TextField {...params}
          helperText={errTextViewer(form, tgtName)}
          sx={{ backgroundColor: '#ffffff' }}
          error={errorViewer(form, tgtName)} />}
      />
    </LocalizationProvider>
  )
}

DateContent.propTypes = {
  tgtName: PropTypes.string,
  form: PropTypes.object,
  onChange: PropTypes.func,
};

const DateSelect = ({ form, tgtName, onChange }) => {
  if (form[tgtName].valueError && form[tgtName].nextClick) {
    return (
      <AttentionSeeker effect='shake'>
        <DateContent form={form} tgtName={tgtName} onChange={onChange} />
      </AttentionSeeker>
    )
  } else {
    return <DateContent form={form} tgtName={tgtName} onChange={onChange} />
  }
}

DateSelect.propTypes = {
  tgtName: PropTypes.string,
  form: PropTypes.object,
  onChange: PropTypes.func,
};

export default DateSelect;
