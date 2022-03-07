import PropTypes from 'prop-types';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import { ja } from 'date-fns/locale';
import { Grid, TextField } from '@mui/material';
import errorJudgement from '../../helpers/errorJudgment';
import nullJudge from '../../helpers/nullJudgement';
import { TextBox } from '../Input/TextBox';

const BasicInformation = ({ form, setForm }) => {
  const changeHandler = (name) => (value) => {
    setForm((prev) => {
      return {
        ...prev, [name]: {
          ...prev[name],
          value: nullJudge(form, name, value),
          valueError: errorJudgement(name, value),
        },
      };
    });
  };
  console.log(form);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TextBox tgtName='fullname' tgtLabel='世帯主様お名前' form={form} onChange={changeHandler('fullname')} required={true} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextBox tgtName='furigana' tgtLabel='フリガナ' form={form} onChange={changeHandler('furigana')} required={true} />
      </Grid>
      <Grid item xs={12} md={12}>
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ja}>
          <DatePicker className='inputdates'
            label="生年月日"
            value={form.birthday.value}
            defaultValue={form.birthday.value === '' ? '' : form.birthday.value}
            mask="____年__月__日"
            inputFormat="yyyy年MM月dd日"
            views={['year', 'month', 'day']}
            onChange={changeHandler('birthday')}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={8} md={6}>
        <TextBox tgtName='postCode' tgtLabel='郵便番号' form={form} onChange={changeHandler('postCode')} required={true} />
      </Grid>
      <Grid item xs={12} md={12}>
        <TextBox tgtName='address' tgtLabel='住所' form={form} onChange={changeHandler('address')} required={true} />
      </Grid>
      <Grid item xs={12} md={12}>
        <TextBox tgtName='address2' tgtLabel='住所(建物名)' form={form} onChange={changeHandler('address2')} required={false} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextBox tgtName='tel' tgtLabel='TEL' form={form} onChange={changeHandler('tel')} required={true} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextBox tgtName='mail' tgtLabel='MAIL' form={form} onChange={changeHandler('mail')} required={true} />
      </Grid>
      <Grid item xs={12} md={8}>
        <TextBox tgtName='workPlace' tgtLabel='ご勤務先' form={form} onChange={changeHandler('workPlace')} required={false} />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextBox tgtName='holiday' tgtLabel='ご休日' form={form} onChange={changeHandler('holiday')} required={false} />
      </Grid>
    </Grid>
  );
};

BasicInformation.propTypes = {
  form: PropTypes.object,
  setForm: PropTypes.func,
};

export default BasicInformation;
