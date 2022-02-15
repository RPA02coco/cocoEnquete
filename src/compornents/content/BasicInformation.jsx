import PropTypes from 'prop-types';
import { useState } from 'react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { ja } from 'date-fns/locale';
import format from 'date-fns/format';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import TextField from '@mui/material/TextField';
import DatePicker from '@mui/lab/DatePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import errorJudgement from '../helpers/errorJudgment';
import replaced from '../helpers/replaced';

const BasicInformation = () => {
  const [form, setForm] = useState({
    fullname: { label: '名前', value: '', valueError: false, errorText: '文字列が長すぎます' },
    furigana: { label: 'フリガナ', value: '', valueError: false, errorText: '文字列が長すぎます' },
    dateEntered: { label: '記入日', value: '', valueError: false, errorText: '入力エラー' },
    birthday: { label: '誕生日', value: '', valueError: false, errorText: '入力エラー' },
    postCode: { label: '郵便番号', value: '', valueError: false, errorText: '8文字以下の数字で入力してください。入力例:442-0888' },
    address: { label: '住所', value: '', valueError: false, errorText: '入力エラー' },
    tel: { label: 'TEL', value: '', valueError: false, errorText: '数字で入力してください。入力例:090-1111-2222' },
    mail: { label: 'MAIL', value: '', valueError: false, errorText: '英数字で入力してください。入力例:sample@mail.jp' },
    workPlace: { label: 'ご勤務先', value: '', valueError: false, errorText: '入力エラー' },
    holiday: { label: 'ご休日', value: '', valueError: false, errorText: '入力エラー' },
  });

  const changeHandler = (name) => (value) => {
    // setDateEntered(newValue);
    setForm((prev) => {
      return {
        ...prev, [name]: {
          ...prev[name],
          value: value.target ? replaced(value.target.value) : format(value, 'yyyy-MM-dd HH:mm'),
          valueError: errorJudgement(name, value),
        }
      }
    })
  }

  console.log(form);
  return (
    <div className='flex flex-col'>
      <div><TextField
        label="世帯主様お名前"
        variant="outlined"
        name="fullname"
        error={form.fullname.valueError}
        helperText={form.fullname.valueError && form.fullname.errorText}
        onChange={changeHandler('fullname')} /></div>
      <div><TextField
        label="フリガナ"
        variant="outlined"
        name="furigana"
        error={form.furigana.valueError}
        helperText={form.furigana.valueError && form.furigana.errorText}
        onChange={changeHandler('furigana')} /></div>
      <div><LocalizationProvider dateAdapter={AdapterDateFns} locale={ja}>
        <DateTimePicker className='inputdates'
          label="年月日 時間"
          value={form.dateEntered.value}
          mask="____年__月__日 __:__"
          inputFormat="yyyy年MM月dd日 HH:mm"
          views={['year', 'month', 'day', 'hours', 'minutes']}
          onChange={changeHandler('dateEntered')}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider></div>
      <div><LocalizationProvider dateAdapter={AdapterDateFns} locale={ja}>
          <DatePicker className='inputdates'
            label="年月日"
            value={form.birthday.value}
            mask="____年__月__日"
            inputFormat="yyyy年MM月dd日"
            views={['year', 'month', 'day']}
            onChange={changeHandler('birthday')}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider></div>
      <div><TextField
        label="郵便番号"
        variant="outlined"
        name="postCode"
        error={form.postCode.valueError}
        helperText={form.postCode.valueError && form.postCode.errorText}
        onChange={changeHandler('postCode')} /></div>
      <div><TextField
        label="住所"
        variant="outlined"
        name="address"
        error={form.address.valueError}
        helperText={form.address.valueError && form.address.errorText}
        onChange={changeHandler('address')} /></div>
      <div><TextField
        label="TEL"
        variant="outlined"
        name="tel"
        error={form.tel.valueError}
        helperText={form.tel.valueError && form.tel.errorText}
        onChange={changeHandler('tel')} /></div>
      <div><TextField
        label="MAIL"
        variant="outlined"
        name="mail"
        error={form.mail.valueError}
        helperText={form.mail.valueError && form.mail.errorText}
        onChange={changeHandler('mail')} /></div>
      <div><TextField
        label="ご勤務先"
        variant="outlined"
        name="workPlace"
        error={form.workPlace.valueError}
        helperText={form.workPlace.valueError && form.workPlace.errorText}
        onChange={changeHandler('workPlace')} /></div>
      <div><TextField
        label="ご休日"
        variant="outlined"
        name="holiday"
        error={form.holiday.valueError}
        helperText={form.holiday.valueError && form.holiday.errorText}
        onChange={changeHandler('holiday')} /></div>
    </div>
  )
}

BasicInformation.propTypes = {
  event: PropTypes.object,
};

export default BasicInformation;