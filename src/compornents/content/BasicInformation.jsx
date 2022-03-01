import PropTypes from 'prop-types';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import { ja } from 'date-fns/locale';
import { Grid, TextField } from '@mui/material';
import errorJudgement from '../helpers/errorJudgment';
import nullJudge from '../helpers/nullJudgement';

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
        <TextField fullWidth 
          label="世帯主様お名前"
          defaultValue={form.fullname.value === undefined ? '' : form.fullname.value}
          required={true}
          variant="outlined"
          size="small"
          name="fullname"
          error={form.fullname.valueError}
          helperText={form.fullname.valueError && form.fullname.errorText}
          onChange={changeHandler('fullname')} /></Grid>
      <Grid item xs={12} md={6}>
        <TextField fullWidth
          label="フリガナ"
          defaultValue={form.furigana.value === undefined ? '' : form.furigana.value}
          required={true}
          variant="outlined"
          size="small"
          name="furigana"
          error={form.furigana.valueError}
          helperText={form.furigana.valueError && form.furigana.errorText}
          onChange={changeHandler('furigana')} /></Grid>
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
        </LocalizationProvider></Grid>
      <Grid item xs={12} md={12}>
        <TextField
          label="郵便番号"
          defaultValue={form.postCode.value === undefined ? '' : form.postCode.value}
          variant="outlined"
          size="small"
          type={'tel'}
          name="postCode"
          error={form.postCode.valueError}
          helperText={form.postCode.valueError && form.postCode.errorText}
          onChange={changeHandler('postCode')} /></Grid>
      <Grid item xs={12} md={12}>
        <TextField fullWidth
          label="住所"
          defaultValue={form.address.value === undefined ? '' : form.address.value}
          variant="outlined"
          size="small"
          name="address"
          error={form.address.valueError}
          helperText={form.address.valueError && form.address.errorText}
          onChange={changeHandler('address')} /></Grid>
      <Grid item xs={12} md={12}>
        <TextField fullWidth
          label="住所(建物名)"
          defaultValue={form.address2.value === undefined ? '' : form.address2.value}
          variant="outlined"
          size="small"
          name="address2"
          error={form.address2.valueError}
          helperText={form.address2.valueError && form.address2.errorText}
          onChange={changeHandler('address2')} /></Grid>
      <Grid item xs={12} md={6}>
        <TextField fullWidth
          label="TEL"
          defaultValue={form.tel.value === undefined ? '' : form.tel.value}
          variant="outlined"
          size="small"
          type={'tel'}
          name="tel"
          error={form.tel.valueError}
          helperText={form.tel.valueError && form.tel.errorText}
          onChange={changeHandler('tel')} /></Grid>
      <Grid item xs={12} md={6}>
        <TextField fullWidth
          label="MAIL"
          defaultValue={form.mail.value === undefined ? '' : form.mail.value}
          variant="outlined"
          size="small"
          type={'email'}
          name="mail"
          error={form.mail.valueError}
          helperText={form.mail.valueError && form.mail.errorText}
          onChange={changeHandler('mail')} /></Grid>
      <Grid item xs={12} md={8}>
        <TextField fullWidth
          label="ご勤務先"
          // eslint-disable-next-line max-len
          defaultValue={form.workPlace.value === undefined ? '' : form.workPlace.value}
          variant="outlined"
          size="small"
          name="workPlace"
          error={form.workPlace.valueError}
          helperText={form.workPlace.valueError && form.workPlace.errorText}
          onChange={changeHandler('workPlace')} /></Grid>
      <Grid item xs={12} md={4}>
        <TextField fullWidth
          label="ご休日"
          defaultValue={form.holiday.value === undefined ? '' : form.holiday.value}
          variant="outlined"
          size="small"
          name="holiday"
          error={form.holiday.valueError}
          helperText={form.holiday.valueError && form.holiday.errorText}
          onChange={changeHandler('holiday')} /></Grid>
    </Grid>
  );
};

BasicInformation.propTypes = {
  form: PropTypes.object,
  setForm: PropTypes.func,
};

export default BasicInformation;
