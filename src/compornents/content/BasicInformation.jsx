import PropTypes from 'prop-types';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { ja } from 'date-fns/locale';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import TextField from '@mui/material/TextField';
import DatePicker from '@mui/lab/DatePicker';
// import DateTimePicker from '@mui/lab/DateTimePicker';
import errorJudgement from '../helpers/errorJudgment';
import nullJudge from '../helpers/nullJudgement';

const BasicInformation = ({form, setForm}) => {

  const changeHandler = (name) => (value) => {
    setForm((prev) => {
      return {
        ...prev, [name]: {
          ...prev[name],
          value: nullJudge(form, name, value),
          valueError: errorJudgement(name, value),
        }
      }
    })
  }
  console.log(form);

  return (
    <div className='flex flex-col flex justify-center'>
      <div className='flex justify-center p-2'>
        <TextField className='w-full'
          label="世帯主様お名前"
          defaultValue={form.fullname.value===undefined? "":form.fullname.value}
          required={true}
          variant="outlined"
          size="small"
          name="fullname"
          error={form.fullname.valueError}
          helperText={form.fullname.valueError && form.fullname.errorText}
          onChange={changeHandler('fullname')} /></div>
      <div className='flex justify-center p-2'>
        <TextField className='w-full'
          label="フリガナ"
          defaultValue={form.furigana.value===undefined? "":form.furigana.value}
          required={true}
          variant="outlined"
          size="small"
          name="furigana"
          error={form.furigana.valueError}
          helperText={form.furigana.valueError && form.furigana.errorText}
          onChange={changeHandler('furigana')} /></div>
      {/* 
      <div className='p-2 w-48'>
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ja}>
          <DateTimePicker className='inputdates'
            label="ご記入日"
            value={form.dateEntered.value}
            mask="____年__月__日 __:__"
            inputFormat="yyyy年MM月dd日 HH:mm"
            views={['year', 'month', 'day', 'hours', 'minutes']}
            onChange={changeHandler('dateEntered')}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider></div> */}
      <div className='p-2'>
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ja}>
          <DatePicker className='inputdates'
            label="生年月日"
            defaultValue={form.birthday.value===undefined? '': form.birthday.value}
            mask="____年__月__日"
            inputFormat="yyyy年MM月dd日"
            views={['year', 'month', 'day']}
            onChange={changeHandler('birthday')}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider></div>
      <div className='p-2 w-1/2'>
        <TextField
          label="郵便番号"
          defaultValue={form.postCode.value===undefined? "":form.postCode.value}
          variant="outlined"
          size="small"
          type={'tel'}
          name="postCode"
          error={form.postCode.valueError}
          helperText={form.postCode.valueError && form.postCode.errorText}
          onChange={changeHandler('postCode')} /></div>
      <div className='flex justify-center p-2'>
        <TextField className='w-full'
          label="住所"
          defaultValue={form.address.value===undefined? "":form.address.value}
          variant="outlined"
          size="small"
          name="address"
          error={form.address.valueError}
          helperText={form.address.valueError && form.address.errorText}
          onChange={changeHandler('address')} /></div>
      <div className='flex justify-center p-2'>
        <TextField className='w-full'
          label="住所(建物名)"
          defaultValue={form.address2.value===undefined? "":form.address2.value}
          variant="outlined"
          size="small"
          name="address2"
          error={form.address2.valueError}
          helperText={form.address2.valueError && form.address2.errorText}
          onChange={changeHandler('address2')} /></div>
      <div className='flex flex-row'>
        <div className='flex justify-center p-2'>
          <TextField className='w-full'
            label="TEL"
            defaultValue={form.tel.value===undefined? "":form.tel.value}
            variant="outlined"
            size="small"
            type={"tel"}
            name="tel"
            error={form.tel.valueError}
            helperText={form.tel.valueError && form.tel.errorText}
            onChange={changeHandler('tel')} /></div>
        <div className='flex justify-center p-2'>
          <TextField className='w-full'
            label="MAIL"
            defaultValue={form.mail.value===undefined? "":form.mail.value}
            variant="outlined"
            size="small"
            type={"email"}
            name="mail"
            error={form.mail.valueError}
            helperText={form.mail.valueError && form.mail.errorText}
            onChange={changeHandler('mail')} /></div>
      </div>
      <div className='flex flex-row'>
        <div className='flex justify-center p-2'>
          <TextField className='w-full'
            label="ご勤務先"
            defaultValue={form.workPlace.value===undefined? "":form.workPlace.value}
            variant="outlined"
            size="small"
            name="workPlace"
            error={form.workPlace.valueError}
            helperText={form.workPlace.valueError && form.workPlace.errorText}
            onChange={changeHandler('workPlace')} /></div>
        <div className='flex justify-center p-2'>
          <TextField className='w-full'
            label="ご休日"
            defaultValue={form.holiday.value===undefined? "":form.holiday.value}
            variant="outlined"
            size="small"
            name="holiday"
            error={form.holiday.valueError}
            helperText={form.holiday.valueError && form.holiday.errorText}
            onChange={changeHandler('holiday')} /></div>
      </div>
    </div>
  )
}

BasicInformation.propTypes = {
  form: PropTypes.object,
  setForm: PropTypes.func,
};

export default BasicInformation;