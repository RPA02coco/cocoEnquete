import PropTypes from 'prop-types';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { ja } from 'date-fns/locale';
import { LocalizationProvider, MobileDatePicker } from "@mui/lab"
import { TextField } from '@mui/material';
import { errorViewer, errTextViewer } from './TextBox';
import { subYears } from 'date-fns'

const DateContent = ({ form, tgtName, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ja}>
      <MobileDatePicker
        // <DatePicker
        disableFuture
        orientation="portrait"
        label={form[tgtName].label}
        value={form[tgtName].value}
        minDate={subYears(new Date(), 130)}
        maxDate={subYears(new Date(), 17)}
        openTo="year"
        mask="____年__月__日"
        inputFormat="yyyy年MM月dd日"
        toolbarFormat="MM月dd日"
        views={['year', 'month', 'day']}
        onChange={onChange}
        variant="outlined"
        renderInput={(params) => <TextField {...params}
          name={tgtName}
          id={tgtName}
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
  return <DateContent form={form} tgtName={tgtName} onChange={onChange} />
}

DateSelect.propTypes = {
  tgtName: PropTypes.string,
  form: PropTypes.object,
  onChange: PropTypes.func,
};

export default DateSelect;
